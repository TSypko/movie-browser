import React from "react";
import { StyledTile, Poster, PersonDetails, PersonName, PersonBirthDate, PersonBirthPlace, InfoLabelSpan, InfoSpan } from "./styled";
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
        </>
      ) : null}
    </PersonDetails>
  </StyledTile>
);

export default PeopleTile;