import React from "react";
import { useSelector } from "react-redux";
import GenreTile from "../GenreTile";
import { StyledSection } from "./styled";
import { selectGenres } from "../../../features/movies/moviesSlice"

const GenreSection = ({ horizontal, genres }) => {

  const genresList = useSelector(selectGenres);

  return (
    <StyledSection horizontal={horizontal}>
      {genres && genres?.map((genre) =>
        <GenreTile
          key={genre.name ? genre.name : genre}
          horizontal={horizontal}
          genre={
            genre.name 
            ? genre.name
            : genresList && genresList.genres && genresList.genres[(genresList.genres?.findIndex(({ id }) => id === genre))].name
          } />
      )}
    </StyledSection>
  );
};

export default GenreSection;
