import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { page as pageParameterName } from "../../../queryParamNames";
import PeopleTile from "../../../common/PeopleTile";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Pagination from "../../../common/Pagination";
import LoadingSpinner from "../../../common/LoadingSpinner";
import ErrorPage from "../../../common/ErrorPage";
import FeatureLink from "../../../common/FeatureLink";
import { fetchPeople, selectPeople, selectPeopleLoadingState, selectPeopleErrorState, resetPeople } from "../peopleSlice";
import { useQueryParameter } from "../../../useQueryParameters";
import { search as searchParameterName } from "../../../queryParamNames";
import { toPerson } from "../../../routes";
import NoResultsPage from "../../../common/NoResultsPage";

const PeoplePage = () => {

  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const loading = useSelector(selectPeopleLoadingState);
  const error = useSelector(selectPeopleErrorState);
  const page = useQueryParameter(pageParameterName);
  const query = useQueryParameter(searchParameterName);

  useEffect(() => {
    dispatch(fetchPeople({ page: page || 1, query }));
    return (() => dispatch(resetPeople()))
  }, [dispatch, page, query])

  return (
    <Main>
      {!loading && !error && people && people.total_results === 0 &&
        <Main>
          <Section
            title={`Sorry, there are no results for "${query}"`}
            body={<NoResultsPage />}
          />
        </Main>}
      {(!people.results && !query && loading) && <LoadingSpinner />}
      {(!people.results && error) && <ErrorPage />}
      {people.total_results !== 0 && (people.results || query) &&
        <>
          <Section
            type="people"
            grid={people.results}
            title={query ? `Search results for "${query}" ${people.results ? `(${people.total_results})` : ""}` : "Popular People"}
            body={
              !people.results
                ? <LoadingSpinner />
                : people.results.map(person => (
                  <FeatureLink key={person.id} to={toPerson(person)}>
                    <PeopleTile
                      name={person.name}
                      birthCity={person.place_of_birth}
                      birthDate={person.birthday}
                      poster={person.profile_path}
                      description={person.biography}
                    />
                  </FeatureLink>
                ))
            }
          />
          {!loading && <Pagination type="people" />}
        </>
      }
    </Main>
  )
};

export default PeoplePage;
