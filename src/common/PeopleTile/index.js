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
} from "./styled";
import PeoplePoster from "../../assets/images/peoplePosterBigExample.svg";

const PeopleTile = ({ horizontal }) => (
  <StyledTile horizontal={horizontal}>
    <Poster horizontal={horizontal} src={PeoplePoster} alt="actor photo" />
    <PersonDetails horizontal={horizontal}>
      <PersonName horizontal={horizontal}>Jason Scott Lee Long name</PersonName>
      {horizontal ? (
        <>
          <PersonBirthDate>
            <InfoLabelSpan>Date of birth: </InfoLabelSpan>
            <InfoSpan>25.08.1987</InfoSpan>
          </PersonBirthDate>
          <PersonBirthPlace>
            <InfoLabelSpan>Place of birth: </InfoLabelSpan>
            <InfoSpan>Wuhan, Hubei, China</InfoSpan>
          </PersonBirthPlace>
          <PersonDescription>
            Liu Yifei was born in Wuhan, Hubei, Province of China on August
            25th, 1987. She began modeling at the age of 8 and was trained in
            singing, dancing and the piano. Moving to the United States at 10
            with her mother, Liu lived there for four years.
          </PersonDescription>
        </>
      ) : null}
    </PersonDetails>
  </StyledTile>
);

export default PeopleTile;