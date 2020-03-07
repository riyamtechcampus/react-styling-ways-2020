import React, { Component } from "react";

import One from "./components/One/One";
import Two from "./components/Two/Two";
import Three from "./components/Three/Three";
import Four from "./components/Four/Four";
class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <One />
        <Two />
        <Three />
        <Four />
      </div>
    );
  }
}

export default App;
