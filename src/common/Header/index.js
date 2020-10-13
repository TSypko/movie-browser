import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchPanel from "./SearchPanel";
import { StyledHeader, HeaderContainer, HeaderWrapper } from "./styled";

const Header = () => (
    <StyledHeader>
        <HeaderContainer>
            <HeaderWrapper>
                <Logo />
                <Navigation />
            </HeaderWrapper>
            <SearchPanel />
        </HeaderContainer>
    </StyledHeader>
);

export default Header;