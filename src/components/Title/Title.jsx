import React, { useState, useEffect } from "react";
import "../../styles/components/title.sass";
import { Button } from "@ui5/webcomponents-react";
import { useDispatch } from "react-redux";
import { changeMovie } from "../../store/movie";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Title() {
  const dispatch = useDispatch();

  const [ActiveMovie, setActiveMovie] = useState("");
  useEffect(() => {
    setActiveMovie(ActiveMovie);
  }, [ActiveMovie]);

  async function getMovie(ActiveMovie) {
    const URL = "http://localhost:5000/movie";
    const data = { movie: ActiveMovie };

    try {
      const response = await axios.post(URL, data);
      console.log(response);

      if (response.data.Response === "False") {
        toast("Ops, movie not found!");
        return;
      }

      dispatch(changeMovie(response.data));
    } catch (error) {
      console.log(error);
    }
  }

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
      </div>
    </div>
  );
}
