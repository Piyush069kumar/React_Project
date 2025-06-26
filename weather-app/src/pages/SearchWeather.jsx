import React, { useContext } from "react";
import SearchBox from "./SearchBox";
import Spinner from "../component/Spinner";
import { AppContext } from "../context/AppContext";
import WeatherCard from "../component/WeatherCard";
import './SearchWeather.css';

const SearchWeather = ()=>{
    const {loading, weatherData} = useContext(AppContext);
    console.log("WeatherCard is rendering with:", weatherData);
    return(
        <div className="search-weather-container">
            

            <SearchBox style={{ textAlign: "center " }}/>
            {loading ? (
                <Spinner style={{ textAlign: "center " }} />
            ) : weatherData ? (
                <WeatherCard />
            ) : (
                <p > Search a city to get started</p>
            )}

        </div>
    )
}
export default SearchWeather;