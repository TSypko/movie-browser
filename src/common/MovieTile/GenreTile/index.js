import React from "react";
import { TileContainer, GenreTitle } from "./styled";

const GenreTile = ({ genre, horizontal }) => (
  <TileContainer horizontal={horizontal}>
    <GenreTitle >{genre}</GenreTitle>
  </TileContainer>
);

export default GenreTile;
