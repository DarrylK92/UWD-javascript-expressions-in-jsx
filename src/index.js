import React from "react";
import ReactDOM from "react-dom";

const fName = "Darryl";
const lname = "Karney";
const luckyNumber = 4;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lname}!
    </h1>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
