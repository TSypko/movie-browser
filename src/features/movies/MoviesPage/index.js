import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularMovies, selectMovies, selectLoading, selectError } from "../moviesSlice";
import { page as pageParameterName } from "../../../queryParamNames";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile";
import LoadingSpinner from "../../../common/LoadingSpinner";
import Pagination from "../../../common/Pagination";
import { MovieLink } from "./styled";
import ErrorPage from "../../../common/ErrorPage";
import { useQueryParameter } from "../../../useQueryParameters";
import { toMovie } from "../../../routes";

const MoviesPage = () => {

  const dispatch = useDispatch();
  const query = useQueryParameter(pageParameterName);
  const movies = useSelector(selectMovies);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchPopularMovies(query || 1));
  }, [dispatch, query]);

  return (
    <>
      {!movies.results && loading && <LoadingSpinner />}
      {!movies.results && error && <ErrorPage />}
      {movies.results &&
        <>
          <Main>
            <Section
              type="movies"
              grid
              title="Popular Movies"
              body={
                movies.results?.map(movie =>
                  <MovieLink key={movie.id} to={toMovie(movie)}>
                    <Tile
                      key={movie.id}
                      title={movie.title}
                      poster={movie.poster_path}
                      year={movie.release_date}
                      description={movie.overview}
                      genres={movie.genre_ids}
                      rate={movie.vote_average}
                      votes={movie.vote_count}
                    />
                  </MovieLink>
                )
              } />
          </Main>
          <Pagination type="movies" />
        </>
      }
    </>
  );
};

export default MoviesPage;
