import React from "react";
import {
  StyledTile,
  Poster,
  MovieTitle,
  MovieYear,
  MovieProduction,
  MovieRelease,
  GenreSection,
  MovieDetails,
  MovieDescription,
} from "./styled";
import PosterImage from "../../assets/images/poster.svg";
import GenreTile from "./GenreTile";
import VotesSection from "./VotesSection";

const Tile = ({ horizontal }) => {
  return (
    <StyledTile>
      <Poster src={PosterImage} alt="poster" />
      <MovieDetails>
        <MovieTitle>
          Mulan long title long title Mulan long title long
        </MovieTitle>
        <MovieYear>2020</MovieYear>
        {horizontal ? (
          <>
            <MovieProduction>China</MovieProduction>
            <MovieRelease>24.10.2020</MovieRelease>
          </>
        ) : null}
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
      {horizontal ? (
        <MovieDescription>
          A young Chinese maiden disguises herself as a male warrior in order to
          save her father. Disguises herself as a male warrior in order to save
          her father. A young Chinese maiden disguises herself as a male warrior
          in order to save her father.
        </MovieDescription>
      ) : null}
    </StyledTile>
  );
};

export default Tile;
