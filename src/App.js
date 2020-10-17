import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import MoviesPage from "./features/movies/MoviesPage";
import PeoplePage from "./features/people/PeoplePage";
import Header from "./common/Header";
import { toMovies, toMoviesPage, toPeoplePage } from "./routes";

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path={toMoviesPage()}>
          <MoviesPage />
        </Route>
        <Route path={toPeoplePage()}>
          <PeoplePage />
        </Route>
        <Route>
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
