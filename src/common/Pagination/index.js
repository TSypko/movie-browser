import React from 'react';
import icon from "./Icon.svg";
import { Footer, Button, Icon, Paragraph, PageText, PageCounter } from './styled';

const Pagination = () => {
    return (
        <Footer>
            <Button disabled>
                <Icon
                    prev
                    disabled
                    src={icon}
                    alt="back to first page symbol"
                />
                First
            </Button>
            <Button disabled>
                <Icon
                    prev
                    disabled
                    src={icon}
                    alt="back to previous page symbol"
                />
                Previous
            </Button>
            <Paragraph>
                <PageText>
                    Page
                </PageText>
                <PageCounter>
                    1
                </PageCounter>
                <PageText>
                    of
                </PageText>
                <PageCounter>
                    500
                </PageCounter>
            </Paragraph>
            <Button >
                Next
                <Icon
                    next
                    src={icon}
                    alt="move to next page symbol"
                />
            </Button>
            <Button>
                Last
                <Icon
                    next
                    src={icon}
                    alt="move to last page symbol"
                />
            </Button>
        </Footer>
    )
}

export default Pagination;