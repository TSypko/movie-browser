import React from "react";
import { StyledSection, VectorImage, Rate, Votes } from "./styled";
import Vector from "../../../assets/images/Vector.svg";

const VotesSection = ({ horizontal }) => (
  <StyledSection horizontal={horizontal}>
    <VectorImage src={Vector} alt="vector" />
    <Rate horizontal={horizontal}>7,8</Rate>
    <Votes horizontal={horizontal}>35 votes</Votes>
  </StyledSection>
);

export default VotesSection;
