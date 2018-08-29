import React, { Component } from "react";
import robbers from "../assets/TwoRobbersBlocker.png";
import styled from "styled-components";

class Blocker extends Component {
  render() {
    return (
      <Block className="Blocker">
        <Anchored href="https://www.instagram.com/two_robbers/">
          <Robbers src={robbers} />
        </Anchored>
      </Block>
    );
  }
}

const Block = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: #f4f3e9;
  overflow: hidden;
`;

const Robbers = styled.img`
  width: 35%;
  @media (max-width: 450px) {
    {
      width: 75%;
        transform: scale(1.5) ;
    }
`;

const Anchored = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  &hover {
    cursor: pointer;
  }
`;

export default Blocker;
