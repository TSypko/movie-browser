import React from "react";
import {
  StyledTile,
  Poster,
  MovieTitle,
  MovieYear,
  MovieProduction,
  MovieRelease,
  MovieDetails,
  MovieDescription,
  InfoLabelSpan,
  InfoSpan,
} from "./styled";
import GenreSection from "./GenreSection";
import VotesSection from "./VotesSection";
import posterPlaceholder from "../../assets/images/video.svg";
import { useLocation } from "react-router-dom";
import useMobileContent from "../useMobileContent";

const Tile = ({ horizontal, title, year, poster, production, release, description, genres, rate, votes, personRole }) => {
  const location = useLocation();
  const useInPersonDetails = location.pathname.includes("people");
  const mobileContent = useMobileContent();

  return (
    <StyledTile horizontal={horizontal}>
      <Poster
        horizontal={horizontal}
        noPoster={!poster}
        src={
          poster
            ? `https://image.tmdb.org/t/p/w342${poster}`
            : posterPlaceholder
        }
        alt={`Image of ${title} poster`} />
      <MovieDetails horizontal={horizontal}>
        <MovieTitle horizontal={horizontal}>{title}</MovieTitle>
        {year ? <MovieYear horizontal={horizontal}>
          {useInPersonDetails ? `${personRole ? personRole : ""} (${year.slice(0, 4)})` : year.slice(0, 4)}
        </MovieYear> : null}
        {horizontal ? (
          <>
            <MovieProduction>
              <InfoLabelSpan>Production:</InfoLabelSpan>
              <InfoSpan>{production}</InfoSpan>
            </MovieProduction>
            <MovieRelease>
              <InfoLabelSpan>Release date:</InfoLabelSpan>
              <InfoSpan>{release}</InfoSpan>
            </MovieRelease>
          </>
        ) : null}
        <GenreSection horizontal={horizontal} genres={genres} />
        <VotesSection horizontal={horizontal} rate={rate} votes={votes} />
        {horizontal && !mobileContent ? (
          <MovieDescription>{description}</MovieDescription>
        ) : null}
      </MovieDetails>
      {horizontal && mobileContent ? (
        <MovieDescription>{description}</MovieDescription>
      ) : null}
    </StyledTile>
  );
};

export default Tile;
