import React from "react";
import { StyledButton } from "./styled";

export default ({ body, onClick, width, height }) => (
    <StyledButton
        onClick={onClick}
        width={width}
        height={height}
    >
        {body}
    </StyledButton>
);