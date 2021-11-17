import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";
import Pictures from "./Pictures";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [apiInput, setApiInput] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [images, setImages] = useState(false);

  function updateWord(event) {
    setWord(event.target.value);
  }
  function handleDictionaryResponse(response) {
    setApiInput(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setImages(response.data.photos);
  }

  function search() {
    let dictionaryApiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    const apiKey = "563492ad6f91700001000001e4768d3edeb94b55b520547bb0c37b0c";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    let headers = { Authorization: `Bearer ${apiKey}` };
    axios.get(dictionaryApiURL).then(handleDictionaryResponse);
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
          {/*           <div className="hint">
            Suggestions: pyjamas, roller derby, sloth...
          </div> */}
          <form onSubmit={handleSubmit} autoFocus="on">
            <input
              type="search"
              autoFocus={true}
              className="form-control search-input"
              defaultValue={props.defaultWord}
              placeholder="Please type a word"
              autoComplete="off"
              onChange={updateWord}
            />
          </form>
        </section>
        <Result data={apiInput} />
        <Pictures pictures={images} />
      </div>
    );
  } else {
    load();
  }
}
