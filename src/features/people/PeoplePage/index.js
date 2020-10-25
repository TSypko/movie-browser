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
import {
  fetchPopularPeople,
  selectPopularPeople,
  selectPopularPeopleLoadingState,
  selectPopularPeopleErrorState,
  searchPopularPeopleByQuery
} from "../popularPeopleSlice";
import { useQueryParameter } from "../../../useQueryParameters";
import { toPerson } from "../../../routes";
import NoResultsPage from "../../../common/NoResultsPage";
import { selectSearchQuery } from "../../search/searchSlice";

const PeoplePage = () => {

  const dispatch = useDispatch();
  const popularPeople = useSelector(selectPopularPeople);
  const popularPeopleLoading = useSelector(selectPopularPeopleLoadingState);
  const popularPeopleError = useSelector(selectPopularPeopleErrorState);
  const pageQuery = useQueryParameter(pageParameterName);
  const searchQuery = useSelector(selectSearchQuery);

  useEffect(() => {
    if (searchQuery) {
      dispatch(searchPopularPeopleByQuery({
        page: pageQuery,
        query: searchQuery
      }))
    } else {
      dispatch(fetchPopularPeople(pageQuery))
    };
  }, [dispatch, pageQuery, searchQuery]);
  
  return (
    <>
      {!popularPeopleLoading && !popularPeopleError && popularPeople.total_results === 0 &&
        <Main>
          <Section
            title={`Sorry, there are no results for "${searchQuery}"`}
            body={<NoResultsPage />}
          />
        </Main>}
      {(!popularPeople.results && popularPeopleLoading) && <LoadingSpinner />}
      {(!popularPeople.results && popularPeopleError) && <ErrorPage />}
      {popularPeople.results &&
        <>
          <Main>
            <Section
              type="people"
              grid={!popularPeopleLoading}
              title={searchQuery
                ? `Search results for "${searchQuery}"`
                : popularPeopleLoading
                  ? ""
                  : "Popular People"}
              body={popularPeopleLoading
                ? <LoadingSpinner />
                : popularPeople.results?.map(popularPerson => (
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
              } />
          </Main>
          {popularPeopleLoading ? null : <Pagination type="people" />}
        </>
      }
    </>

  );
};

export default PeoplePage;
