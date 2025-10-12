import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MapPin, Thermometer, CloudRain, Wind, Droplets, Sun, Cloud, CloudRain as RainIcon } from 'lucide-react';
import SEO from '../components/SEO';

interface WeatherData {
  date: string;
  temperature: {
    min: number;
    max: number;
  };
  rainProbability: number;
  windSpeed: number;
  humidity: number;
  condition: string;
  conditionTh: string;
  icon: string;
}

const Weather = () => {
  const { t, i18n } = useTranslation();
  const isThai = i18n.language === 'th';
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState(isThai ? 'กรุงเทพมหานคร' : 'Bangkok');

  // Mock weather data for demo
  const mockWeatherData: WeatherData[] = [
    {
      date: new Date().toISOString().split('T')[0],
      temperature: { min: 24, max: 32 },
      rainProbability: 20,
      windSpeed: 12,
      humidity: 65,
      condition: 'Partly Cloudy',
      conditionTh: 'มีเมฆบางส่วน',
      icon: 'partly-cloudy'
    },
    {
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      temperature: { min: 23, max: 31 },
      rainProbability: 60,
      windSpeed: 15,
      humidity: 75,
      condition: 'Rainy',
      conditionTh: 'ฝนตก',
      icon: 'rainy'
    },
    {
      date: new Date(Date.now() + 172800000).toISOString().split('T')[0],
      temperature: { min: 25, max: 33 },
      rainProbability: 10,
      windSpeed: 8,
      humidity: 55,
      condition: 'Sunny',
      conditionTh: 'แดดออก',
      icon: 'sunny'
    },
    {
      date: new Date(Date.now() + 259200000).toISOString().split('T')[0],
      temperature: { min: 24, max: 30 },
      rainProbability: 40,
      windSpeed: 10,
      humidity: 70,
      condition: 'Cloudy',
      conditionTh: 'มีเมฆมาก',
      icon: 'cloudy'
    },
    {
      date: new Date(Date.now() + 345600000).toISOString().split('T')[0],
      temperature: { min: 26, max: 34 },
      rainProbability: 5,
      windSpeed: 6,
      humidity: 50,
      condition: 'Sunny',
      conditionTh: 'แดดออก',
      icon: 'sunny'
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In real implementation, this would call MeteoSource API
        setWeatherData(mockWeatherData);
      } catch (err) {
        setError(t('weather.error'));
        // Fallback to mock data
        setWeatherData(mockWeatherData);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [location, t]);

  const getWeatherIcon = (icon: string) => {
    switch (icon) {
      case 'sunny':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'rainy':
        return <RainIcon className="w-8 h-8 text-blue-500" />;
      case 'partly-cloudy':
        return <Cloud className="w-8 h-8 text-gray-400" />;
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const locale = isThai ? 'th-TH' : 'en-US';
    return date.toLocaleDateString(locale, {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-bg section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rai-green-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">{t('weather.loading')}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="ตรวจอากาศเกษตร | พยากรณ์อากาศ 3-5 วัน | Rai AI"
        description="ตรวจอากาศสำหรับเกษตรกร พยากรณ์อากาศ 3-5 วันล่วงหน้า ข้อมูลจากกรมอุตุนิยมวิทยา"
        keywords="ตรวจอากาศเกษตร, พยากรณ์อากาศ, ข้อมูลอากาศเกษตรกร, สภาพอากาศ"
        url="https://raiai.app/weather"
      />
      <div className="min-h-screen bg-bg section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-display-1 text-ink mb-4">
            {t('weather.title')}
          </h1>
          <p className="text-lg text-ink-soft mb-4">
            {t('weather.subtitle')}
          </p>
          <div className="flex items-center justify-center space-x-2 text-ink-soft">
            <MapPin className="w-5 h-5" />
            <span>{location}</span>
          </div>
        </div>

        {/* Location Selector */}
        <div className="card mb-8">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <label className="text-sm font-medium text-gray-700">
              {t('weather.selectLocation')}:
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rai-green-500 focus:border-transparent"
            >
              <option value="กรุงเทพมหานคร">{isThai ? 'กรุงเทพมหานคร' : 'Bangkok'}</option>
              <option value="เชียงใหม่">{isThai ? 'เชียงใหม่' : 'Chiang Mai'}</option>
              <option value="ขอนแก่น">{isThai ? 'ขอนแก่น' : 'Khon Kaen'}</option>
              <option value="นครราชสีมา">{isThai ? 'นครราชสีมา' : 'Nakhon Ratchasima'}</option>
              <option value="สงขลา">{isThai ? 'สงขลา' : 'Songkhla'}</option>
            </select>
          </div>
        </div>

        {/* Weather Forecast Table */}
        <div className="card overflow-hidden">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-rai-green-500 to-rai-teal-500 text-white p-4">
            <h2 className="text-xl font-bold text-center">
              {t('weather.forecast')} - {location}
            </h2>
          </div>
          
          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Column Headers */}
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 min-w-[120px]">
                    {isThai ? 'วันที่' : 'Date'}
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 min-w-[80px]">
                    {isThai ? 'สภาพอากาศ' : 'Weather'}
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 min-w-[100px]">
                    <div className="flex items-center justify-center space-x-1">
                      <Thermometer className="w-4 h-4 text-red-500" />
                      <span>{t('weather.temperature')}</span>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 min-w-[100px]">
                    <div className="flex items-center justify-center space-x-1">
                      <CloudRain className="w-4 h-4 text-blue-500" />
                      <span>{t('weather.rainProbability')}</span>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 min-w-[100px]">
                    <div className="flex items-center justify-center space-x-1">
                      <Wind className="w-4 h-4 text-gray-500" />
                      <span>{t('weather.windSpeed')}</span>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 min-w-[100px]">
                    <div className="flex items-center justify-center space-x-1">
                      <Droplets className="w-4 h-4 text-blue-400" />
                      <span>{t('weather.humidity')}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              
              {/* Table Body */}
              <tbody className="divide-y divide-gray-200">
                {weatherData.map((day, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    {/* Date Column */}
                    <td className="px-4 py-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">
                          {formatDate(day.date)}
                        </div>
                      </div>
                    </td>
                    
                    {/* Weather Icon Column */}
                    <td className="px-4 py-4 text-center">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex justify-center">
                          {getWeatherIcon(day.icon)}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {isThai ? day.conditionTh : day.condition}
                        </div>
                      </div>
                    </td>
                    
                    {/* Temperature Column */}
                    <td className="px-4 py-4 text-center">
                      <div className="text-lg font-bold text-red-600">
                        {day.temperature.min}°-{day.temperature.max}°C
                      </div>
                    </td>
                    
                    {/* Rain Probability Column */}
                    <td className="px-4 py-4 text-center">
                      <div className={`text-lg font-bold ${
                        day.rainProbability >= 60 ? 'text-red-600' : 
                        day.rainProbability >= 30 ? 'text-yellow-600' : 
                        'text-green-600'
                      }`}>
                        {day.rainProbability}%
                      </div>
                      {day.rainProbability >= 60 && (
                        <div className="text-xs text-red-500 mt-1">
                          {isThai ? '⚠️ หลีกเลี่ยงการฉีดพ่น' : '⚠️ Avoid spraying'}
                        </div>
                      )}
                    </td>
                    
                    {/* Wind Speed Column */}
                    <td className="px-4 py-4 text-center">
                      <div className="text-lg font-bold text-gray-600">
                        {day.windSpeed} km/h
                      </div>
                    </td>
                    
                    {/* Humidity Column */}
                    <td className="px-4 py-4 text-center">
                      <div className="text-lg font-bold text-cyan-600">
                        {day.humidity}%
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {error && (
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 ">{error}</p>
          </div>
        )}

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
                to="/apkdownload"
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

export default Weather;
