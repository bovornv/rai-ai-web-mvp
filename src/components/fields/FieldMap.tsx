import { useTranslation } from 'react-i18next';
import { MapPin, Wheat, TreePine } from 'lucide-react';
import { FieldDemo } from '../../data/fields-demo.mock';

interface FieldMapProps {
  fields: FieldDemo[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const FieldMap: React.FC<FieldMapProps> = ({ fields, selectedId, onSelect }) => {
  const { i18n } = useTranslation();
  const isThai = i18n.language === 'th';

  const getCropIcon = (crop: string) => {
    return crop === 'rice' ? <Wheat className="w-4 h-4" /> : <TreePine className="w-4 h-4" />;
  };

  const getCropColor = (crop: string) => {
    return crop === 'rice' 
      ? 'bg-green-100 border-green-300 hover:bg-green-200' 
      : 'bg-yellow-100 border-yellow-300 hover:bg-yellow-200';
  };

  const getSelectedStyle = (fieldId: string) => {
    return selectedId === fieldId 
      ? 'ring-2 ring-offset-2 ring-green-500 scale-105 shadow-lg' 
      : 'hover:scale-102 shadow-sm hover:shadow-md';
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl border border-green-200 p-6 mb-8 min-h-[320px] relative overflow-hidden">
      {/* Map Legend */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 px-4 py-3 shadow-sm z-10">
        <div className="flex items-center space-x-2 text-sm">
          <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
          <span className="font-medium">{isThai ? 'แปลงข้าว' : 'Rice Fields'}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm mt-1">
          <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
          <span className="font-medium">{isThai ? 'แปลงทุเรียน' : 'Durian Fields'}</span>
        </div>
      </div>

      {/* Map Title */}
      <div className="flex items-center space-x-2 mb-6">
        <MapPin className="w-5 h-5 text-green-600" />
        <h2 className="text-xl font-bold text-gray-900">
          {isThai ? 'แผนที่แปลงเกษตร' : 'Farm Fields Map'}
        </h2>
      </div>

      {/* Interactive Field Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        {fields.map((field, index) => (
          <button
            key={field.id}
            onClick={() => onSelect(field.id)}
            className={`
              ${getCropColor(field.crop)}
              ${getSelectedStyle(field.id)}
              border-2 rounded-xl p-4 text-left transition-all duration-200 cursor-pointer
              animate-fadeIn
            `}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center space-x-2 mb-2">
              {getCropIcon(field.crop)}
              <h3 className="font-bold text-gray-900">
                {isThai ? field.nameTh : field.nameEn}
              </h3>
            </div>
            
            <div className="text-sm text-gray-700 space-y-1">
              <div className="flex items-center space-x-2">
                <span className="font-medium">{field.areaRai} {isThai ? 'ไร่' : 'rai'}</span>
                <span>•</span>
                <span>{isThai ? field.stage : field.stage}</span>
              </div>
              <div className="text-xs text-gray-600">
                {field.subdistrict}, {field.district}, {field.province}
              </div>
            </div>

            {/* Progress indicator */}
            <div className="mt-3">
              <div className="h-1.5 bg-white/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 rounded-full transition-all duration-300"
                  style={{ width: `${field.progressPct}%` }}
                />
              </div>
              <div className="text-xs text-gray-600 mt-1">
                {isThai ? 'ความก้าวหน้า' : 'Progress'}: {field.progressPct}%
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Map Instructions */}
      <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-gray-600">
        {isThai ? 'คลิกที่แปลงเพื่อดูรายละเอียด' : 'Click on fields to view details'}
      </div>
    </div>
  );
};

export default FieldMap;
