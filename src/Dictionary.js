import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [apiInput, setApiInput] = useState(null);

  function updateWord(event) {
    setWord(event.target.value);
  }
  function handleResponse(response) {
    setApiInput(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiURL).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={updateWord} />
        <Result data={apiInput} />
      </form>
    </div>
  );
}
