import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <h4>{props.meaning.definitions[0].definition}</h4>
    </div>
  );
}
