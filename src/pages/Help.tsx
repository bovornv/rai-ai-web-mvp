import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HelpCircle, Mail, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';

const Help = () => {
  const { t } = useTranslation();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: t('help.q1'),
      answer: t('help.a1')
    },
    {
      question: t('help.q2'),
      answer: t('help.a2')
    },
    {
      question: t('help.q3'),
      answer: t('help.a3')
    },
    {
      question: t('help.q4'),
      answer: t('help.a4')
    },
    {
      question: t('help.q5'),
      answer: t('help.a5')
    },
    {
      question: t('help.q6'),
      answer: t('help.a6')
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: t('help.email'),
      description: t('help.emailDesc'),
      action: 'mailto:support@raiai.app',
      color: 'text-blue-500'
    },
    {
      icon: MessageCircle,
      title: t('help.chat'),
      description: t('help.chatDesc'),
      action: '#',
      color: 'text-purple-500'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <SEO
        title="ช่วยเหลือ | คำถามที่พบบ่อย | Rai AI"
        description="คำถามที่พบบ่อย การใช้งาน Rai AI และช่องทางติดต่อ"
        keywords="ช่วยเหลือ, คำถามที่พบบ่อย, การใช้งาน Rai AI, ติดต่อ"
        url="https://raiai.app/help"
      />
      <div className="min-h-screen bg-gradient-to-br from-rai-green-50 to-rai-teal-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-rai-green-500 to-rai-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 ">
            {t('help.title')}
          </h1>
          <p className="text-lg text-gray-600 ">
            เราพร้อมช่วยเหลือคุณทุกคำถาม
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 ">
              {t('help.faq')}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-xl font-bold text-gray-900">
                      {faq.question}
                    </span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-green-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-500" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 ">
              {t('help.contact')}
            </h2>
            <p className="text-gray-600 ">
              {t('help.contactSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.action}
                  className="card hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 ${method.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-12 h-12" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 ">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 ">
                      {method.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>


        {/* Support Hours */}
        <div className="card">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 ">
              {t('help.supportHours')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 ">
                  {t('help.appAvailable')}
                </h3>
                <p className="text-gray-600 ">
                  {t('help.appAvailableDesc')}
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 ">
                  {t('help.supportAvailable')}
                </h3>
                <p className="text-gray-600 ">
                  {t('help.supportAvailableDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            {t('help.downloadCta')}
          </h2>
          <p className="text-lg text-green-100 mb-6">
            {t('help.note')}
          </p>
          <a
            href="/apkdownload"
            className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center space-x-2 hover:bg-green-50 transition-colors duration-200 shadow-lg"
          >
            <span>{t('help.playStore')}</span>
          </a>
        </div>
        </div>
      </div>
      </>
    );
  };

export default Help;
