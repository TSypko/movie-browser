import React from "react";
import Star from "../../../../assets/images/star.svg";
import { BackdropBackground, BackdropContainer, HiddenImage, InfoBox, BackdropTitle, StarIcon, Rate, RateValue, MaxRate, Votes } from "./styled";

export default ({ movie }) => (
    <BackdropBackground>
        <BackdropContainer src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}>
            {/* hack to give div the height of backdrop image */}
            <HiddenImage src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />

            <InfoBox>
                <BackdropTitle>{movie.title}</BackdropTitle>
                <Rate>
                    <StarIcon src={Star} />
                    <RateValue>{movie.vote_average}</RateValue><MaxRate>/10</MaxRate>
                    <Votes>{movie.vote_count} votes</Votes>
                </Rate>
            </InfoBox>
        </BackdropContainer>
    </BackdropBackground>
);