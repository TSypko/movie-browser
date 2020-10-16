import React from 'react'
import { useSelector } from 'react-redux';
import { selectMovies } from '../../../features/movies/moviesSlice';
import { PageCaption, Paragraph } from './styled';

const PageInfo = ({ type }) => {

    const movies = useSelector(selectMovies);

    return (
        <Paragraph>
            <PageCaption>
                Page
            </PageCaption>
            <PageCaption number>
                {type === "movies" && movies.page}
                {/* {type === "people" && people?.page} */}
            </PageCaption>
            <PageCaption>
                of
            </PageCaption>
            <PageCaption number>
                {type === "movies" && movies.total_pages}
                {/* {type === "people" && people?.total_pages} */}
            </PageCaption>
        </Paragraph>
    )
};

export default PageInfo;
