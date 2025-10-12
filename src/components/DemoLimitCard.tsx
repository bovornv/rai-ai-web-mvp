import React from 'react';
import { useTranslation } from 'react-i18next';
import { Download } from 'lucide-react';

const DemoLimitCard = () => {
  const { t, i18n } = useTranslation();
  const isThai = i18n.language === 'th';

  return (
    <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6 mb-6">
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <p className="text-lg text-amber-800 font-medium">
              {t('scan.scanDemo.demoLimits.webDemo')}
            </p>
            <p className="text-base text-amber-700 mt-1">
              {t('scan.scanDemo.demoLimits.fullApp')}
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <a
            href="/apkdownload"
            className="inline-flex items-center space-x-3 rounded-xl bg-green-600 px-8 py-4 text-white font-bold text-lg hover:bg-green-700 transition-colors duration-200 shadow-lg"
          >
            <Download className="w-6 h-6" />
            <span>{t('scan.scanDemo.demoLimits.downloadApp')}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DemoLimitCard;
