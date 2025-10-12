import React from 'react';
import { useTranslation } from 'react-i18next';
import { Camera, Bell, MapPin, Download } from 'lucide-react';

const WhyDownload = () => {
  const { t, i18n } = useTranslation();
  const isThai = i18n.language === 'th';

  const features = [
    {
      icon: Camera,
      title: isThai ? 'สแกนโรคพืช' : 'Scan Plant Diseases',
      description: isThai ? 'ใช้กล้องมือถือสแกนใบพืช รู้โรคทันที' : 'Use phone camera to scan leaves, know diseases instantly',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Bell,
      title: isThai ? 'เตือนฝน/ลม' : 'Rain/Wind Alerts',
      description: isThai ? 'แจ้งเตือนอัตโนมัติเมื่อสภาพอากาศเปลี่ยน' : 'Automatic alerts when weather changes',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: MapPin,
      title: isThai ? 'จัดการแปลง' : 'Field Management',
      description: isThai ? 'แผนที่+ขนาดไร่ รู้ทุกแปลงของคุณ' : 'Maps+field size, know all your fields',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="card p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-display-2 text-ink mb-4">
          {t('home.why_download')}
        </h2>
        <p className="text-lg text-ink-soft max-w-2xl mx-auto">
          {isThai 
            ? 'แอป RaiAI ให้คุณใช้งานเต็มรูปแบบ พร้อมฟีเจอร์ที่เว็บไม่มี'
            : 'RaiAI app gives you full features with capabilities not available on web'
          }
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="icon-circle mx-auto mb-4">
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-ink mb-3">
              {feature.title}
            </h3>
            <p className="text-ink-soft leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <a
          href="/apkdownload"
          className="btn-primary"
        >
          <Download className="w-6 h-6 mr-2" />
          <span>{t('home.download')}</span>
        </a>
        <p className="text-sm text-ink-soft mt-3">
          {t('home.privacy_note')}
        </p>
      </div>
    </div>
  );
};

export default WhyDownload;
