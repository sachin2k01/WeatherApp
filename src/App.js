import { useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api.js";
import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather.js";
import Search from "./components/search/search.js";
import Forecast from "./components/forecast/forecast.js";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    try {
      const [weatherRes, forecastRes] = await Promise.all([
        fetch(
          `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
        ),
        fetch(
          `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
        ),
      ]);

      const weatherData = await weatherRes.json();
      const forecastData = await forecastRes.json();

      setCurrentWeather({
        city: searchData.label,
        ...weatherData,
      });

      setForecast({
        city: searchData.label,
        ...forecastData,
      });
    } catch (err) {
      console.error(err);
    }
  };
  console.log(forecast);
  return (
    <div className="container">
      <Search onSearchChange={handleSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
