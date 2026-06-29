import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="weather-top">
        <div>
          <p className="city">Belgrade</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png" />
      </div>
      <div className="weather-bottom">
        <p className="temperature"> 18C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">22c</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">wind</span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">humidity</span>
            <span className="parameter-value">10%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
