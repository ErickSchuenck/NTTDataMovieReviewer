import React from "react";
import "../../styles/components/content.sass";
import { moviemock } from "../../mock/moviemock";
const url =
  "https://ae01.alicdn.com/kf/Ha3e0e09ba963479b8666b3f4462c4ab6z/Premiado-filme-whiplash-matte-kraft-cartaz-de-papel-escrit-rio-presente-sala-de-jantar-decora-o.jpg";

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
