import React, { useEffect, useState } from "react";
import {
  StyledTile,
  Poster,
  PersonDetails,
  PersonName,
  PersonBirthDate,
  PersonBirthPlace,
  InfoLabelSpan,
  InfoSpan,
  PersonDescription,
} from "./styled";
import posterPlaceholder from "../../assets/images/video.svg";
import { theme } from "../../theme";

const PeopleTile = ({ horizontal, name, birthDate, poster, birthCity, description }) => {
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
            ? `https://image.tmdb.org/t/p/original${poster}`
            : posterPlaceholder
        }
        alt={`Image of ${name} poster`}
      />
      <PersonDetails horizontal={horizontal}>
        <PersonName horizontal={horizontal}>{name}</PersonName>
        {horizontal ? (
          <>
            <PersonBirthDate>
              <InfoLabelSpan>{mobileContent ? "Birth" : "Date of birth"}: </InfoLabelSpan>
              <InfoSpan>{birthDate}</InfoSpan>
            </PersonBirthDate>
            <PersonBirthPlace>
              <InfoLabelSpan>Place of birth: </InfoLabelSpan>
              <InfoSpan>{birthCity}</InfoSpan>
            </PersonBirthPlace>
            {horizontal && !mobileContent ? (
              <PersonDescription>{description}</PersonDescription>
            ) : null}
          </>
        ) : null}
      </PersonDetails>
      {horizontal && mobileContent ? (
        <PersonDescription>{description}</PersonDescription>
      ) : null}
    </StyledTile>
  );
};

export default PeopleTile;