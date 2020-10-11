import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "link-active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.White};
    text-transform: uppercase;
    text-decoration: none;
    margin: 10px 0;
    padding: 10px;
    margin-right: 30px;

    &.${activeClassName} {
        border: 1px solid ${({ theme }) => theme.colors.White};
        border-radius: 24px;
    }

    
    @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}) {
        font-size: 12px;
        margin-right: 10px;
    }
`;

export const List = styled.ul`
    display: flex;

    @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}) {
        padding-left: 10px;
    }
`;