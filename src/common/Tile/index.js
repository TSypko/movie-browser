import React from "react";
import { StyledTile, Poster, MovieTitle, MovieYear } from "./styled";
import PosterImage from "../../assets/images/poster.svg";
import GenreTile from "./GenreTile";

const Tile = () => {
  return (
    <StyledTile>
      <Poster src={PosterImage} alt="poster" />
      <MovieTitle>Mulan</MovieTitle>
      <MovieYear>2020</MovieYear>
      <GenreTile genre="action" />
      <GenreTile genre="adventure" />
      <GenreTile genre="drama" />
      {/* <GenreTile genre="comedy" />
      <GenreTile genre="thriller" />
      <GenreTile genre="horror" /> */}
    </StyledTile>
  );
};

export default Tile;
