import { useTranslation } from 'react-i18next';
import { Download, QrCode } from 'lucide-react';

interface DownloadCTAProps {
  primary?: boolean;
  showQR?: boolean;
}

const DownloadCTA = ({ primary = false, showQR = true }: DownloadCTAProps) => {
  const { t, i18n } = useTranslation();
  const isThai = i18n.language === 'th';

  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.raiai.app&utm_source=web&utm_medium=homepage&utm_campaign=download';

  return (
    <div className={`${primary ? 'mt-12' : ''}`}>
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          {t('help.downloadCta')}
        </h2>
        <p className="text-lg text-green-100 mb-6">
          {t('help.note')}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Play Store Button */}
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center space-x-2 hover:bg-green-50 transition-colors duration-200 shadow-lg"
          >
            <Download className="w-6 h-6" />
            <span>{t('help.playStore')}</span>
          </a>

          {/* QR Code for Desktop */}
          {showQR && (
            <div className="hidden md:block bg-white rounded-xl p-4">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                  <QrCode className="w-12 h-12 text-gray-600" />
                </div>
                <p className="text-xs text-gray-600">
                  {isThai ? 'สแกนเพื่อดาวน์โหลด' : 'Scan to download'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* APK Download Link (Feature Flag) */}
        <div className="mt-4">
          <a
            href="/apkdownload"
            className="text-green-200 hover:text-white text-sm underline"
          >
            {isThai ? 'ดาวน์โหลดไฟล์ APK (ทดสอบ)' : 'Download APK file (test)'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadCTA;
