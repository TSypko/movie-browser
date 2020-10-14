import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import MoviesPage from "./features/movies/MoviesPage";
import PeoplePage from "./features/people/PeoplePage";
import Header from "./common/Header";
import Pagination from "./common/Pagination";
import { toMovies, toPeople } from "./routes";
import LoadingSpinner from "./common/LoadingSpinner";
import ErrorPage from "./common/ErrorPage";

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path={toMovies()}>
          <MoviesPage />
        </Route>
        <Route path={toPeople()}>
          <PeoplePage />
          {/* LoadingSpinner test component - permision to remove after test */}
          <LoadingSpinner />
        </Route>
        <Route path="/error">
          <ErrorPage />
        </Route>
        <Route>
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
      <Pagination />
    </HashRouter>
  );
}

export default App;
