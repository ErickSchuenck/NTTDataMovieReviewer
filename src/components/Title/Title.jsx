import React from "react";
import "../../styles/components/title.sass";
import { useState, useEffect } from "react";
import { Button } from "@ui5/webcomponents-react";
import { useDispatch } from "react-redux";
import { changeMovie } from "../../store/movie";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Title() {
  async function getMovie(ActiveMovie) {
    console.log(ActiveMovie);
    const URL = "http://localhost:5000/movie";
    const data = { movie: ActiveMovie };

    axios
      .post(URL, data)
      .then((response) => {
        console.log(response);
        if (response.data.Response === "False") toast("Ops, movie not found!");
        //mexe na store
      })
      .catch((e) => console.log(e));
  }

  const dispatch = useDispatch();

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
        <Button onClick={() => getMovie(ActiveMovie)}>Search</Button>
        {/* //APAGAR BOTÃO ABAIXO */}
        <Button
          onClick={() => {
            dispatch(
              changeMovie({
                Title: "22222222222",
              })
            );
          }}
        >
          TESTING
        </Button>
        {/* //APAGAR BOTÃO ACIMA */}
      </div>
    </div>
  );
}
