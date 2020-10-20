import React from "react";
import PosterPlaceholder from "../../../../assets/images/profile.svg";
import { CreditsPoster, CreditsTitle, CreditsSubtitle, Wrapper } from "./styled";

export default ({ poster, title, subtitle }) => {
    return (
        <Wrapper>
            <CreditsPoster
                src={
                    poster
                        ? `https://image.tmdb.org/t/p/w185${poster}`
                        : PosterPlaceholder
                }
            />
            <CreditsTitle>{title}</CreditsTitle>
            <CreditsSubtitle>{subtitle}</CreditsSubtitle>
        </Wrapper>
    );
}