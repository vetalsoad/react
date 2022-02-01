import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

// REACT APPROACH
// 0. make a layout
// 1. split on components
// 2. static version in react
// 3. declare state and props
// 4. write logic

const rootElement = document.querySelector("#root");

ReactDOM.render(<App />, rootElement);
