import React, { Component, Fragment } from "react";
import { GoogleMap, Marker } from "components/templates/google-map";
import Button from "components/common/button";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import GooglePlaces from "components/templates/google-places";
import { Card, CardHeader, CardBody } from "components/common/card";
import RightIcon from "./elements";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ""
    };
  }

  handleSelect = async result => {
    const { setLatLng } = this.props;
    const address = await geocodeByAddress(result);
    const latLng = await getLatLng(address[0]);
    this.setState({ address: result });
    setLatLng(latLng.lat, latLng.lng);
  };

  handleChange = address => {
    this.setState({ address });
  };

  render() {
    const { address } = this.state;
    const { lat, lng, goTo, current } = this.props;

    return (
      <Fragment>
        <Card marginT="30" marginB="30">
          <CardHeader
            title="Select a place to evaluate"
            subtitle="Select the place where the data comes from"
          />
          <CardBody>
            <GooglePlaces
              handleSelect={this.handleSelect}
              value={address}
              handleChange={this.handleChange}
              placeholder="Enter the place address"
            />
          </CardBody>
          <GoogleMap center={{ lat, lng }}>
            <Marker lat={lat} lng={lng} />
          </GoogleMap>
        </Card>
        <Button onClick={() => lat && lng && goTo(current + 1)} color="primary">
          Next <RightIcon />
        </Button>
      </Fragment>
    );
  }
}

export default Map;
