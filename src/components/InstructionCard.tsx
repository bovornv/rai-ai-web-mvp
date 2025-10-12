import { useTranslation } from 'react-i18next';

const InstructionCard = () => {
  const { t, i18n } = useTranslation();
  const isThai = i18n.language === 'th';

  return (
    <div className="rounded-2xl bg-white shadow-lg p-6 mb-6">
      <div className="flex items-center space-x-3 mb-4">
        <span className="text-3xl">📷</span>
        <h3 className="text-2xl font-bold text-gray-900">
          {t('scan.scanDemo.instructions.title')}
        </h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <span className="text-2xl">☀️</span>
          <div>
            <p className="text-lg text-gray-800 font-medium">
              {t('scan.scanDemo.instructions.step1')}
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <span className="text-2xl">🌿</span>
          <div>
            <p className="text-lg text-gray-800 font-medium">
              {t('scan.scanDemo.instructions.step2')}
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <span className="text-2xl">📏</span>
          <div>
            <p className="text-lg text-gray-800 font-medium">
              {t('scan.scanDemo.instructions.step3')}
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
        <div className="flex items-center space-x-2">
          <span className="text-lg">🤖</span>
          <p className="text-sm text-green-800 font-medium">
            {isThai 
              ? "ระบบจะตรวจสอบชนิดพืชอัตโนมัติ (ข้าว/ทุเรียน)"
              : "Automatic crop detection (Rice/Durian)"
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstructionCard;
