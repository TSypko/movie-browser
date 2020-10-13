import React from "react";
import { toPeople, toMovies } from "../../../routes";
import { List, StyledNavLink } from "./styled";

export default () => {
    return (
        <nav>
            <List>
                <StyledNavLink to={toMovies()}>Movies</StyledNavLink>
                <StyledNavLink to={toPeople()}>People</StyledNavLink>
            </List>
        </nav>
    );
}