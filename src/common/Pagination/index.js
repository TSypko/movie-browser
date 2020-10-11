import React from 'react';
import { Button } from './styled';


const Pagination = () => {
    return (
        <footer>
            <Button disabled>
                First
            </Button>
            <Button disabled>
                Previous
            </Button>
            {/* <Paragraph>
                Page 1 of 500
            </Paragraph> */}
            <Button>
                Next
            </Button>
            <Button>
                Last
            </Button>
        </footer>
    )
}

export default Pagination;
