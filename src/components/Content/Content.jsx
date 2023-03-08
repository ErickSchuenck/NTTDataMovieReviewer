import React from "react";
import "../../styles/components/content.sass";
import { moviemock } from "../../mock/moviemock";

export default function Content() {
  return (
    <section id="content">
      <img id="poster" src={moviemock.Poster} alt="poster" />
      <div id="description">
        <h1>{moviemock.Title}</h1>
        <h2>{moviemock.Plot}</h2>
        <h2>{moviemock.Actors}</h2>
        <h1>Metascore: {moviemock.Metascore}</h1>
        <h1>ImdbRating: {moviemock.imdbRating}</h1>
      </div>
    </section>
  );
}
