import React from 'react';
import useWeatherData from '../hooks/useWeatherData';
import WeatherCard from '../components/WeatherCard';
import '../styles/WeatherPage.css';

const WeatherPage = () => {
  const locations = ['Eilat', 'London', 'New York', 'Alaska'];
  const weatherData = useWeatherData(locations);

  return (
    <div>
    
      <h1 className="weather-title">תחזית מסביב לעולם</h1>
           
      <div className="weather-grid">
        {weatherData.map(data => (
          <WeatherCard
            key={data.id}
            name={data.name}
            description={data.weather[0].description}
            temp={data.main.temp}
            feels_like={data.main.feels_like}
            humidity={data.main.humidity}
          />
        ))}
      </div>
    </div>
  );
};
export default WeatherPage;