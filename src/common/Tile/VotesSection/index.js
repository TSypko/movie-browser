import React from "react";
import { StyledSection, Rate, Votes } from "./styled";
import Vector from "../../../assets/images/Vector.svg";

const VotesSection = () => (
  <StyledSection>
    <img src={Vector} alt="vector" />
    <Rate>7,8</Rate>
    <Votes>35 votes</Votes>
  </StyledSection>
);

export default VotesSection;
