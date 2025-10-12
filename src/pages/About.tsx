import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title="เกี่ยวกับเรา | พันธกิจ Rai AI | ไร่ AI"
        description="พันธกิจของ Rai AI เพื่อให้เทคโนโลยีช่วยเกษตรกรไทยได้จริงในชีวิตประจำวัน"
        keywords="เกี่ยวกับ Rai AI, พันธกิจ, เกษตรกรไทย, เทคโนโลยีเกษตร"
        url="https://raiai.app/about"
      />
      <div className="min-h-screen bg-gradient-to-br from-rai-green-50 to-rai-teal-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.teaser')}
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="flex items-start space-x-6">
              {/* Leaf Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-rai-green-500 to-rai-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🌿</span>
                </div>
              </div>
              
              {/* Mission Content */}
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                      {t('about.mission.title')}
                    </h2>
                    
                    {/* Mission Text - Language Specific */}
                    <div>
                      <p className="text-xl text-gray-800 leading-relaxed mb-4">
                        {t('about.mission.intro')}
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed mb-3">
                        {t('about.mission.goal')}
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed mb-3">
                        {t('about.mission.personal')}
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed mb-3">
                        {t('about.mission.help')}
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {t('about.mission.result')}
                      </p>
                    </div>
                  </div>
            </div>
          </div>
        </div>

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
              to="/apkdownload"
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center space-x-2 hover:bg-green-50 transition-colors duration-200 shadow-lg"
            >
              <span>{t('help.playStore')}</span>
            </Link>
          </div>
        </div>
        </div>
      </div>
      </>
    );
  };

export default About;
