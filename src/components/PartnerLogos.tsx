import { useTranslation } from 'react-i18next';

const PartnerLogos = () => {
  const { i18n } = useTranslation();
  const isThai = i18n.language === 'th';

  const partners = [
    { name: 'สหกรณ์การเกษตร', placeholder: 'Agricultural Cooperative' },
    { name: 'ร้านเกษตร', placeholder: 'Farm Store' },
    { name: 'ศูนย์วิจัย', placeholder: 'Research Center' },
    { name: 'กลุ่มเกษตรกร', placeholder: 'Farmer Group' }
  ];

  return (
    <div className="card p-8 mb-8">
      <h3 className="text-xl font-bold text-ink text-center mb-6">
        {isThai ? 'ใช้งานร่วมกับ' : 'Works with'}
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <div key={index} className="text-center">
            <div className="bg-white rounded-xl2 p-4 shadow-soft border border-surface-border h-20 flex items-center justify-center">
              <div className="text-ink-soft text-sm font-medium">
                {isThai ? partner.name : partner.placeholder}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;
