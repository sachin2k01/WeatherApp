import { useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api.js";
import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather.js";
import Search from "./components/search/search.js";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currenctWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
    );

    const forecastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
    );

    Promise.all([currenctWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = response[0].json();
        const forecastResponse = response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <Search onSearchChange={handleSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
