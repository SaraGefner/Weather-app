
// why to use this in hooks?
import { useState, useEffect } from 'react';
import { fetchWeatherData } from '../services/WeatherService';

const useWeatherData = (locations) => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const getWeatherData = async () => {
      const data = await fetchWeatherData(locations);
      setWeatherData(data);
    };

    getWeatherData();
  }, [locations]);

  return weatherData;
};

export default useWeatherData;
