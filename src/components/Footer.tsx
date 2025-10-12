import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-rai-green-500 to-rai-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ไร่</span>
              </div>
              <span className="text-xl font-bold ">Rai AI</span>
            </div>
            <p className="text-white/80">
              {t('about.teaser')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              <li>
                <a href="/weather" className="text-white/80 hover:text-white transition-colors">
                  {t('nav.weather')}
                </a>
              </li>
              <li>
                <a href="/scan" className="text-white/80 hover:text-white transition-colors">
                  {t('nav.scan')}
                </a>
              </li>
              <li>
                <a href="/fields" className="text-white/80 hover:text-white transition-colors">
                  {t('nav.fields')}
                </a>
              </li>
              <li>
                <a href="/help" className="text-white/80 hover:text-white transition-colors">
                  {t('nav.help')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ผู้ช่วยเกษตรกรไทย</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/60" />
                <a 
                  href="mailto:support@raiai.app" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  support@raiai.app
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm">
              © 2025 Rai AI. สงวนลิขสิทธิ์
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-white/80 text-sm">
                นโยบายความเป็นส่วนตัว | เงื่อนไขการใช้งาน
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
