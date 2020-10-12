import React from 'react';
import arrowIcon from "../../assets/images/arrowIcon.svg";
import { Footer, Button, ButtonText, Icon, Paragraph, PageText, PageCounter } from './styled';

const Pagination = () => {
    return (
        <Footer>
            <Button disabled>
                <Icon
                    prev
                    disabled
                    src={arrowIcon}
                    alt="back to first page symbol"
                />
                <Icon
                    prev
                    mobile
                    disabled
                    src={arrowIcon}
                    alt="back to first page symbol"
                />
                <ButtonText mobile>
                    First
                </ButtonText>
            </Button>
            <Button disabled>
                <Icon
                    prev
                    disabled
                    src={arrowIcon}
                    alt="back to previous page symbol"
                />
                <ButtonText mobile>
                    Previous
                </ButtonText>
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
                <ButtonText mobile>
                    Next
                </ButtonText>
                <Icon
                    next
                    src={arrowIcon}
                    alt="move to next page symbol"
                />
            </Button>
            <Button>
                <ButtonText mobile>
                    Last
                </ButtonText>
                <Icon
                    next
                    src={arrowIcon}
                    alt="move to last page symbol"
                />
                <Icon
                    next
                    mobile
                    src={arrowIcon}
                    alt="move to last page symbol"
                />
            </Button>
        </Footer>
    )
}

export default Pagination;