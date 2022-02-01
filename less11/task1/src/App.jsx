import React, { Component } from "react";
import Numbers from "./Numbers";



class App extends Component {
  state = {
    number: 0,
  }
  render(){
    return(
      <div className="app">
        <Numbers title="All numbers" number={this.state.number}/>
      </div>
    )
  }
}

export default App;