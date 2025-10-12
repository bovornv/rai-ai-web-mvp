import React from 'react';
import { useTranslation } from 'react-i18next';
import { Download, Smartphone, MapPin, Camera, BarChart3, Play } from 'lucide-react';

const DownloadCTA: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isThai = i18n.language === 'th';

  const features = [
    {
      icon: MapPin,
      textTh: 'แผนที่ GPS แม่นยำ',
      textEn: 'Accurate GPS Maps'
    },
    {
      icon: Camera,
      textTh: 'สแกนโรคพืช AI',
      textEn: 'AI Plant Disease Scan'
    },
    {
      icon: BarChart3,
      textTh: 'บันทึกผลผลิต',
      textEn: 'Yield Tracking'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white mb-8">
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Phone Illustration */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="w-32 h-48 bg-white/20 backdrop-blur-sm rounded-3xl border-4 border-white/30 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-b from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div className="text-xs font-bold text-white">Rai AI</div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-xs">📱</span>
            </div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-xs">🌾</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">
            {isThai ? 'จัดการแปลงแบบเต็มรูปแบบในแอป RaiAI' : 'Full Field Management in RaiAI App'}
          </h2>
          <p className="text-lg text-green-100 mb-6">
            {isThai 
              ? 'ดูแผนที่ GPS, เพิ่มแปลง, สแกนโรค และบันทึกผลผลิต' 
              : 'GPS maps, add fields, disease scanning, and yield tracking'
            }
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center space-x-2">
                  <Icon className="w-5 h-5 text-green-200" />
                  <span className="text-sm text-green-100">
                    {isThai ? feature.textTh : feature.textEn}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/downloads/rai-ai-v1.0.0.apk"
              download
              className="bg-white text-green-600 px-6 py-3 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 hover:bg-green-50 transition-colors duration-200 shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span>{isThai ? 'ดาวน์โหลด APK' : 'Download APK'}</span>
            </a>
            <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 hover:bg-white/30 transition-colors duration-200 border border-white/30">
              <Play className="w-5 h-5" />
              <span>{isThai ? 'ติดตั้งจาก Google Play' : 'Install from Google Play'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Demo Notice */}
      <div className="mt-6 pt-6 border-t border-white/20">
        <p className="text-sm text-green-200 text-center">
          {isThai 
            ? 'นี่เป็นข้อมูลตัวอย่างสำหรับสาธิต — จัดการแปลงจริงในแอปมือถือ' 
            : 'This is demo data for demonstration — manage real fields in the mobile app'
          }
        </p>
      </div>
    </div>
  );
};

export default DownloadCTA;
