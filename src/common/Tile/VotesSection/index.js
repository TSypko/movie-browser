import React from "react";
import { StyledSection, VectorImage, Rate, Votes } from "./styled";
import Vector from "../../../assets/images/Vector.svg";

const VotesSection = ({ horizontal, rate, votes }) => (
  <StyledSection horizontal={horizontal}>
    <VectorImage src={Vector} alt="vector" />
    <Rate horizontal={horizontal}>{rate}</Rate>
    <Votes horizontal={horizontal}>{votes} votes</Votes>
  </StyledSection>
);

export default VotesSection;
