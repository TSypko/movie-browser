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
import PosterImage from "../../assets/images/poster.svg";
import GenreSection from "./GenreSection";
import VotesSection from "./VotesSection";
import { theme } from "../../theme";

const Tile = ({ horizontal }) => {
  const [mobileSize, setMobileSize] = useState(false);
  const mobileBreakpoint = +theme.breakpoints.mobileMax.slice(0, -2);
  const onWidthChange = () => {
    if (window.innerWidth <= mobileBreakpoint) {
      setMobileSize(true);
    } else {
      setMobileSize(false);
    }
  };

  useEffect(() => {
    onWidthChange();
    window.addEventListener("resize", onWidthChange);
    return () => window.removeEventListener("resize", onWidthChange);
  });

  return (
    <StyledTile horizontal={horizontal}>
      <Poster horizontal={horizontal} src={PosterImage} alt="poster" />
      <MovieDetails horizontal={horizontal}>
        <MovieTitle horizontal={horizontal}>Mulan</MovieTitle>
        <MovieYear horizontal={horizontal}>2020</MovieYear>
        {horizontal ? (
          <>
            <MovieProduction>
              <InfoLabelSpan>Production:</InfoLabelSpan>
              <InfoSpan>China, USA</InfoSpan>
            </MovieProduction>
            <MovieRelease>
              <InfoLabelSpan>Release date:</InfoLabelSpan>
              <InfoSpan>24.10.2020</InfoSpan>
            </MovieRelease>
          </>
        ) : null}
        <GenreSection horizontal={horizontal} />
        <VotesSection horizontal={horizontal} />
        {horizontal && !mobileSize ? (
          <MovieDescription>
            A young Chinese maiden disguises herself as a male warrior in order
            to save her father. Disguises herself as a male warrior in order to
            save her father. A young Chinese maiden disguises herself as a male
            warrior in order to save her father.
          </MovieDescription>
        ) : null}
      </MovieDetails>
      {horizontal && mobileSize ? (
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
