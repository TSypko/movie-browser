import React from "react";
import GenreTile from "../GenreTile";
import { StyledSection } from "./styled";

const GenreSection = ({ horizontal }) => (
  <StyledSection horizontal={horizontal}>
    <GenreTile horizontal={horizontal} genre="action" />
    <GenreTile horizontal={horizontal} genre="drama" />
    <GenreTile horizontal={horizontal} genre="adventure" />
    {/* <GenreTile horizontal={horizontal} genre="comedy" />
    <GenreTile horizontal={horizontal} genre="thriller" />
    <GenreTile horizontal={horizontal} genre="horror" /> */}
  </StyledSection>
);

export default GenreSection;
