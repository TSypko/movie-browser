import React from "react";
import GenreTile from "../GenreTile";
import { StyledSection } from "./styled";

const GenreSection = ({ horizontal, genres }) => (
  <StyledSection horizontal={horizontal}>
    {genres.map((genre) => (
      <GenreTile key={genre} horizontal={horizontal} genre={genre} />
    ))}
  </StyledSection>
);

export default GenreSection;
