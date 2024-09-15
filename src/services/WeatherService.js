import axios from 'axios';

const apiKey = '8ee633956bad6ae1965b557a94ecfcba '; 
export const fetchWeatherData = async (locations) => {
  const promises = locations.map(location =>
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`)
  );
  const results = await Promise.all(promises);
  return results.map(result => result.data);
};
export default fetchWeatherData