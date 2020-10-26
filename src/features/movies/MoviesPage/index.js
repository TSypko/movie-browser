import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularMovies, selectMovies, selectLoading, selectError } from "../moviesSlice";
import { page as pageParameterName } from "../../../queryParamNames";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile";
import LoadingSpinner from "../../../common/LoadingSpinner";
import Pagination from "../../../common/Pagination";
import FeatureLink from "../../../common/FeatureLink";
import ErrorPage from "../../../common/ErrorPage";
import { useQueryParameter } from "../../../useQueryParameters";
import { search as searchParameterName } from "../../../queryParamNames";
import { toMovie } from "../../../routes";

const MoviesPage = () => {

  const dispatch = useDispatch();
  const page = useQueryParameter(pageParameterName);
  const query = useQueryParameter(searchParameterName);
  const movies = useSelector(selectMovies);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchPopularMovies({ page: page || 1, query }));
  }, [dispatch, page, query]);

  return (
    <>
      {!movies.results && !query && loading && <LoadingSpinner />}
      {!movies.results && error && <ErrorPage />}
      {(movies.results || query) &&
        <>
          <Main>
            <Section
              type="movies"
              grid={movies.results}
              title={query ? `Search results for "${query}" ${movies.results ? `(${movies.results.length})` : ""}` : "Popular Movies"}
              body={
                loading
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
          {!loading && <Pagination type="movies" />}
        </>
      }
    </>
  );
};

export default MoviesPage;
