import React from 'react';
import './Weather.css';

const Weather = ({ data }) => {
  // 🎯 EXPLICATION : Vérifie si data existe pour éviter les erreurs
  if (!data) return null;

  // Conversion Kelvin → Celsius déjà faite avec units=metric
  const temperature = Math.round(data.main.temp);
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;

  return (
    <div className="weather-card">
      <h2>🌤️ Météo à {data.name}</h2>
      <div className="weather-content">
        <img 
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
          alt={description}
          className="weather-icon"
        />
        <div className="weather-info">
          <div className="temperature">{temperature}°C</div>
          <div className="description">{description}</div>
          <div className="details">
            <p>💧 Humidité: {data.main.humidity}%</p>
            <p>💨 Vent: {data.wind.speed} km/h</p>
            <p>🌡️ Ressenti: {Math.round(data.main.feels_like)}°C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;