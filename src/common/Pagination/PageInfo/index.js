import React from 'react'
import { useSelector } from 'react-redux';
import { selectMovies } from '../../../features/movies/moviesSlice';
import { selectPeople } from '../../../features/people/peopleSlice';
import { PageCaption, Paragraph } from './styled';

const PageInfo = ({ type }) => {

    const movies = useSelector(selectMovies);
    const people = useSelector(selectPeople);

    return (
        <Paragraph>
            <PageCaption>
                Page
            </PageCaption>
            <PageCaption number>
                {type === "movies" && movies.page}
                {type === "people" && people.page}
            </PageCaption>
            <PageCaption>
                of
            </PageCaption>
            <PageCaption number>
                {type === "movies" && movies.total_pages}
                {type === "people" && people.total_pages}
            </PageCaption>
        </Paragraph>
    );
};

export default PageInfo;
