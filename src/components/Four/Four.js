import React, { Component } from "react";
import styled from "styled-components";
import { descPar } from "./style.js";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  color: #fff;
  background: #000;
  text-align: center;
`;

class Four extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container>
          <h4>Library Compoments</h4>
          <descPar>hello there </descPar>
        </Container>
      </div>
    );
  }
}

export default Four;
