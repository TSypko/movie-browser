import React from "react";
import { StyledSection, StarImage, Rate, Votes, OutOf10Span } from "./styled";
import Star from "../../../assets/images/star.svg";

const VotesSection = ({ horizontal, rate, votes }) => (
  <StyledSection horizontal={horizontal}>
    <StarImage src={Star} alt="vector" />
    <Rate horizontal={horizontal}>{rate ? rate : ""}</Rate>
    {horizontal ? <OutOf10Span>{votes ? "/ 10" : ""}</OutOf10Span> : null}
    <Votes horizontal={horizontal}>{votes ? votes : "There is no"} votes</Votes>
  </StyledSection>
);

export default VotesSection;
