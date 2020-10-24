import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPopularMovies,
  selectMovies,
  selectLoading,
  selectError,
  searchMoviesByQuery,
  selectMoviesSearchQuery,
  resetMoviesSearchQuery,
  getMoviesSearchQuery
} from "../moviesSlice";
import { page as pageParameterName } from "../../../queryParamNames";
import { search as searchParameterName } from "../../../queryParamNames";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile";
import LoadingSpinner from "../../../common/LoadingSpinner";
import Pagination from "../../../common/Pagination";
import { MovieLink } from "./styled";
import ErrorPage from "../../../common/ErrorPage";
import { useQueryParameter } from "../../../useQueryParameters";
import { toMovie } from "../../../routes";
import NoResultsPage from "../../../common/NoResultsPage";

const MoviesPage = () => {

  const dispatch = useDispatch();
  const pageQuery = useQueryParameter(pageParameterName);
  const searchQuery = useQueryParameter(searchParameterName);
  const movies = useSelector(selectMovies);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const moviesSearchQuery = useSelector(selectMoviesSearchQuery);

  useEffect(() => {
    if (searchQuery !== "" && searchQuery !== null) {
      dispatch(getMoviesSearchQuery(searchQuery));
      dispatch(searchMoviesByQuery({
        page: pageQuery,
        query: searchQuery
      }))
    } else {
      dispatch(fetchPopularMovies(pageQuery))
    };
    return () => {
      dispatch(resetMoviesSearchQuery())
    }
  }, [dispatch, pageQuery, searchQuery]);

  return (
    <>
      {!movies.results && loading && <LoadingSpinner />}
      {!movies.results && error && <ErrorPage />}
      {!loading && !error && movies.total_results === 0 &&
        <Main>
          <Section
            title={`Sorry, there are no results for "${moviesSearchQuery}"`}
            body={<NoResultsPage />}
          />
        </Main>}
      {movies.results && movies.total_results !== 0 &&
        <>
          <Main>
            <Section
              type="movies"
              grid={!loading}
              title={moviesSearchQuery
                ? `Search results for "${moviesSearchQuery}"`
                : loading
                  ? ""
                  : "Popular Movies"}
              body={
                loading ? <LoadingSpinner /> :
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
          {loading ? null : <Pagination type="movies" />}
        </>
      }
    </>
  );
};

export default MoviesPage;
