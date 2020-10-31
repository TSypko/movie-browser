import React from "react";
import { Icon, Button, ButtonWrapper } from "./styled"
import arrowIcon from "../../assets/images/arrowIcon.svg"

const BackToTopButton = () => {

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <ButtonWrapper>
            <Button onClick={backToTop}>
                <Icon src={arrowIcon} alt={"back to top icon"} />
                <Icon src={arrowIcon} alt={"back to top icon"} />
            </Button>
        </ButtonWrapper>
    );
};

export default BackToTopButton;
