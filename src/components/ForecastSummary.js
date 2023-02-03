import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import thermometer from "../styles/images/thermometer.png";
import "../styles/ForecastSummary.css";

function ForecastSummary({ date, description, icon, temperature, onSelect }) {
  const formattedDate = new Date(date).toLocaleDateString("en-uk", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__description">{description}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temperature">
        <img
          src={thermometer}
          alt="thermometer logo"
          width="25px"
          height="25px"
        />
        {temperature.max}&deg;C
      </div>
      <button type="button" className="button" onClick={() => onSelect(date)}>
        MORE
      </button>
    </div>
  );
}

export default ForecastSummary;

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};
