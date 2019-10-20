import React from "react";
import InputRange from "react-input-range";
import Container from "./elements";

const Range = ({ ...props }) => (
  <Container
    marginT={props.marginT}
    marginB={props.marginB}
    marginR={props.marginR}
    marginL={props.marginL}
  >
    <InputRange {...props} />
  </Container>
);

export default Range;
