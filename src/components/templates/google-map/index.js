import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import Marker from "./components/marker";
import GoogleMapContainer from "./elements";

const GoogleMap = ({
  center,
  zoom,
  children,
  marginT,
  marginB,
  width,
  height
}) => (
  <GoogleMapContainer
    marginT={marginT}
    marginB={marginB}
    width={width}
    height={height}
  >
    <GoogleMapReact
      bootstrapURLKeys="AIzaSyDo_SqiXL3Zo4jfh6s-EsDdOhWdVP91tzI"
      defaultCenter={{
        lat: 25.6511651,
        lng: -100.2898143
      }}
      defaultZoom={12}
      center={center}
      zoom={zoom}
    >
      {children}
    </GoogleMapReact>
  </GoogleMapContainer>
);

GoogleMap.defaultProps = {
  marginT: "0",
  marginB: "0",
  width: "100%",
  height: "400px",
  zoom: 13,
  children: undefined
};

GoogleMap.propTypes = {
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number,
  children: PropTypes.any,
  marginT: PropTypes.string,
  marginB: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

export { GoogleMap, Marker };
