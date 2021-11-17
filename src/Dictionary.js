import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [apiInput, setApiInput] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function updateWord(event) {
    setWord(event.target.value);
  }
  function handleResponse(response) {
    setApiInput(response.data[0]);
  }

  function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiURL).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to search?</h1>
          <form onSubmit={handleSubmit} autoFocus="on">
            <input
              type="search"
              autoFocus={true}
              className="form-control search-input"
              placeholder="Please type a word"
              autoComplete="off"
              onChange={updateWord}
            />
          </form>
          {/*          <div className="hint">Suggestion: giraffe, pizza, wine...</div> */}
        </section>
        <Result data={apiInput} />
      </div>
    );
  } else {
    load();
  }
}
