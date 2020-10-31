import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GenreTile from "../GenreTile";
import { StyledSection } from "./styled";
import { fetchGenres, selectGenres } from "../../../features/genres/genresSlice";
import { useEffect } from "react";

const GenreSection = ({ horizontal, genres }) => {
  const dispatch = useDispatch();
  const genresList = useSelector(selectGenres);

  useEffect(() => {
    !genresList.genres && dispatch(fetchGenres());
  }, [dispatch, genresList]);

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
