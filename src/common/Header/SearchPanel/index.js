import React from "react";
import { useLocation } from "react-router-dom";
import { toMovies } from "../../../routes";
import { SearchInput } from "./styled";

const SearchPanel = () => {
    const location = useLocation();

    return (
        <SearchInput
            placeholder={`Search for ${location.pathname.includes(toMovies()) ? "movies": "people"}...`}
        />
    )
};

export default SearchPanel;