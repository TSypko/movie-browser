import React from 'react';
import Picture from "../../assets/images/pictureForNoResults.svg";
import { NoResultsContainer, StyledImage } from "./styled"

const NoResultsPage = () => {
    return (
        <NoResultsContainer>
            <StyledImage src={Picture} alt="no results image" />
        </NoResultsContainer>
    );
};

export default NoResultsPage;
