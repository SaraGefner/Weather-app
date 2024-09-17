import React from 'react';
import { FaSun, FaCloud, FaSnowflake } from 'react-icons/fa'; 


const WeatherCard = ({ name, description, temp, feels_like, humidity }) => {

  const getWeatherIcon = (feels_like) => {
    if (feels_like <= 20) return <FaSnowflake />;
    if (feels_like <= 30) return <FaCloud />;
    return <FaSun />;
  };
  const translateCity = (city) => {
    const cityTranslations = {
      "Alaska": "אלסקה",
      "New York": "ניו יורק",
      "London": "לונדון",
      "Eilat": "אילת"
    };
    return cityTranslations[city] || city; // Fallback to English if no translation
  };
  const translateWeather = (description) => {
    const translations = {
      "clear sky": "שמיים בהירים",
      "few clouds": "מעט עננים",
      "scattered clouds": "עננים פזורים",
      "broken clouds": "עננות מפוזרת",
      "overcast clouds": "עננות כבדה",
      "shower rain": "גשם מקומי",
      "rain": "גשם",
      "light rain": "גשם קל",
      "moderate rain": "גשם מתון",
      "heavy rain": "גשם כבד",
      "thunderstorm": "סופת רעמים",
      "snow": "שלג",
      "light snow": "שלג קל",
      "heavy snow": "שלג כבד",
      "mist": "ערפל",
      "haze": "אובך",
      "fog": "ערפל כבד",
      "drizzle": "טפטוף",
      "light drizzle": "טפטוף קל",
      "heavy drizzle": "טפטוף כבד",
      "freezing rain": "גשם קפוא",
      "sand/dust": "חול/אבק",
      "sleet": "ברד",
      "smoke": "עשן",
      "tornado": "טורנדו",
      "hurricane": "הוריקן",
      "windy": "רוחות",
      "calm": "שקט",
      "light breeze": "בריזה קלה",
      "gentle breeze": "בריזה עדינה",
      "strong breeze": "בריזה חזקה",
      "gale": "סערה",
      "strong gale": "סערה חזקה",
      "storm": "סערה",
      "violent storm": "סערה אלימה",
      "extreme storm": "סערה קיצונית"
    };
    return translations[description] || description; // Fallback to English if no translation
  };

  return (
    <div className="weather-card">
      <h2>{translateCity(name)}</h2>
      <p>{translateWeather(description)}</p>
      <p>{temp}°C</p>
      <p>מרגיש כמו {feels_like}°C</p> 
      <p>לחות: {humidity}%</p> 
      <div>{getWeatherIcon(feels_like)}</div>
    </div>
  );
};

export default WeatherCard;
