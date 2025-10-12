import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Cloud, Camera, Map, Download, Play } from 'lucide-react';
import SEO from '../components/SEO';
import PhoneMock from '../components/PhoneMock';
import TodayAtFarm from '../components/TodayAtFarm';
import WhyDownload from '../components/WhyDownload';
import Testimonials from '../components/Testimonials';
import PartnerLogos from '../components/PartnerLogos';

const Home = () => {
  const { t, i18n } = useTranslation();
  const isThai = i18n.language === 'th';

  const features = [
    {
      key: 'weather',
      icon: Cloud,
      path: '/weather',
      title: isThai ? 'ตรวจอากาศ' : 'Weather Check',
      description: isThai ? 'พยากรณ์อากาศ 3-5 วันล่วงหน้า' : '3-5 day weather forecast'
    },
    {
      key: 'scan',
      icon: Camera,
      path: '/scan',
      title: isThai ? 'สแกนโรค' : 'Disease Scan',
      description: isThai ? 'ตรวจโรคพืชจากรูปภาพ' : 'Plant disease detection from photos'
    },
    {
      key: 'fields',
      icon: Map,
      path: '/fields',
      title: isThai ? 'จัดการแปลง' : 'Field Management',
      description: isThai ? 'ดูแผนที่แปลงเกษตรของคุณ' : 'View and manage your farm fields'
    }
  ];

  return (
    <>
      <SEO
        title="ไร่ AI – ตรวจโรคพืช ดูอากาศ จัดการแปลง (เว็บตัวอย่าง)"
        description="เว็บตัวอย่างสำหรับเกษตรกรไทย—ดูพยากรณ์อากาศ สแกนตัวอย่างโรคพืช และแผนที่แปลง แล้วดาวน์โหลดแอปเพื่อใช้งานเต็มรูปแบบ"
        keywords="เกษตรอัจฉริยะ, AI เกษตร, ตรวจโรคพืช, พยากรณ์อากาศเกษตร, แอปเกษตร, Smart Farming Thailand, เกษตรกรไทย"
        url="https://raiai.app/"
      />
      
      <div className="min-h-screen bg-bg">
        {/* Hero Section */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hero grid lg:grid-cols-2 gap-6 items-center">
              {/* Left Column - Text */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-display-1 mb-4 lg:mb-6">
                  {t('home.hero_title')}
                </h1>
                <p className="text-lg sm:text-xl text-white/90 mb-6 lg:mb-8 leading-relaxed">
                  {t('home.hero_sub')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 lg:mb-8">
                  <Link
                    to="/apkdownload"
                    className="btn-primary w-full sm:w-auto"
                  >
                    <Download className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                    <span>{t('home.download')}</span>
                  </Link>
                  <Link
                    to="/weather"
                    className="btn-secondary bg-white/10 border-white/20 text-white hover:bg-white/20 w-full sm:w-auto"
                  >
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                    <span>{t('home.try_demo')}</span>
                  </Link>
                </div>

                <p className="text-sm text-white/70 px-2">
                  {t('home.privacy_note')}
                </p>
              </div>

              {/* Right Column - Phone Mockup */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0">
                <div className="card p-3 sm:p-4 md:p-6 max-w-xs sm:max-w-sm">
                  <PhoneMock />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Today at Your Farm Widget */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TodayAtFarm />
          </div>
        </section>

        {/* Why Download Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WhyDownload />
          </div>
        </section>

        {/* Demo Tiles Section */}
        <section className="section bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-display-2 text-ink mb-4">
                {t('home.demo_web')}
              </h2>
              <p className="text-lg text-ink-soft max-w-2xl mx-auto">
                {isThai 
                  ? 'ลองดูตัวอย่างการทำงานของ RaiAI บนเว็บก่อนดาวน์โหลดแอป'
                  : 'Try RaiAI demos on web before downloading the app'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Link
                    key={feature.key}
                    to={feature.path}
                    className="group"
                  >
                    <div className="card p-4 sm:p-6 text-center group-hover:scale-105 transition-all duration-300">
                      <div className="icon-circle mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="badge mb-3 sm:mb-4 text-xs sm:text-sm">
                        {isThai ? 'ตัวอย่าง' : 'Demo'}
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-ink mb-3 sm:mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-ink-soft mb-4">
                        {feature.description}
                      </p>
                      <div className="text-pri-600 text-xs sm:text-sm font-medium group-hover:text-pri-700">
                        {t('home.full_in_app')} →
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Testimonials />
            <PartnerLogos />
          </div>
        </section>

        {/* Download CTA Section */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-cta-grad rounded-2xl p-4 sm:p-6 lg:p-8 text-white text-center">
              <h2 className="text-display-2 mb-3 sm:mb-4">
                {t('help.downloadCta')}
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-4 sm:mb-6 px-2">
                {t('help.note')}
              </p>
              <Link
                to="/apkdownload"
                className="bg-white text-pri-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl2 font-bold text-base sm:text-lg inline-flex items-center space-x-2 hover:bg-white/90 transition-colors duration-200 shadow-lg w-full sm:w-auto"
              >
                <span>{t('help.playStore')}</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;