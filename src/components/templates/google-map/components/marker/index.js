import React from "react";
import PropTypes from "prop-types";
import { Marker as MarkerElement, Pulse } from "./elements";

const Marker = ({ lat, lng }) => (
  <div lat={lat} lng={lng}>
    <MarkerElement />
    <Pulse />
  </div>
);

Marker.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
};

export default Marker;
