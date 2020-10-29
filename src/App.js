import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import MoviesPage from "./features/movies/MoviesPage";
import PeoplePage from "./features/people/PeoplePage";
import Header from "./common/Header";
import { toMovies, toMovie, toPeople, toPerson } from "./routes";
import MoviePage from "./features/movies/MoviePage";
import ProfilePage from "./features/people/ProfilePage/";

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path={toMovie()}>
          <MoviePage />
        </Route>
        <Route path={toMovies()}>
          <MoviesPage />
        </Route>
        <Route path={toPerson()}>
          <ProfilePage />
        </Route>
        <Route path={toPeople()}>
          <PeoplePage />
        </Route>
        <Route>
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
