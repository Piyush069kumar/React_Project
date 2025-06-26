import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import Search from "../assets/search.png";
import './SearchBox.css';


const SearchBox = () => {
  const [city, setCity] = useState("");
  const { fetchWeather } = useContext(AppContext);
  

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(city);
    if (city.trim() !== "") {
      fetchWeather({ city: city.trim() });
      
    } else {
      alert("Please enter a city name.");
    }
  };

  return (
    
    <div className="weather-card">
       <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
      <input 
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">
        <img src={Search} alt="Search" height={20} width={20} />
      </button>
    </form>
     
    </div>
  );
};

export default SearchBox;
