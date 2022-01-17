import React from "react";
import ReactDOM from "react-dom";
import './index.scss';
import NumberList from './NumberList'


const rootElement = document.querySelector("#root");

const numbers = [1, 2, 3, 4, 5];

const numbersElems = numbers.map((number) => <li>{number}</li>);
const element = <ul>{numbersElems}</ul>;

ReactDOM.render(<NumbersList numbers={numbers} />, rootElement);