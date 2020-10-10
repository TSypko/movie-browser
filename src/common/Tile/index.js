import React from "react";
import {
  StyledTile,
  Poster,
  MovieTitle,
  MovieYear,
  GenreSection,
} from "./styled";
import PosterImage from "../../assets/images/poster.svg";
import GenreTile from "./GenreTile";
import VotesSection from "./VotesSection";

const Tile = () => {
  return (
    <StyledTile>
      <Poster src={PosterImage} alt="poster" />
      <MovieTitle>Mulan long title long title Mulan long title long</MovieTitle>
      <MovieYear>2020</MovieYear>
      <GenreSection>
        <GenreTile genre="action" />
        {/* <GenreTile genre="adventure" />
        <GenreTile genre="drama" /> */}
        {/* <GenreTile genre="comedy" />
        <GenreTile genre="thriller" />
        <GenreTile genre="horror" /> */}
      </GenreSection>
      <VotesSection />
    </StyledTile>
  );
};

export default Tile;
