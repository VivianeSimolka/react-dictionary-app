import React from "react";

export default function Example(props) {
  if (props.example !== undefined) {
    return (
      <div className="Example">
        <em>"{props.example}"</em>
      </div>
    );
  } else {
    return null;
  }
}
