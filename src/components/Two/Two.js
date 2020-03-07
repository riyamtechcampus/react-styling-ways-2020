import React, { Component } from "react";

const Title = {
  color: "#fff",
  backgroundColor: "pink",
  fontSize: "2rem"
};

class Two extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 style={Title}>Inline styling </h1>
        <p style={{ color: "red", backgroundColor: "yellow" }}>
          inline style 2
        </p>
      </div>
    );
  }
}

export default Two;
