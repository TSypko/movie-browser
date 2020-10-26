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
import { fetchPopularPeople, selectPopularPeople, selectPopularPeopleLoadingState, selectPopularPeopleErrorState, resetPopularPeople } from "../popularPeopleSlice";
import { useQueryParameter } from "../../../useQueryParameters";
import { toPerson } from "../../../routes";

const PeoplePage = () => {

  const dispatch = useDispatch();
  const people = useSelector(selectPopularPeople).results;
  const popularPeopleLoading = useSelector(selectPopularPeopleLoadingState);
  const popularPeopleError = useSelector(selectPopularPeopleErrorState);
  const page = useQueryParameter(pageParameterName);
  const query = useQueryParameter("search");

  useEffect(() => {
    dispatch(fetchPopularPeople({ page: page || 1, query }));
    return (() => {
      dispatch(resetPopularPeople())
    })
  }, [dispatch, page, query])

  return (
    <Main>
      {(!people && !query && popularPeopleLoading) && <LoadingSpinner />}
      {(!people && popularPeopleError) && <ErrorPage />}
      {(people || query) &&
        <>
          <Section
            type="people"
            grid={people}
            title={query ? `Search results for "${query}" ${people ? `(${people.length})` : ""}` : "Popular People"}
            body={
              !people
                ? <LoadingSpinner />
                : people.map(popularPerson => (
                  <FeatureLink key={popularPerson.id} to={toPerson(popularPerson)}>
                    <PeopleTile
                      name={popularPerson.name}
                      birthCity={popularPerson.place_of_birth}
                      birthDate={popularPerson.birthday}
                      poster={popularPerson.profile_path}
                      description={popularPerson.biography}
                    />
                  </FeatureLink>
                ))
            }
          />
          {!popularPeopleLoading && <Pagination type="people" />}
        </>
      }
    </Main>
  )
};

export default PeoplePage;
