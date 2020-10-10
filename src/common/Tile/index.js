import React from "react";
import { StyledTile, Poster, MovieTitle, MovieYear } from "./styled";
import PosterImage from "../../assets/images/poster.svg";

const Tile = () => {
  return (
    <StyledTile>
      <Poster src={PosterImage} alt="poster" />
      <MovieTitle>Mulan</MovieTitle>
      <MovieYear>2020</MovieYear>
    </StyledTile>
  );
};

export default Tile;
