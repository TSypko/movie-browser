import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPopularMovies,
  selectMovies,
  selectLoading,
  selectError,
  searchMoviesByQuery,
} from "../moviesSlice";
import { page as pageParameterName } from "../../../queryParamNames";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile";
import LoadingSpinner from "../../../common/LoadingSpinner";
import Pagination from "../../../common/Pagination";
import FeatureLink from "../../../common/FeatureLink";
import ErrorPage from "../../../common/ErrorPage";
import { useQueryParameter } from "../../../useQueryParameters";
import { toMovie } from "../../../routes";
import NoResultsPage from "../../../common/NoResultsPage";
import { selectSearchQuery } from "../../search/searchSlice";

const MoviesPage = () => {

  const dispatch = useDispatch();
  const pageQuery = useQueryParameter(pageParameterName);
  const searchQuery = useSelector(selectSearchQuery);
  const movies = useSelector(selectMovies);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (searchQuery) {
      dispatch(searchMoviesByQuery({
        page: pageQuery,
        query: searchQuery
      }))
    } else {
      dispatch(fetchPopularMovies(pageQuery))
    };

  }, [dispatch, pageQuery, searchQuery]);

  return (
    <>
      {!loading && !error && movies.total_results === 0 &&
        <Main>
          <Section
            title={`Sorry, there are no results for "${searchQuery}"`}
            body={<NoResultsPage />}
          />
        </Main>}
      {!movies.results && loading && <LoadingSpinner />}
      {!movies.results && error && <ErrorPage />}
      {movies.results && movies.total_results !== 0 &&
        <>
          <Main>
            <Section
              type="movies"
              grid={!loading}
              title={searchQuery
                ? `Search results for "${searchQuery}"`
                : loading
                  ? ""
                  : "Popular Movies"}
              body={loading
                ? <LoadingSpinner />
                : movies.results?.map(movie =>
                  <FeatureLink key={movie.id} to={toMovie(movie)}>
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
                  </FeatureLink>
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
