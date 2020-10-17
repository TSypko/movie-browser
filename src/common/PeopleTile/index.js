import React from "react";
import { StyledTile, Poster, PersonDetails, PersonName } from "./styled";
import PeoplePoster from "../../assets/images/peoplePosterBigExample.svg";

const PeopleTile = () => (
    <StyledTile>
        <Poster src={PeoplePoster} alt="actor photo"/>
        <PersonDetails>
            <PersonName>Jason Scott Lee Long name</PersonName>
        </PersonDetails>
    </StyledTile>
);

export default PeopleTile;