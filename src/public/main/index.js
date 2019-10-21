import React, { Component } from "react";
import axios from "axios";
import { Steps, Step, StepContent } from "components/templates/steps";
import Map from "./components/map";
import GeneralData from "./components/general-data";
import Result from "./components/result";
import { Container, StepsContainer } from "./elements";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      form: {
        lat: 25.6511651,
        lng: -100.2898143,
        waterTemperature: 19.0,
        pressure: 1021,
        ph: 6.0
      }
    };
  }

  getPrediction = async () => {
    const {
      form: { lat, lng, waterTemperature, pressure, ph }
    } = this.state;
    const { data } = await axios.post("https://algalbloom.herokuapp.com/api/", {
      lat,
      lng,
      waterTemperature,
      pressure,
      ph
    });

    return data;
  };

  setLatLng = (lat, lng) =>
    this.setState(({ form }) => ({ form: { ...form, lat, lng } }));

  setWaterTemperature = waterTemperature =>
    this.setState(({ form }) => ({ form: { ...form, waterTemperature } }));

  setPressure = pressure =>
    this.setState(({ form }) => ({ form: { ...form, pressure } }));

  setPh = ph => this.setState(({ form }) => ({ form: { ...form, ph } }));

  goTo = target => this.setState({ current: target });

  render() {
    const {
      form: { lat, lng, waterTemperature, pressure, ph },
      current
    } = this.state;
    return (
      <Container>
        <StepsContainer>
          <Steps
            goToPrevious={target => this.goTo(target)}
            current={current}
            color="primary"
          >
            <Step title="Place" description="Where is the data from?" />
            <Step
              title="General Data"
              description="Enter the general data for the measurement"
            />
            <Step title="Results" description="Query a prediction" />
          </Steps>
        </StepsContainer>
        <StepContent current={current}>
          <Map
            goTo={this.goTo}
            setLatLng={this.setLatLng}
            lat={lat}
            lng={lng}
            current={current}
          />
          <GeneralData
            goTo={this.goTo}
            setWaterTemperature={this.setWaterTemperature}
            waterTemperature={waterTemperature}
            setPressure={this.setPressure}
            pressure={pressure}
            setPh={this.setPh}
            ph={ph}
            current={current}
          />
          <Result getPrediction={this.getPrediction} />
        </StepContent>
      </Container>
    );
  }
}

export default Main;
