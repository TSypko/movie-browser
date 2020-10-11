import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { StyledHeader, HeaderContainer } from "./styled";

const Header = () => (
    <StyledHeader>
        <HeaderContainer>
            <Logo />
            <Navigation />
        </HeaderContainer>
    </StyledHeader>
);

export default Header;