import axios from "axios";

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const geoApiOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "df9ecaa746msh12d58d9baaf31e6p1b72bbjsn885d0d1d2b76",
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
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
