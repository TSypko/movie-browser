import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularMovies, selectMovies, selectLoading, selectError } from "../moviesSlice";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile";
import Poster from "../../../assets/images/poster.svg";
import LoadingSpinner from "../../../common/LoadingSpinner";
import Pagination from "../../../common/Pagination";

const MoviesPage = () => {

  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [])

  return (
    <>
      {loading &&
        <LoadingSpinner />
      }
      {error &&
        <div>ERROR!</div>
      }
      {movies.results &&
        <>
          <Main>
            <Section
              grid
              title="Popular Movies"
              body={
                movies.results?.map(movie =>
                  <Tile
                    key={movie.id}
                    title={movie.title}
                    poster={movie.poster_path || Poster}
                    year={movie.release_date}
                    description={movie.overview}
                    production={movie.production}
                    release={movie.release_date}
                    genres={movie.genres}
                    rate={movie.vote_average}
                    votes={movie.vote_count}
                  />
                )
              } />
          </Main>
          <Pagination />
        </>
      }
    </>
  );
};

export default MoviesPage;
