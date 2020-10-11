import React from "react";
import { toPeople, toMovies } from "../../../routes";
import { List, StyledNavLink } from "./styled";

export default () => {
    return (
        <nav>
            <List>
                <StyledNavLink activeClassName="link-active" to={toMovies()}>Movies</StyledNavLink>
                <StyledNavLink activeClassName="link-active" to={toPeople()}>People</StyledNavLink>
            </List>
        </nav>
    );
}