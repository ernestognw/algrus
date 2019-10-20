import React from "react";
import ModalLoader from "components/templates/modal-loader";

const Result = () => (
  <ModalLoader active={true} message="Generating a prediction" />
);

export default Result;
