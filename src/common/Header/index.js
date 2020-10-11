import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchPanel from "./SearchPanel";
import { StyledHeader, HeaderContainer } from "./styled";

const Header = () => (
    <StyledHeader>
        <HeaderContainer>
            <Logo />
            <Navigation />
            <SearchPanel />
        </HeaderContainer>
    </StyledHeader>
);

export default Header;