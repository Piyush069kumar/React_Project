import React from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "../component/Spinner";
import WeatherCard from "../component/WeatherCard";
import { useContext,useState} from "react";
import ImgLocation from '../assets/location.png';
import './YourWeather.css';


const YourWeather = () => {
  const { fetchWeather, loading } = useContext(AppContext);
  const [locationAccessed, setLocationAccessed] = useState(false);

  const handleAccessLocation = () => {
    const cachedLat = sessionStorage.getItem("lat");
    const cachedLon = sessionStorage.getItem("lon");

    if (cachedLat && cachedLon) {
      fetchWeather({ lat: cachedLat, lon: cachedLon });
      // console.log(fetchWeather({ lat: cachedLat, lon: cachedLon }));
      setLocationAccessed(true);
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;

          sessionStorage.setItem("lat", lat);
          sessionStorage.setItem("lon", lon);

          fetchWeather({ lat, lon });
          setLocationAccessed(true);
        },
        (err) => {
          alert("Failed to fetch location");
          console.error(err);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
     <div className="your-weather-container">
      {!locationAccessed ? (
        <div>
          <img src={ImgLocation} alt="Location Icon" className="location-image" />
          <h2>Get Weather Using Your Location</h2>
          <button onClick={handleAccessLocation} className="access-button">
            Access Location
          </button>
        </div>
      ) : loading ? (
        <div className="spinner-container"><Spinner /></div>
      ) : (
        <WeatherCard />
      )}
    </div>
  );
};



export default  YourWeather ;
