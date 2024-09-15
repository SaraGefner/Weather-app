
import React from 'react';
import { FaSun, FaCloud, FaSnowflake, FaCloudRain } from 'react-icons/fa';
import '../styles/WeatherPage.css';

const WeatherCard = ({ name, description, temp, feels_like, humidity }) => {
  const getWeatherIcon = (feels_like) => {
    if (feels_like <= 20) return <FaSnowflake />;
    if (feels_like <= 30) return <FaCloud />;
    return <FaSun />;
  };

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{temp}°C</p>
      <p>Feels like {feels_like}°C</p>
      <p>Humidity {humidity}%</p>
      <div>{getWeatherIcon(feels_like)}</div>
    </div>
  );
};

export default WeatherCard;
