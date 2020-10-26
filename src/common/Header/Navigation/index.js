import React from "react";
import { useDispatch } from "react-redux";
import { toPeople, toMovies } from "../../../routes";
import { List, StyledNavLink } from "./styled";
import { resetSearchQuery } from "../../../features/search/searchSlice";

export default () => {

    const dispatch = useDispatch();

    const onClickResetQuery = () => {
        dispatch(resetSearchQuery())
    };

    return (
        <nav>
            <List>
                <StyledNavLink to={toMovies()} onClick={onClickResetQuery}>Movies</StyledNavLink>
                <StyledNavLink to={toPeople()} onClick={onClickResetQuery}>People</StyledNavLink>
            </List>
        </nav>
    );
};