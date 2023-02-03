import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import "../styles/ForecastDetails.css";
import highTempIcon from "../styles/images/high.png";
import lowTempIcon from "../styles/images/low.png";
import windIcon from "../styles/images/wind.png";
import humidityIcon from "../styles/images/humidity.png";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind, icon, description } = forecast;
  const formattedDate = new Date(date).toLocaleDateString("en-uk", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  return (
    <div className="forecast-details">
      <div className="forecast-details-container-1">
        <div className="forecast-details__date">{formattedDate}</div>
        <div className="forecast-details__icon">
          <WeatherIcon name="owm" iconId={icon} />
        </div>
        <div className="forecast-details__description">{description}</div>
      </div>
      <div className="forecast-details-container-2">
        <div className="forecast-details__max-temperature">
          <img src={highTempIcon} alt="high-temp logo" />
          {temperature.max}&deg;C
        </div>
        <div className="forecast-details__low-temperature">
          <img src={lowTempIcon} alt="low-temp logo" />
          {temperature.min}&deg;C
        </div>
        <div className="forecast-details__humidity">
          <img src={humidityIcon} alt="humidity logo" />
          {humidity}%
        </div>
        <div className="forecast-details__wind">
          <img src={windIcon} alt="wind logo" />
          {wind.speed}mph {wind.direction}
        </div>
      </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
