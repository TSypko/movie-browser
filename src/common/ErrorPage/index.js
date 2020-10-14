import React from "react";
import { Link } from "react-router-dom";
import ErrorIcon from "../../assets/images/error.svg";
import { ErrorContainer, StyledImage, ErrorTitle, ErrorBody, ErrorButton } from "./styled";

export default () => (
    <ErrorContainer>
        <StyledImage src={ErrorIcon}></StyledImage>
        <ErrorTitle>Ooops! Something went wrong...</ErrorTitle>
        <ErrorBody>
            Please check your network connection<br />
                and try again
        </ErrorBody>
        <Link to="/">
            <ErrorButton>
                Back to home page
            </ErrorButton>
        </Link>
    </ErrorContainer>
);