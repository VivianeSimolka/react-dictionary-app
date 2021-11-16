import React from "react";
import "./Result.css";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.data) {
    // let definition = props.data.meanings[0].definitions[0].definition;
    return (
      <div className="Result">
        <h2>{props.data.word}</h2>
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
