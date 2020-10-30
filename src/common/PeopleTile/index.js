import React from "react";
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
  PersonRole,
} from "./styled";
import posterPlaceholder from "../../assets/images/profile.svg";
import useMobileContent from "../useMobileContent";

const PeopleTile = ({ horizontal, name, birthDate, poster, birthCity, description, role }) => {
  const mobileContent = useMobileContent();

  const getProfileImage = (poster, horizontal) => {
    if (!poster) return posterPlaceholder;
    else if (horizontal) return `https://image.tmdb.org/t/p/original${poster}`;
    else if (mobileContent) return `https://image.tmdb.org/t/p/w154${poster}`;
    else return `https://image.tmdb.org/t/p/w185${poster}`;
  }

  return (
    <StyledTile horizontal={horizontal}>
      <Poster
        horizontal={horizontal}
        src={getProfileImage(poster, horizontal)}
        alt={`Image of ${name} poster`}
      />
      <PersonDetails horizontal={horizontal}>
        <PersonName horizontal={horizontal}>{name}</PersonName>
        {role && <PersonRole>{role}</PersonRole>}
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