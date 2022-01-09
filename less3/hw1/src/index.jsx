import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";
import './index.scss';


const rootElement = document.querySelector("#root");


ReactDOM.render(
  <Greeting firstName='John' lastName='Doe' birthday={new Date(2004, 12, 1)} />,
  rootElement
);