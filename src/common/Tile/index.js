import React from "react";
import {
  StyledTile,
  Poster,
  MovieTitle,
  MovieYear,
  GenreSection,
  MovieDetails,
} from "./styled";
import PosterImage from "../../assets/images/poster.svg";
import GenreTile from "./GenreTile";
import VotesSection from "./VotesSection";

const Tile = () => {
  return (
    <StyledTile>
      <Poster src={PosterImage} alt="poster" />
      <MovieDetails>
        <MovieTitle>
          Mulan long title long title Mulan long title long
        </MovieTitle>
        <MovieYear>2020</MovieYear>
        <GenreSection>
          <GenreTile genre="action" />
          <GenreTile genre="drama" />
          <GenreTile genre="adventure" />
          {/* <GenreTile genre="comedy" />
          <GenreTile genre="thriller" />
          <GenreTile genre="horror" /> */}
        </GenreSection>
        <VotesSection />
      </MovieDetails>
    </StyledTile>
  );
};

export default Tile;
