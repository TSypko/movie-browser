import React from "react";
import { useSelector } from "react-redux";
import GenreTile from "../GenreTile";
import { StyledSection } from "./styled";
import { selectGenres } from "../../../features/movies/moviesSlice"

const GenreSection = ({ horizontal, genres }) => {

  const genresList = useSelector(selectGenres);

  return (
    <StyledSection horizontal={horizontal}>
      {genres?.map((genre) =>
        <GenreTile
          key={genre.id}
          horizontal={horizontal}
          genre={
            genre.name 
            ? genre.name
            : genresList.genres[(genresList.genres?.findIndex(({ id }) => id === genre))].name
          } />
      )}
    </StyledSection>
  );
};

export default GenreSection;
