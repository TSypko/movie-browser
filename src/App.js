import React from "react";
import Tile from "./common/Tile";
import Poster from "./assets/images/poster.svg";

function App() {
  const movieDetails = {
    title: "Mulan",
    poster: Poster,
    year: 2020,
    genres: ["action", "drama", "adventure"],
    description:
      "A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior in order to save her father.",
    production: "China, USA",
    release: "24.10.2020",
    rate: 7.8,
    votes: 35,
  };

  return (
    <>
      <div>Strona główna...</div>
      <Tile
        horizontal
        title={movieDetails.title}
        poster={movieDetails.poster}
        year={movieDetails.year}
        description={movieDetails.description}
        production={movieDetails.production}
        release={movieDetails.release}
        genres={movieDetails.genres}
      />
    </>
  );
}

export default App;
