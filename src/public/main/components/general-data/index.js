import React, { Fragment } from "react";
import { Card, CardHeader, CardBody } from "components/common/card";
import Range from "components/common/range";
import Button from "components/common/button";
import Typography from "components/common/typography";
import RightIcon from "./elements";

const GeneralData = ({
  current,
  goTo,
  waterTemperature,
  setWaterTemperature,
  pressure,
  setPressure,
  ph,
  setPh
}) => (
  <Fragment>
    <Card marginT="30" marginB="30">
      <CardHeader title="General data" subtitle="Fill the corresponding data" />
      <CardBody>
        <Typography marginB="5" variant="heading">
          Water temperature
        </Typography>
        <Typography variant="muted">ºC</Typography>
        <Range
          marginT="-20"
          marginB="50"
          step={0.1}
          maxValue={100}
          minValue={-50}
          value={waterTemperature}
          onChange={val => setWaterTemperature(Number(val.toFixed(1)))}
        />
        <Typography marginT="30" marginB="5" variant="heading">
          Pressure
        </Typography>
        <Typography variant="muted">Bar</Typography>
        <Range
          marginT="-20"
          marginB="50"
          maxValue={2000}
          minValue={0}
          value={pressure}
          onChange={val => setPressure(val)}
        />
        <Typography marginT="30" marginB="5" variant="heading">
          Ph
        </Typography>
        <Typography variant="muted">Scale</Typography>
        <Range
          marginT="-20"
          marginB="50"
          maxValue={14}
          step={0.01}
          minValue={1}
          value={ph}
          onChange={val => setPh(Number(val.toFixed(2)))}
        />
      </CardBody>
    </Card>
    <Button onClick={() => goTo(current + 1)} color="primary">
      Next <RightIcon />
    </Button>
  </Fragment>
);

export default GeneralData;
