import React from "react";
import "./Result.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Result(props) {
  if (props.data) {
    return (
      <div className="Result">
        <h2>{props.data.word}</h2>
        <a
          href={props.data.phonetics[0].audio}
          target="_blank"
          rel="noreferrer"
        >
          Listen
        </a>
        <br />
        {props.data.phonetics[0].text}
        <br />
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
