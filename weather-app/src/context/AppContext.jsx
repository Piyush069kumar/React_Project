// src/context/AppContext.jsx
import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

const fetchWeather = async ({ city = null, lat = null, lon = null }) => {
  try {
    setLoading(true);
    const apiKey = process.env.REACT_APP_API_KEY;

    let url = "";

    if (city) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;

    } else if (lat && lon) {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    } else {
      alert("Please provide a city or location coordinates.");
      setLoading(false);
      return;
    }

     console.log("Fetching URL:", url);

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    if (data.cod !== 200) {
      alert(data.message || "City not found");
      setWeatherData(null);
    } else {
      setWeatherData(data);
    }

  } catch (error) {
    console.error("Fetch failed:", error);
    alert("Something went wrong");
    setWeatherData(null);
  } finally {
    setLoading(false);
  }
};


const value ={
  loading,
  setLoading,
  weatherData,
  setWeatherData,
  fetchWeather,
}

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
