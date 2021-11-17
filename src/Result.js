import React from "react";
import "./Result.css";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.data) {
    return (
      <div className="Result">
        <section className="word">
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
        </section>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
