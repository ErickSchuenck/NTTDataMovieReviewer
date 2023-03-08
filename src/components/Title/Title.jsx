import React from "react";
import "../../styles/components/title.sass";
import { useState, useEffect } from "react";
import { Button } from "@ui5/webcomponents-react";
import { useDispatch } from "react-redux";
import { changeMovie } from "../../store/movie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Title() {
  async function getMovie(movie) {
    try {
      axios.get("http://localhost:5000/movie", movie).then((response) => {
        console.log(response);
        if (!response.Response) toast("Ops, movie not found!");
        //mexe na store
      });
    } catch (e) {
      console.log(e.response);
    }
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
        <Button
          onClick={() => {
            dispatch(
              changeMovie({
                Title: "22222222222",
              })
            );
          }}
        >
          Search
        </Button>
        <Button onClick={() => getMovie(ActiveMovie)}>Refresh</Button>
      </div>
    </div>
  );
}
