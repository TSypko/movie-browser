import React from "react";
import { StyledLink } from "./styled";

const FeatureLink = ({children, to}) => (
    <StyledLink to={to}>
        {children}
    </StyledLink>
);

export default FeatureLink;