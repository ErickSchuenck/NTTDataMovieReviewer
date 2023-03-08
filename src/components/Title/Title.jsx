import React from "react";
import "../../styles/components/title.sass";
import { useState, useEffect } from "react";
import { Button } from "@ui5/webcomponents-react";

export default function Title() {
  const [ActiveMovie, setActiveMovie] = useState("");

  useEffect(() => {
    setActiveMovie(ActiveMovie);
  }, [ActiveMovie]);

  return (
    <div id="title">
      <h1>Title</h1>
      <h2>type below the title of the movie you wish to preview</h2>
      <div id="searchArea">
        <input
          type="text"
          placeholder="movie"
          onChange={(e) => setActiveMovie(e.target.value)}
        />
        <Button onClick={() => console.log(ActiveMovie)}>Search</Button>
        <Button>Refresh</Button>
      </div>
    </div>
  );
}
