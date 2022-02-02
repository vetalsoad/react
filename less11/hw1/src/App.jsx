import React, { Component } from "react";
import Expand from "./Expand";

class App extends Component { 
  render() {
    return (
      <div className='app'>
        <Expand title='Title here'>
          <p>what is</p>
        </Expand>
      </div>
    );
  }
}

export default App;
