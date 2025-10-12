import React from 'react';
import { useTranslation } from 'react-i18next';

const PhoneMock = () => {
  const { t, i18n } = useTranslation();
  const isThai = i18n.language === 'th';

  return (
    <div className="relative mx-auto w-64 h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
      {/* Phone Screen */}
      <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
        {/* Status Bar */}
        <div className="bg-green-600 h-8 flex items-center justify-between px-4 text-white text-xs">
          <span>9:41</span>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-2 bg-white rounded-sm"></div>
            <div className="w-6 h-3 border border-white rounded-sm"></div>
          </div>
        </div>

        {/* App Header */}
        <div className="bg-green-600 text-white p-4">
          <h3 className="text-lg font-bold text-center">
            {isThai ? 'ไร่ AI' : 'Rai AI'}
          </h3>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Spray Window Badge */}
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 text-center">
            <div className="text-yellow-800 font-bold text-sm">
              {isThai ? 'วันนี้: ระวัง' : 'Today: Caution'}
            </div>
            <div className="text-yellow-600 text-xs mt-1">
              {isThai ? 'ลมแรง 15 กม./ชม.' : 'Strong wind 15 km/h'}
            </div>
          </div>

          {/* Today's Prices */}
          <div className="space-y-2">
            <h4 className="font-bold text-gray-800 text-sm">
              {isThai ? 'ราคาวันนี้' : "Today's Prices"}
            </h4>
            <div className="bg-gray-50 rounded-lg p-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">
                  {isThai ? 'ข้าวหอมมะลิ' : 'Jasmine Rice'}
                </span>
                <span className="font-bold text-green-600 text-sm">
                  ฿12,500/ตัน
                </span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="text-sm text-gray-700">
                  {isThai ? 'ทุเรียนหมอนทอง' : 'Monthong Durian'}
                </span>
                <span className="font-bold text-green-600 text-sm">
                  ฿85/กก.
                </span>
              </div>
            </div>
          </div>

          {/* Weather Quick View */}
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🌧️</span>
                <div>
                  <div className="text-sm font-medium text-gray-800">
                    {isThai ? 'โอกาสฝน' : 'Rain Chance'}
                  </div>
                  <div className="text-lg font-bold text-blue-600">60%</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">
                  {isThai ? 'อุณหภูมิ' : 'Temp'}
                </div>
                <div className="text-lg font-bold text-gray-800">28°C</div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-2">
            <button className="bg-green-100 text-green-800 rounded-lg p-2 text-xs font-medium">
              {isThai ? 'สแกนโรค' : 'Scan Disease'}
            </button>
            <button className="bg-blue-100 text-blue-800 rounded-lg p-2 text-xs font-medium">
              {isThai ? 'ดูอากาศ' : 'Check Weather'}
            </button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-100 h-12 flex items-center justify-around">
          <div className="w-6 h-6 bg-green-600 rounded"></div>
          <div className="w-6 h-6 bg-gray-300 rounded"></div>
          <div className="w-6 h-6 bg-gray-300 rounded"></div>
          <div className="w-6 h-6 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMock;
