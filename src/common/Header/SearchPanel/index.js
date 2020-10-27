import React, { useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { toMovies } from "../../../routes";
import { SearchInput } from "./styled";
import { useQueryParameter } from "../../../useQueryParameters";
import { search as searchParameterName } from "../../../queryParamNames";

const SearchPanel = () => {
    const location = useLocation();
    let query = useQueryParameter(searchParameterName);
    let timeout = 0;
    const history = useHistory();
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.value = query;
    }, [location, query]);

    const onInputChange = ({ target }) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            const path = location.pathname.includes(toMovies()) ? "movies" : "people";
            query = target.value;
            if (query) {
                history.push(`/${path}?${searchParameterName}=${query}`)
            }
            else {
                history.push(`/${path}`)
            };
        }, 300);
    }

    return (
        <SearchInput
            placeholder={`Search for ${location.pathname.includes(toMovies()) ? "movies" : "people"}...`}
            onChange={onInputChange}
            ref={inputRef}
        />
    );
};

export default SearchPanel;