import React from "react";
import { FilterBar } from "@ui5/webcomponents-react";
import "../../styles/components/title.sass";

export default function Title() {
  return (
    <div id="title">
      <h1>Title</h1>
      <h2>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </h2>
      <div id="searchArea">
        <h2>Searchbar</h2>
        <h2>Searchbutton</h2>
        <h2>Resetbutton</h2>
      </div>
    </div>
  );
}
