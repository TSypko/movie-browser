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

    &.${activeClassName} {
        border: 1px solid ${({ theme }) => theme.colors.White};
/* box-sizing: border-box; */
        border-radius: 24px;
    }
`;

export const List = styled.ul`
    display: flex;
    align-items: flex-start;
    list-style: none;
`;