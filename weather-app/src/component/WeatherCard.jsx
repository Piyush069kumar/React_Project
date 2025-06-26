// // src/components/WeatherCard.jsx
 import { useContext } from "react";
 import { AppContext } from "../context/AppContext";
 import cloud from '../assets/cloud.png';
 import humidity from '../assets/humidity.png';
 import windIcon from '../assets/wind.png';
 
import './WeatherCard.css';


 const WeatherCard = () => {
   const { weatherData } = useContext(AppContext);

  if (!weatherData) return null;

   const { name, main, weather, wind } = weatherData;
return (
  <div className="weather-card">
    <h2>{name}</h2>
    <p>{weather[0].main}</p>
    <p>Temperature: {main.temp}°C</p>

    <div className="info">
      <div className="weather-detail">
      <img src={humidity} alt="Humidity" />
      <p>Humidity: {main.humidity}%</p>
    </div>

    <div className="weather-detail">
      <img src={windIcon} alt="Wind" />
      <p>Wind: {wind.speed} m/s</p>
    </div>

    <div className="weather-detail">
      <img src={cloud} alt="Cloud" />
      <p className="weather-description">{weather[0].description}</p>
    </div>
    </div>
  </div>
);

 };

 export default WeatherCard;





