import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';
import SEO from '../components/SEO';
import InstructionCard from '../components/InstructionCard';
import DemoLimitCard from '../components/DemoLimitCard';
import ResultCard from '../components/ResultCard';
import { analyzeImageMock, ScanResult } from '../mocks/scanMock';

// Downscale helper function
async function downscaleToDataUrl(file: File, maxSide = 1280): Promise<string> {
  const img = document.createElement("img");
  const url = URL.createObjectURL(file);
  await new Promise<void>((res, rej) => {
    img.onload = () => res();
    img.onerror = rej;
    img.src = url;
  });
  const { width, height } = img;
  const scale = Math.min(1, maxSide / Math.max(width, height));
  const w = Math.round(width * scale);
  const h = Math.round(height * scale);
  const canvas = document.createElement("canvas");
  canvas.width = w; 
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(img, 0, 0, w, h);
  URL.revokeObjectURL(url);
  return canvas.toDataURL("image/jpeg", 0.8);
}

type ScanState = 
  | { status: "idle" }
  | { status: "loading"; fileName?: string }
  | { status: "done"; imageUrl: string; data: ScanResult }
  | { status: "error"; message: string };

const Scan = () => {
  const { t, i18n } = useTranslation();
  const isThai = i18n.language === 'th';
  const fileRef = useRef<HTMLInputElement>(null);
  
  const [state, setState] = useState<ScanState>({ status: "idle" });
  const [dragOver, setDragOver] = useState(false);

  // Load last result from localStorage on mount
  useEffect(() => {
    const lastResult = localStorage.getItem('rai_web_demo_scan');
    if (lastResult) {
      try {
        const parsed = JSON.parse(lastResult);
        setState({ 
          status: "done", 
          imageUrl: parsed.imageUrl || '', 
          data: parsed 
        });
      } catch (e) {
        console.error('Error parsing stored result:', e);
      }
    }
  }, []);

  const validateImage = (file: File): string | null => {
    if (!file.type.match(/^image\/(jpeg|jpg|png)$/)) {
      return isThai ? 'รองรับเฉพาะไฟล์ JPG/PNG' : 'Only JPG/PNG files supported';
    }
    if (file.size > 5 * 1024 * 1024) {
      return isThai ? 'ขนาดไฟล์ไม่เกิน 5MB' : 'File size must be under 5MB';
    }
    return null;
  };

  const handleFile = async (file: File) => {
    const validationError = validateImage(file);
    if (validationError) {
      setState({ status: "error", message: validationError });
      return;
    }

    setState({ status: "loading", fileName: file.name });
    
    try {
      // Downscale image for preview
      const imageUrl = await downscaleToDataUrl(file);
      
      // Analyze image with mock data (automatic crop detection)
      const data = await analyzeImageMock(file);
      
      // Save to localStorage
      localStorage.setItem('rai_web_demo_scan', JSON.stringify({ 
        ts: Date.now(), 
        crop: data.crop, 
        data, 
        imageUrl 
      }));
      
      setState({ status: "done", imageUrl, data });
    } catch (err) {
      console.error('Error processing image:', err);
      setState({ 
        status: "error", 
        message: isThai ? 'วิเคราะห์ไม่สำเร็จ โปรดลองใหม่' : 'Analysis failed, please try again' 
      });
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const onDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const scanAgain = () => {
    setState({ status: "idle" });
    fileRef.current?.click();
  };

  return (
    <>
      <SEO
        title={isThai ? 'สแกนพืช (ตัวอย่าง) | Rai AI' : 'Scan Crop (Demo) | Rai AI'}
        description={isThai ? 'สแกนใบข้าวหรือทุเรียนเพื่อตรวจโรค ศัตรูพืช และการขาดธาตุอาหาร (ตัวอย่าง)' : 'Scan rice or durian leaves to detect diseases, pests, and nutrient deficiencies (demo)'}
        keywords="สแกนพืช, ตรวจโรคพืช, ทุเรียน, ข้าว, Rai AI, เกษตรอัจฉริยะ"
        url="https://raiai.app/scan"
      />
      <div className="min-h-screen bg-gradient-to-br from-rai-green-50 to-rai-teal-50 py-12 pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Camera className="w-12 h-12 text-green-600" />
              <h1 className="text-4xl font-bold text-gray-900">
                {isThai ? 'สแกนพืช' : 'Scan Crop'}
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {isThai
                ? 'สแกนใบข้าวหรือทุเรียนเพื่อตรวจโรค ศัตรูพืช และการขาดธาตุอาหาร'
                : 'Scan rice or durian leaves to detect diseases, pests, and nutrient deficiencies'
              }
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Instruction Card */}
            <InstructionCard />

            {/* Scan Area */}
            <div className="card">
              {state.status === "loading" ? (
                /* Analysis Spinner */
                <div className="text-center p-8 sm:p-12">
                  <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-b-4 border-green-500 mx-auto mb-4 sm:mb-6"></div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {t('scan.scanDemo.analyzing')}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {isThai ? 'กรุณารอสักครู่...' : 'Please wait...'}
                  </p>
                </div>
              ) : state.status === "done" ? (
                /* Result Display */
                <div className="space-y-6">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={state.imageUrl}
                      alt="Scanned leaf"
                      className="w-full h-64 object-cover"
                    />
                    <button
                      onClick={scanAgain}
                      className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                  <ResultCard result={state.data} imagePreview={state.imageUrl} />
                  <div className="text-center">
                    <button
                      onClick={scanAgain}
                      className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors duration-200 shadow-lg"
                    >
                      {isThai ? 'สแกนอีกครั้ง' : 'Scan Again'}
                    </button>
                  </div>
                </div>
              ) : (
                /* Scan Area */
                <label
                  className={[
                    "rounded-2xl border-2 border-dashed",
                    "cursor-pointer",
                    dragOver ? "border-green-600 bg-green-50" : "border-gray-300 bg-white",
                    "p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center min-h-[200px] sm:min-h-[240px]",
                    "transition-all duration-200 hover:border-green-400 hover:bg-green-50",
                    "focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2"
                  ].join(" ")}
                  onDragEnter={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragOver={(e) => { e.preventDefault(); }}
                  onDragLeave={(e) => { e.preventDefault(); setDragOver(false); }}
                  onDrop={onDrop}
                >
                  <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">📷</div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {isThai ? 'สแกน' : 'Scan'}
                  </div>
                  <div className="text-base sm:text-lg text-gray-600 mb-2 px-2">
                    {isThai 
                      ? "แตะเพื่อถ่ายภาพ หรือ ลากรูปมาวาง" 
                      : "Tap to use camera or drag & drop"
                    }
                  </div>
                  <div className="text-sm text-gray-500 mb-3 sm:mb-4 px-2">
                    {t('scan.scanDemo.singlePhotoHelper')}
                  </div>
                  <div className="text-xs text-gray-400 px-2">
                    {isThai 
                      ? "ระบบจะตรวจสอบชนิดพืชอัตโนมัติ (ข้าว/ทุเรียน)"
                      : "Automatic crop detection (Rice/Durian)"
                    }
                  </div>
                  <div className="text-xs text-gray-400">
                    JPG/PNG ≤ 5MB
                  </div>

                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    capture="environment"
                    className="hidden"
                    onChange={onInputChange}
                    aria-label={isThai ? "อัปโหลดหรือถ่ายภาพใบพืช" : "Upload or capture crop leaf image"}
                  />
                </label>
              )}

              {state.status === "error" && (
                <div className="text-center mt-4">
                  <p className="text-red-700 bg-red-50 px-4 py-2 rounded-lg">
                    {state.message}
                  </p>
                </div>
              )}
            </div>

            {/* Demo Limit Card - Always show below scan area */}
            <DemoLimitCard />

            {/* Download CTA Section */}
            <div className="mt-12">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">
                  {t('help.downloadCta')}
                </h2>
                <p className="text-lg text-green-100 mb-6">
                  {t('help.note')}
                </p>
                <Link
                  to="/download"
                  className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center space-x-2 hover:bg-green-50 transition-colors duration-200 shadow-lg"
                >
                  <span>{t('help.playStore')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
};

export default Scan;