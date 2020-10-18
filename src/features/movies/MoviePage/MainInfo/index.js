import React from "react";
import Star from "../../../../assets/images/star.svg";
import { MainInfoBackground, MainInfoContainer as MainInfoPoster, InfoBox, MainInfoTitle, StarIcon, Rate, RateValue, MaxRate, Votes, CenteredContainer as MainInfoContainer } from "./styled";

export default ({ img, title, rate, votes }) => (
    <MainInfoBackground>
        <MainInfoPoster src={img}>
            <InfoBox>
                <MainInfoTitle>{title}</MainInfoTitle>
                <Rate>
                    <StarIcon src={Star} />
                    <RateValue>{rate}</RateValue><MaxRate>/10</MaxRate>
                    <Votes>{votes} votes</Votes>
                </Rate>
            </InfoBox>
        </MainInfoPoster>
    </MainInfoBackground>
);