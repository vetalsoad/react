import React, { Component } from "react";

const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <p>Вода закипит.</p>
  }
  return <p>Вода не закипит.</p>;
};

export default BoilingVerdict;

