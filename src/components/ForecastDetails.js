import React from "react";
import PropTypes from "prop-types";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{date}</div>
      <div className="forecast-details__max-temperature">
        {temperature.min}&deg;C
      </div>
      <div className="forecast-details__max-temperature">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-details__humidity">{humidity}%</div>
      <div className="forecast-details__wind">
        {wind.speed}mph {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
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
