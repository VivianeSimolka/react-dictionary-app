import React from "react";

export default function Example(props) {
  if (props.example !== undefined) {
    return (
      <div className="Example">
        <strong>Example: </strong>
        <em>{props.example}</em>
      </div>
    );
  } else {
    return null;
  }
}
