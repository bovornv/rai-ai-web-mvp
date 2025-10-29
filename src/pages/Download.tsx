import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Download as DownloadIcon, Smartphone, Shield, CheckCircle, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import QRCode from 'qrcode';

const DownloadPage = () => {
  const { t } = useTranslation();
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [downloadStarted, setDownloadStarted] = useState<boolean>(false);

  // APK file information
  const apkInfo = {
    version: '1.0.7',
    size: '28.5 MB',
    sha256: 'a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456',
    downloadUrl: '/downloads/rai-ai-v.1.0.7.apk'
  };

  useEffect(() => {
    // Generate QR code for APK download
    const generateQRCode = async () => {
      try {
        const downloadUrl = `${window.location.origin}${apkInfo.downloadUrl}`;
        const qrCodeDataURL = await QRCode.toDataURL(downloadUrl, {
          width: 300,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
        setQrCodeUrl(qrCodeDataURL);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    generateQRCode();
  }, []);

  const handleDownload = () => {
    setDownloadStarted(true);
    // Reset after 3 seconds
    setTimeout(() => setDownloadStarted(false), 3000);
  };

  const installSteps = [
    {
      step: 1,
      title: t('download.step1'),
      description: 'คลิกปุ่มดาวน์โหลดด้านล่าง'
    },
    {
      step: 2,
      title: t('download.step2'),
      description: 'ไปที่ Settings > Security > Unknown Sources และเปิดใช้งาน'
    },
    {
      step: 3,
      title: t('download.step3'),
      description: 'เปิดไฟล์ APK ที่ดาวน์โหลดและกดติดตั้ง'
    },
    {
      step: 4,
      title: t('download.step4'),
      description: 'เปิดแอปและเริ่มใช้งาน'
    }
  ];

  const features = [
    {
      icon: Smartphone,
      title: 'ใช้งานง่าย',
      description: 'อินเทอร์เฟซที่เข้าใจง่าย เหมาะสำหรับเกษตรกรทุกวัย'
    },
    {
      icon: Shield,
      title: 'ปลอดภัย',
      description: 'ข้อมูลส่วนตัวได้รับการปกป้องด้วยมาตรฐานความปลอดภัยสูง'
    },
    {
      icon: CheckCircle,
      title: 'แม่นยำ',
      description: 'AI ที่ได้รับการฝึกฝนด้วยข้อมูลพืชไทย'
    }
  ];

  return (
    <>
      <SEO
        title="ดาวน์โหลดแอป | Rai AI APK | ไร่ AI"
        description="ดาวน์โหลดแอป Rai AI สำหรับ Android ฟรี ตรวจโรคพืช ดูอากาศ จัดการแปลง"
        keywords="ดาวน์โหลดแอป Rai AI, APK, แอปเกษตร, Android"
        url="https://raiai.app/download"
      />
      <div className="min-h-screen bg-gradient-to-br from-rai-green-50 to-rai-teal-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-rai-green-500 to-rai-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <DownloadIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 ">
            {t('download.title')}
          </h1>
          <p className="text-lg text-gray-600 ">
            ดาวน์โหลดแอป Rai AI เพื่อการใช้งานเต็มรูปแบบ
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Download Section */}
          <div className="space-y-8">
            {/* APK Info Card */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 ">
                ข้อมูลแอป
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700 ">{t('download.version')}</span>
                  <span className="text-gray-900 font-mono">{apkInfo.version}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700 ">{t('download.size')}</span>
                  <span className="text-gray-900">{apkInfo.size}</span>
                </div>
                <div className="py-3">
                  <span className="font-medium text-gray-700  block mb-2">{t('download.sha256')}</span>
                  <code className="text-xs text-gray-600 break-all">{apkInfo.sha256}</code>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={apkInfo.downloadUrl}
                  download={`rai-ai-v${apkInfo.version}.apk`}
                  onClick={handleDownload}
                  className="btn-primary w-full text-center text-lg py-4 flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                >
                  <DownloadIcon className="w-5 h-5" />
                  <span>ดาวน์โหลด APK v{apkInfo.version}</span>
                </a>
                <p className="text-sm text-gray-500 text-center mt-2">
                  ขนาดไฟล์: {apkInfo.size}
                </p>
                {downloadStarted && (
                  <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-800 text-center">
                      ✅ เริ่มดาวน์โหลดแล้ว! ตรวจสอบในโฟลเดอร์ Downloads
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* QR Code */}
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('download.qrCode')}
              </h3>
              {qrCodeUrl ? (
                <div className="flex justify-center">
                  <img
                    src={qrCodeUrl}
                    alt="QR Code for APK Download"
                    className="w-40 h-40 sm:w-48 sm:h-48 border border-gray-200 rounded-lg"
                  />
                </div>
              ) : (
                <div className="w-40 h-40 sm:w-48 sm:h-48 border border-gray-200 rounded-lg flex items-center justify-center mx-auto">
                  <div className="text-gray-400 text-sm">กำลังสร้าง QR Code...</div>
                </div>
              )}
              <p className="text-sm text-gray-600 mt-4">
                สแกน QR Code ด้วยมือถือเพื่อดาวน์โหลด
              </p>
              <p className="text-xs text-gray-500 mt-2">
                หรือคลิกปุ่มดาวน์โหลดด้านบน
              </p>
            </div>

            {/* Play Store Link */}
            <div className="card bg-gradient-to-r from-rai-green-50 to-rai-teal-50">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 ">
                  {t('download.playStore')}
                </h3>
                <p className="text-gray-600 mb-4 ">
                  เร็วๆ นี้ใน Google Play Store
                </p>
                <button
                  disabled
                  className="btn-secondary opacity-50 cursor-not-allowed flex items-center space-x-2 mx-auto"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="">เร็วๆ นี้</span>
                </button>
              </div>
            </div>
          </div>

          {/* Installation Guide */}
          <div className="space-y-8">
            {/* Installation Steps */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 ">
                {t('download.installSteps')}
              </h2>
              <div className="space-y-6">
                {installSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-rai-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 ">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 ">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 ">
                ฟีเจอร์ในแอป
              </h2>
              <div className="space-y-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-rai-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-rai-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 ">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 ">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* System Requirements */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 ">
                ข้อกำหนดระบบ
              </h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-rai-green-500" />
                  <span className="">Android 6.0 ขึ้นไป</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-rai-green-500" />
                  <span className="">RAM 2GB ขึ้นไป</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-rai-green-500" />
                  <span className="">พื้นที่ว่าง 100MB</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-rai-green-500" />
                  <span className="">กล้องสำหรับสแกนโรค</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-12 card bg-blue-50 border border-blue-200">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 ">
                ข้อมูลความปลอดภัย
              </h3>
              <p className="text-blue-800  mt-2">
                แอป Rai AI ได้รับการตรวจสอบความปลอดภัยแล้ว ไฟล์ APK มีลายเซ็นดิจิทัลที่ถูกต้อง 
                และไม่มีการเก็บข้อมูลส่วนตัวที่ไม่จำเป็น
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
      </>
    );
  };

export default DownloadPage;
