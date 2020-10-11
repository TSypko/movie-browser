import React from "react";
import { StyledSection, VectorImage, Rate, Votes, OutOf10Span } from "./styled";
import Star from "../../../assets/images/star.svg";

const VotesSection = ({ horizontal, rate, votes }) => (
  <StyledSection horizontal={horizontal}>
    <VectorImage src={Star} alt="vector" />
    <Rate horizontal={horizontal}>{rate}</Rate>
    {horizontal ? <OutOf10Span>/ 10</OutOf10Span> : null}
    <Votes horizontal={horizontal}>{votes} votes</Votes>
  </StyledSection>
);

export default VotesSection;
