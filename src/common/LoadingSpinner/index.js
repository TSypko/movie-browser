import React from "react";
import { Container, BaseWheel, RotatingQuarter } from "./styled";

const LoadingSpinner = () => (
  <Container>
    <BaseWheel>
      <RotatingQuarter />
    </BaseWheel>
  </Container>
);

export default LoadingSpinner;
