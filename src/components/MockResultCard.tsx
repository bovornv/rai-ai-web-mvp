import { useTranslation } from 'react-i18next';
import { Download, AlertTriangle, Bug, Leaf } from 'lucide-react';
import { DemoItem } from '../data/scan-demo.mock';

interface MockResultCardProps {
  item: DemoItem;
}

const MockResultCard: React.FC<MockResultCardProps> = ({ item }) => {
  const { t, i18n } = useTranslation();
  const isThai = i18n.language === 'th';

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'disease':
        return <AlertTriangle className="w-6 h-6 text-red-500" />;
      case 'pest':
        return <Bug className="w-6 h-6 text-orange-500" />;
      case 'deficiency':
        return <Leaf className="w-6 h-6 text-yellow-500" />;
      default:
        return <AlertTriangle className="w-6 h-6 text-gray-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'disease':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'pest':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'deficiency':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'disease':
        return t('scan.scanDemo.disease');
      case 'pest':
        return t('scan.scanDemo.pest');
      case 'deficiency':
        return t('scan.scanDemo.deficiency');
      default:
        return type;
    }
  };

  const getCropIcon = (crop: string) => {
    return crop === 'rice' ? '🌾' : '🥭';
  };

  const confidencePercentage = Math.round(item.confidence * 100);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            {getTypeIcon(item.type)}
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {isThai ? item.labelTh : item.labelEn}
              </h3>
              <p className="text-sm text-gray-600">
                {getTypeLabel(item.type)}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-green-600">
              {confidencePercentage}%
            </div>
            <div className="text-sm text-gray-600">
              {t('scan.scanDemo.confidence')}
            </div>
          </div>
        </div>
        
        {/* Crop Detection */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-2xl">{getCropIcon(item.crop)}</span>
          <span className="text-sm text-gray-600">
            {t('scan.scanDemo.cropDetected')} {item.crop === 'rice' ? t('scan.scanDemo.rice') : t('scan.scanDemo.durian')}
          </span>
        </div>
        
        {/* Type Badge */}
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(item.type)}`}>
          {getTypeIcon(item.type)}
          <span className="ml-2">{getTypeLabel(item.type)}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Recommendations */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            {t('scan.scanDemo.recommendations')}
          </h4>
          <ol className="space-y-3">
            {(isThai ? item.stepsTh : item.stepsEn).map((step, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <p className="text-gray-700 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* PPE Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-3">
            <div className="text-yellow-600 mt-1">⚠️</div>
            <div>
              <h5 className="font-semibold text-yellow-800 mb-1">
                {t('scan.scanDemo.ppe')}
              </h5>
              <p className="text-yellow-700 text-sm">
                {isThai ? item.ppeTh : item.ppeEn}
              </p>
            </div>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2">
            <div className="text-blue-600">ℹ️</div>
            <p className="text-blue-800 text-sm font-medium">
              {t('scan.scanDemo.demoOnly')}
            </p>
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white text-center">
          <h4 className="text-xl font-bold mb-2">
            {t('scan.scanDemo.unlimitedInApp')}
          </h4>
          <p className="text-green-100 mb-4">
            {isThai 
              ? 'สแกนไม่จำกัด วิเคราะห์แม่นยำ และคำแนะนำเฉพาะพื้นที่' 
              : 'Unlimited scans, accurate analysis, and location-specific advice'
            }
          </p>
          <a
            href="/apkdownload"
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold text-lg inline-flex items-center space-x-2 hover:bg-green-50 transition-colors duration-200 shadow-lg"
          >
            <Download className="w-5 h-5" />
            <span>{t('scan.scanDemo.unlimitedInApp')}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MockResultCard;
