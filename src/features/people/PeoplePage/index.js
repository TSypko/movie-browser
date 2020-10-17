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
          type="people"
          grid
          title="Popular People"
          body={
            <>
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
              <PeopleTile />
            </>
          } />
      </Main>
      <Pagination type="movies" />
    </>
  )
};

export default PeoplePage;
