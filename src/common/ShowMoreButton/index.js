import React from "react";
import { StyledButton } from "./styled";

export default ({ body, onClick, width, height, mobileWidth, mobileHeight }) => (
    <StyledButton
        onClick={onClick}
        width={width}
        height={height}
        mobileWidth={mobileWidth}
        mobileHeight={mobileHeight}
    >
        {body}
    </StyledButton>
);