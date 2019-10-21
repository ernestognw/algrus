import React, { Component, Fragment } from "react";
import ModalLoader from "components/templates/modal-loader";
import Typography from "components/common/typography";
import Container from "./elements";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      result: 0
    };
  }

  componentDidMount = async () => {
    const { getPrediction } = this.props;

    let result = await getPrediction();

    while (result > 100) {
      result /= 1000;
    }

    this.setState({ result, loading: false });
  };

  render() {
    const { result, loading } = this.state;
    return (
      <Fragment>
        <ModalLoader active={loading} message="Generating a prediction" />
        {!loading && (
          <Container>
            <Typography align="center" fontSize="40px" color="primary">
              {result.toFixed(5)}
            </Typography>
            <Typography align="center" fontSize="16px" variant="muted">
              Chlorophyll Concentration
            </Typography>
            <Typography align="center" variant="muted">
              mg/m^3
            </Typography>
          </Container>
        )}
      </Fragment>
    );
  }
}

export default Result;
