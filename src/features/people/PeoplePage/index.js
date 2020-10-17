import React from 'react';
import PeopleTile from "../../../common/PeopleTile";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import Pagination from "../../../common/Pagination";

const PeoplePage = () => {
  return (
    <>
      <Main>
        <Section
          grid
          title="Popular People"
          body={
            <PeopleTile />
          } />
      </Main>
      <Pagination type="movies" />
    </>
  )
};

export default PeoplePage;
