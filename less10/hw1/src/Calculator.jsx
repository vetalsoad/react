import React, { Component } from "react";



class Calculator extends Component {
  render(){
    return (
      <fieldset>
        <legend>Введите температуру в градусах Цельсия:</legend>
        <input 
          value={temperature}
          onChange={this.handleChange}
        />
        <BoilingVerdict celsius={temperature} />
      </fieldset>
    )
  }
}

export default Calculator;