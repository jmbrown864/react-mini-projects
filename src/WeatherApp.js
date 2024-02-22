import React, { useState } from "react";

// open weather API key: 7f7ba1645ac60c5da250138ca81b782e

export const WeatherApp = () => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        // convert to lat & long
        const apiKey = "7f7ba1645ac60c5da250138ca81b782e";
        let latitute = 0;
        let longitude = 0;

        fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${encodeURIComponent(search)}&appid=${encodeURIComponent(apiKey)}`, {
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

        // update results
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