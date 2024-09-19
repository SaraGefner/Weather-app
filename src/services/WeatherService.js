import axios from 'axios';

const apiKey = 'be6fae16fc4ddb3ef4dd14a22077333d';

export const fetchWeatherData = async (locations) => {
  const promises = locations.map(location =>
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}&lang=en`)
  );
  const results = await Promise.all(promises);
  return results.map(result => result.data);
  
};
export default fetchWeatherData;