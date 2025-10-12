// Simple API route for weather data
// In production, this would proxy to MeteoSource API

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { location } = req.query;

  // Mock weather data for demo
  const mockWeatherData = {
    location: location || 'กรุงเทพมหานคร',
    forecast: [
      {
        date: new Date().toISOString().split('T')[0],
        temperature: { min: 24, max: 32 },
        rainProbability: 20,
        windSpeed: 12,
        humidity: 65,
        condition: 'Partly Cloudy',
        icon: 'partly-cloudy'
      },
      {
        date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
        temperature: { min: 23, max: 31 },
        rainProbability: 60,
        windSpeed: 15,
        humidity: 75,
        condition: 'Rainy',
        icon: 'rainy'
      },
      {
        date: new Date(Date.now() + 172800000).toISOString().split('T')[0],
        temperature: { min: 25, max: 33 },
        rainProbability: 10,
        windSpeed: 8,
        humidity: 55,
        condition: 'Sunny',
        icon: 'sunny'
      },
      {
        date: new Date(Date.now() + 259200000).toISOString().split('T')[0],
        temperature: { min: 24, max: 30 },
        rainProbability: 40,
        windSpeed: 10,
        humidity: 70,
        condition: 'Cloudy',
        icon: 'cloudy'
      },
      {
        date: new Date(Date.now() + 345600000).toISOString().split('T')[0],
        temperature: { min: 26, max: 34 },
        rainProbability: 5,
        windSpeed: 6,
        humidity: 50,
        condition: 'Sunny',
        icon: 'sunny'
      }
    ]
  };

  res.status(200).json(mockWeatherData);
}
