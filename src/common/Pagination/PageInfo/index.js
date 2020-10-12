import React from 'react'
import { PageCaption, Paragraph } from './styled';

const PageInfo = () => {
    return (
        <Paragraph>
            <PageCaption>
                Page
            </PageCaption>
            <PageCaption number>
                1
            </PageCaption>
            <PageCaption>
                of
            </PageCaption>
            <PageCaption number>
                500
            </PageCaption>
        </Paragraph>
    )
};

export default PageInfo;
