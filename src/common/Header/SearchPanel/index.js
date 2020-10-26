import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { toMovies } from "../../../routes";
import { SearchInput } from "./styled";
import { useQueryParameter } from "../../../useQueryParameters";

const SearchPanel = () => {
    const location = useLocation();
    let query = useQueryParameter("search");
    let timeout = 0;
    const history = useHistory();

    const onInputChange = ({ target }) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            const path = location.pathname.includes(toMovies()) ? "movies" : "people";
            query = target.value;
            history.push(`/${path}?search=${query}`);
        }, 300)
    }

    return (
        <SearchInput
            placeholder={`Search for ${location.pathname.includes(toMovies()) ? "movies" : "people"}...`}
            onChange={onInputChange}
        />
    )
};

export default SearchPanel;