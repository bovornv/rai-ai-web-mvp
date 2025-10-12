import React from 'react';
import { useTranslation } from 'react-i18next';
import { Wheat, TreePine, Calendar, MapPin, Ruler } from 'lucide-react';
import { FieldDemo } from '../../data/fields-demo.mock';

interface FieldCardProps {
  field: FieldDemo;
  adviceTh?: string;
  adviceEn?: string;
  highlight?: boolean;
  onClick?: () => void;
}

const FieldCard: React.FC<FieldCardProps> = ({ 
  field, 
  adviceTh, 
  adviceEn, 
  highlight, 
  onClick 
}) => {
  const { i18n } = useTranslation();
  const isThai = i18n.language === 'th';

  const getCropIcon = (crop: string) => {
    return crop === 'rice' ? <Wheat className="w-5 h-5" /> : <TreePine className="w-5 h-5" />;
  };

  const getCropColor = (crop: string) => {
    if (crop === 'rice') {
      return {
        text: 'text-green-800',
        bg: 'bg-green-50',
        border: 'border-green-200',
        badge: 'bg-green-100 border-green-300 text-green-800',
        progress: 'bg-green-500'
      };
    } else {
      return {
        text: 'text-yellow-800',
        bg: 'bg-yellow-50',
        border: 'border-yellow-200',
        badge: 'bg-yellow-100 border-yellow-300 text-yellow-800',
        progress: 'bg-yellow-500'
      };
    }
  };

  const getStageColor = (stage: string) => {
    if (stage.includes('ปลูก')) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (stage.includes('เจริญ')) return 'bg-green-100 text-green-800 border-green-200';
    if (stage.includes('เก็บ')) return 'bg-orange-100 text-orange-800 border-orange-200';
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const colors = getCropColor(field.crop);
  const plantedDate = new Date(field.plantedAt).toLocaleDateString(
    isThai ? 'th-TH' : 'en-US', 
    { day: 'numeric', month: 'short', year: 'numeric' }
  );

  const advice = isThai ? adviceTh : adviceEn;

  return (
    <div
      className={`
        ${colors.bg} ${colors.border}
        ${highlight ? 'ring-2 ring-green-500 scale-[1.02] shadow-lg' : 'hover:scale-[1.01] shadow-sm hover:shadow-md'}
        border-2 rounded-2xl p-6 transition-all duration-200 cursor-pointer
        animate-fadeIn
      `}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className={`flex items-center space-x-3 ${colors.text}`}>
          {getCropIcon(field.crop)}
          <h3 className="text-xl font-bold">
            {isThai ? field.nameTh : field.nameEn}
          </h3>
        </div>
        <span className={`
          ${getStageColor(field.stage)}
          text-xs font-medium border px-3 py-1 rounded-full
        `}>
          {isThai ? field.stage : field.stage}
        </span>
      </div>

      {/* Field Details */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-sm">
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span className="text-gray-700">
            {field.subdistrict}, {field.district}, {field.province}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Ruler className="w-4 h-4 text-gray-500" />
          <span className="text-gray-700">
            <span className="font-bold">{field.areaRai}</span> {isThai ? 'ไร่' : 'rai'}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span className="text-gray-700">
            {isThai ? 'ปลูกเมื่อ' : 'Planted'}: {plantedDate}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            {isThai ? 'ความก้าวหน้า' : 'Progress'}
          </span>
          <span className="text-sm font-bold text-gray-900">
            {field.progressPct}%
          </span>
        </div>
        <div className="h-3 bg-white/60 rounded-full overflow-hidden">
          <div 
            className={`h-full ${colors.progress} rounded-full transition-all duration-500 ease-out`}
            style={{ width: `${field.progressPct}%` }}
          />
        </div>
        <div className="text-xs text-gray-600 mt-1">
          {isThai ? 'ปลูกแล้ว' : 'Planted'} {Math.floor(field.progressPct * 1.2)} {isThai ? 'วัน' : 'days'} 
          {isThai ? ' จาก 120 วัน' : ' out of 120 days'}
        </div>
      </div>

      {/* Next Action / Advice */}
      {advice && (
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/50">
          <div className="flex items-start space-x-2">
            <div className="text-lg">💡</div>
            <div className="text-sm font-medium text-gray-800">
              {isThai ? 'คำแนะนำ' : 'Recommendation'}
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-1 ml-6">
            {advice}
          </p>
        </div>
      )}
    </div>
  );
};

export default FieldCard;
