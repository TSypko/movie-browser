import React, { useEffect, useState } from "react";
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
import { theme } from "../../theme";

const Tile = ({ horizontal, title, year, poster, production, release, description, genres, rate, votes }) => {
  const [mobileContent, setMobileContent] = useState(false);
  const mobileBreakpoint = +theme.breakpoints.mobileMax.slice(0, -2);
  const onWidthChange = () => {
    if (window.innerWidth <= mobileBreakpoint) {
      setMobileContent(true);
    } else {
      setMobileContent(false);
    }
  };

  useEffect(() => {
    onWidthChange();
    window.addEventListener("resize", onWidthChange);
    return () => window.removeEventListener("resize", onWidthChange);
  });

  return (
    <StyledTile horizontal={horizontal}>
      <Poster
        horizontal={horizontal}
        src={
          poster
            ? `https://image.tmdb.org/t/p/w342${poster}`
            : posterPlaceholder
        }
        alt={`Image of ${title} poster`} />
      <MovieDetails horizontal={horizontal}>
        <MovieTitle horizontal={horizontal}>{title}</MovieTitle>
        {year ? <MovieYear horizontal={horizontal}>{year.slice(0, 4)}</MovieYear> : null}
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
