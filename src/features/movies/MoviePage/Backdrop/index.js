import React from "react";
import Star from "../../../../assets/images/star.svg";
import { BackdropBackground, BackdropContainer as BackdropPoster, InfoBox, BackdropTitle, StarIcon, Rate, RateValue, MaxRate, Votes, CenteredContainer as BackdropContainer } from "./styled";

export default ({ movie }) => (
    <BackdropBackground>
        <BackdropPoster src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}>
            {/* hack to give div the height of backdrop image */}
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} style={{ visibility: "hidden" }} />
            
            <InfoBox>
                <BackdropTitle>{movie.title}</BackdropTitle>
                <Rate>
                    <StarIcon src={Star} />
                    <RateValue>{movie.vote_average}</RateValue><MaxRate>/10</MaxRate>
                    <Votes>{movie.vote_count} votes</Votes>
                </Rate>
            </InfoBox>
        </BackdropPoster>
    </BackdropBackground>
);