import React, { useState } from "react";
import { openWeatherKey } from "../Keys";

export const WeatherApp = () => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        // convert to lat & long
        let latitute = 0;
        let longitude = 0;

        fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${encodeURIComponent(search)}&appid=${encodeURIComponent(openWeatherKey)}`, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((data) => {
            latitute = data.lat;
            longitude = data.lon;
            console.log(data);
        })
        .catch((error) => console.log(error));

        // get weather
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${encodeURIComponent(latitute)}&lon=${encodeURIComponent(longitude)}&units=metric&appid=${encodeURIComponent(apiKey)}`, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((data) => setSearchResults(data))
        .catch((error) => console.log(error));
    }

    return(
        <div>
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Zip Code"
                    onChange={(e) => setSearch(e.target.value)}
                    required
                />
                <button>Get Weather</button>
            </form>
            { searchResults && 
                <div>
                    <p>Current Temp: {searchResults.main.temp}</p>
                    <p>Weather Description: {searchResults.weather[0].description} </p>
                    <p>Humidity: {searchResults.main.humidity} </p>
                    <p>Wind speed: {searchResults.wind.speed} </p>
                </div>
            }
        </div>
    );    
}