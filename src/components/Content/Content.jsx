import React from "react";
import "../../styles/components/content.sass";
import { useSelector } from "react-redux";

export default function Content() {
  const movie = useSelector((state) => state.movie.value);
  console.log("AQUI   ", movie);
  return (
    <section id="content">
      <img id="poster" src={movie.Poster} alt="poster" />
      <div id="description">
        <h1>{movie.Title}</h1>
        <h2>{movie.Plot}</h2>
        <h2>{movie.Actors}</h2>
        <h1>Metascore: {movie.Metascore}</h1>
        <h1>ImdbRating: {movie.imdbRating}</h1>
      </div>
    </section>
  );
}
