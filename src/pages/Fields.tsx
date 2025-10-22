import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FarmSummary from '../components/fields/FarmSummary';
import FieldMap from '../components/fields/FieldMap';
import FieldCard from '../components/fields/FieldCard';
import { FIELDS_DEMO, ADVICE_DEMO, SUMMARY_DEMO } from '../data/fields-demo.mock';

const Fields = () => {
  const { t } = useTranslation();
  const [selectedFieldId, setSelectedFieldId] = useState<string | null>(null);

  const handleFieldSelect = (fieldId: string) => {
    setSelectedFieldId(selectedFieldId === fieldId ? null : fieldId);
  };

  return (
    <>
      <SEO
        title="แปลงเกษตร | จัดการแปลง ดูแผนที่ | Rai AI"
        description="จัดการแปลงเกษตรของคุณ ดูแผนที่แปลง ข้อมูลการปลูก และการเติบโต"
        keywords="แปลงเกษตร, จัดการแปลง, แผนที่แปลง, ข้อมูลการปลูก"
        url="https://raiai.app/fields"
      />
      <div className="min-h-screen bg-gradient-to-br from-rai-green-50 to-rai-teal-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('fields.title')}
            </h1>
            <p className="text-lg text-gray-600">
              {t('fields.subtitle')}
            </p>
          </div>

          {/* Farm Health Summary */}
          <FarmSummary data={SUMMARY_DEMO} />

          {/* Interactive Field Map */}
          <FieldMap
            fields={FIELDS_DEMO}
            selectedId={selectedFieldId}
            onSelect={handleFieldSelect}
          />

          {/* Field Cards */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t('fields.fieldDetails')}
            </h2>
            {FIELDS_DEMO.map((field, index) => {
              const advice = ADVICE_DEMO.find(a => a.fieldId === field.id);
              return (
                <div
                  key={field.id}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <FieldCard
                    field={field}
                    adviceTh={advice?.messageTh}
                    adviceEn={advice?.messageEn}
                    highlight={selectedFieldId === field.id}
                    onClick={() => handleFieldSelect(field.id)}
                  />
                </div>
              );
            })}
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
                to="/download"
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

export default Fields;