import React from "react";
import { useSelector } from "react-redux";
import GenreTile from "../GenreTile";
import { StyledSection } from "./styled";
import { selectGenresFromMovies } from "../../../features/movies/moviesSlice"
import { selectGenresFromPeople } from "../../../features/people/peopleSlice";
import {useLocation} from "react-router-dom";
import { toMovies } from "../../../routes";

const GenreSection = ({ horizontal, genres }) => {
  const location = useLocation();
  const genresListFromMovies = useSelector(selectGenresFromMovies);
  const genresListFromPeople = useSelector(selectGenresFromPeople);
  let genresList;
  genresList = location.pathname.includes(toMovies()) ? genresListFromMovies : genresListFromPeople;

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
