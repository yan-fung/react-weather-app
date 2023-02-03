import React from "react";
import PropTypes from "prop-types";
import "../styles/LocationDetails.css";

function LocationDetails({ city, country, errorMessage }) {
  return errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <div className="location-details">{`${city}, ${country}`}</div>
  );
}

LocationDetails.defaultProps = {
  errorMessage: "",
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

export default LocationDetails;
