import React from 'react';
import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import MoviesPage from "./features/movies/MoviesPage";
import PeoplePage from "./features/people/PeoplePage";
import Pagination from './common/Pagination';
import { toMovies, toPeople } from './routes';

function App() {
  return (
    <HashRouter>
      <nav>
        <ul>
          <li><Link to={toMovies()}>Movies</Link></li>
          <li><Link to={toPeople()}>People</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path={toMovies()}>
          <MoviesPage />
        </Route>
        <Route path={toPeople()}>
          <PeoplePage />
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
