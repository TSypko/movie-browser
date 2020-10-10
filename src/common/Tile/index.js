import React from "react";
import { StyledTile, Poster } from "./styled";
import PosterImage from "../../assets/images/poster.svg";

const Tile = () => {
  return (
      <StyledTile>
        <Poster src={PosterImage} alt="poster" />
      </StyledTile>
  );
};

export default Tile;
