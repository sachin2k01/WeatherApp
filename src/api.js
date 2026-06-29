import axios from "axios";

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const geoApiOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "",
    "x-rapidapi-host": "",
    "Content-Type": "application/json",
  },
};

// url: "https://wft-geo-db.p.rapidapi.com/v1/geo/countries",

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }

// https://api.openweathermap.org/data/4.0/onecall/current?lat={lat}&lon={lon}&appid={API key}

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "";
