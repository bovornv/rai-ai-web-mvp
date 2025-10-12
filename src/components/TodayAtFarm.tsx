import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, CloudRain, Wind, Thermometer } from 'lucide-react';

interface WeatherData {
  rainChance: number;
  windSpeed: number;
  temperature: number;
  sprayStatus: 'good' | 'caution' | 'dont';
  sprayReason: string;
}

const TodayAtFarm = () => {
  const { t, i18n } = useTranslation();
  const isThai = i18n.language === 'th';
  const [location, setLocation] = useState(isThai ? 'กรุงเทพมหานคร' : 'Bangkok');
  const [weather, setWeather] = useState<WeatherData>({
    rainChance: 20,
    windSpeed: 8,
    temperature: 28,
    sprayStatus: 'good',
    sprayReason: isThai ? 'สภาพอากาศเหมาะสม' : 'Good weather conditions'
  });

  // Mock weather data - in real app, this would come from API
  useEffect(() => {
    // Simulate different weather conditions
    const mockWeather = {
      rainChance: Math.floor(Math.random() * 80) + 10,
      windSpeed: Math.floor(Math.random() * 20) + 5,
      temperature: Math.floor(Math.random() * 10) + 25,
    };

    // Determine spray status based on conditions
    let sprayStatus: 'good' | 'caution' | 'dont' = 'good';
    let sprayReason = isThai ? 'สภาพอากาศเหมาะสม' : 'Good weather conditions';

    if (mockWeather.rainChance > 60 || mockWeather.windSpeed > 15) {
      sprayStatus = 'dont';
      sprayReason = isThai ? 'ฝนตกหรือลมแรง' : 'Rain or strong wind';
    } else if (mockWeather.rainChance > 30 || mockWeather.windSpeed > 10) {
      sprayStatus = 'caution';
      sprayReason = isThai ? 'ระวังฝนหรือลม' : 'Watch for rain or wind';
    }

    setWeather({
      ...mockWeather,
      sprayStatus,
      sprayReason
    });
  }, [isThai]);

  const getSprayStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'caution':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'dont':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSprayStatusText = (status: string) => {
    switch (status) {
      case 'good':
        return t('home.spray_ok');
      case 'caution':
        return t('home.spray_caution');
      case 'dont':
        return t('home.spray_dont');
      default:
        return '';
    }
  };

  return (
    <div className="card p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-display-2 text-ink">
          {t('home.today_at_farm')}
        </h2>
        <div className="flex items-center space-x-2 text-ink-soft">
          <MapPin className="w-5 h-5" />
          <span className="text-sm">{location}</span>
        </div>
      </div>

      {/* Weather Chips */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 rounded-xl2 p-4 text-center">
          <CloudRain className="w-6 h-6 text-pri-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-pri-600">{weather.rainChance}%</div>
          <div className="text-sm text-ink-soft">{t('home.rain')}</div>
        </div>
        
        <div className="bg-gray-50 rounded-xl2 p-4 text-center">
          <Wind className="w-6 h-6 text-ink-soft mx-auto mb-2" />
          <div className="text-2xl font-bold text-ink">{weather.windSpeed} km/h</div>
          <div className="text-sm text-ink-soft">{t('home.wind')}</div>
        </div>
        
        <div className="bg-orange-50 rounded-xl2 p-4 text-center">
          <Thermometer className="w-6 h-6 text-orange-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-orange-600">{weather.temperature}°C</div>
          <div className="text-sm text-ink-soft">{t('home.temp')}</div>
        </div>
      </div>

      {/* Spray Status */}
      <div className="flex items-center justify-between">
        <div className={`px-4 py-3 rounded-xl border ${getSprayStatusColor(weather.sprayStatus)}`}>
          <div className="font-bold text-lg">
            {getSprayStatusText(weather.sprayStatus)}
          </div>
          <div className="text-sm opacity-80">
            {weather.sprayReason}
          </div>
        </div>
        
        <a 
          href="/weather" 
          className="text-green-600 hover:text-green-700 text-sm font-medium underline"
        >
          {isThai ? 'ดูรายละเอียดในแอป →' : 'View details in app →'}
        </a>
      </div>
    </div>
  );
};

export default TodayAtFarm;
