import React from 'react'
import { useSelector } from 'react-redux';
import { selectMovies } from '../../../features/movies/moviesSlice';
import { selectPopularPeople } from '../../../features/people/popularPeopleSlice';
import { PageCaption, Paragraph } from './styled';

const PageInfo = ({ type }) => {

    const movies = useSelector(selectMovies);
    const people = useSelector(selectPopularPeople);

    return (

        <Paragraph>
            { movies && type === "movies" &&
                <>
                    <PageCaption>
                        Page
                    </PageCaption>
                    <PageCaption number>
                        {movies.page}
                    </PageCaption>
                    <PageCaption>
                        of
                    </PageCaption>
                    <PageCaption number>
                        {movies.total_pages}
                    </PageCaption>
                </>
            }
            { people && type === "people" &&
                <>
                    <PageCaption>
                        Page
                    </PageCaption>
                    <PageCaption number>
                        {people.page}
                    </PageCaption>
                    <PageCaption>
                        of
                    </PageCaption>
                    <PageCaption number>
                        {people.total_pages}
                    </PageCaption>
                </>
            }
        </Paragraph>

    )
};

export default PageInfo;
