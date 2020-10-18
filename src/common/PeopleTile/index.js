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
import PeoplePoster from "../../assets/images/peoplePosterBigExample.svg";
import { theme } from "../../theme";

const PeopleTile = ({ horizontal }) => {
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
      <Poster horizontal={horizontal} src={PeoplePoster} alt="actor photo" />
      <PersonDetails horizontal={horizontal}>
        <PersonName horizontal={horizontal}>Liu Yifei</PersonName>
        {horizontal ? (
          <>
            <PersonBirthDate>
              <InfoLabelSpan>{mobileContent ? "Birth" : "Date of birth"}: </InfoLabelSpan>
              <InfoSpan>25.08.1987</InfoSpan>
            </PersonBirthDate>
            <PersonBirthPlace>
              <InfoLabelSpan>Place of birth: </InfoLabelSpan>
              <InfoSpan>Wuhan, Hubei, China</InfoSpan>
            </PersonBirthPlace>
            {horizontal && !mobileContent ? (
              <PersonDescription>Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years.</PersonDescription>
            ) : null}
          </>
        ) : null}
      </PersonDetails>
      {horizontal && mobileContent ? (
        <PersonDescription>Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years.</PersonDescription>
      ) : null}
    </StyledTile>
  );
};

export default PeopleTile;