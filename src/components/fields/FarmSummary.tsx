import React from 'react';
import { useTranslation } from 'react-i18next';
import { Cloud, Leaf, TrendingUp, Droplets } from 'lucide-react';

interface FarmSummaryProps {
  data: {
    weatherTodayTh: string;
    weatherTodayEn: string;
    lastDiseaseTh: string;
    lastDiseaseEn: string;
    sprayAdviceTh: string;
    sprayAdviceEn: string;
    yieldTrendTh: string;
    yieldTrendEn: string;
  };
}

const FarmSummary: React.FC<FarmSummaryProps> = ({ data }) => {
  const { i18n } = useTranslation();
  const isThai = i18n.language === 'th';

  const summaryItems = [
    {
      icon: Cloud,
      title: isThai ? 'สภาพอากาศวันนี้' : 'Today\'s Weather',
      content: isThai ? data.weatherTodayTh : data.weatherTodayEn,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      icon: Leaf,
      title: isThai ? 'โรคที่พบล่าสุด' : 'Recent Disease',
      content: isThai ? data.lastDiseaseTh : data.lastDiseaseEn,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      iconColor: 'text-red-600'
    },
    {
      icon: TrendingUp,
      title: isThai ? 'แนวโน้มผลผลิต' : 'Yield Trend',
      content: isThai ? data.yieldTrendTh : data.yieldTrendEn,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconColor: 'text-green-600'
    },
    {
      icon: Droplets,
      title: isThai ? 'คำแนะนำ' : 'Recommendation',
      content: isThai ? data.sprayAdviceTh : data.sprayAdviceEn,
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      iconColor: 'text-yellow-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {summaryItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className={`${item.bgColor} ${item.borderColor} border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200`}
          >
            <div className="flex items-center space-x-3 mb-2">
              <Icon className={`w-5 h-5 ${item.iconColor}`} />
              <h3 className="text-sm font-medium text-gray-700">
                {item.title}
              </h3>
            </div>
            <div className="text-lg font-semibold text-gray-900">
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FarmSummary;
