import React from "react";
import { TileContainer, GenreTitle } from "./styled";

const GenreTile = ({ genre }) => (
  <TileContainer>
    <GenreTitle>{genre}</GenreTitle>
  </TileContainer>
);

export default GenreTile;
