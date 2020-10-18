import React from "react";
import Star from "../../../../assets/images/star.svg";
import { BackdropBackground, BackdropContainer as BackdropPoster, InfoBox, BackdropTitle, StarIcon, Rate, RateValue, MaxRate, Votes, CenteredContainer as BackdropContainer } from "./styled";

export default ({ img, title, rate, votes }) => (
    <BackdropBackground>
        <BackdropPoster src={img}>
        <img src={img} style={{visibility: "hidden"}} />
            <InfoBox>
                <BackdropTitle>{title}</BackdropTitle>
                <Rate>
                    <StarIcon src={Star} />
                    <RateValue>{rate}</RateValue><MaxRate>/10</MaxRate>
                    <Votes>{votes} votes</Votes>
                </Rate>
            </InfoBox>
        </BackdropPoster>
    </BackdropBackground>
);