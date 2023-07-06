import React, { Component } from "react";
import styled from "styled-components";

export default class Counter extends Component {
  state = {
    myCount: this.props.initial,
  };
  componentDidMount() {
    this.props.getTotal(this.state.myCount);
  }

  increment = () => {
    this.setState((prevState) => ({
        myCount: this.props.initial
        ? prevState.myCount + this.props.initial
        : prevState.myCount + 1,
    }));
    this.props.getTotal(this.props.initial || 1);
  };

  decrement = () => {
    this.setState((prevState) => ({
        myCount: this.props.initial
        ? prevState.myCount - this.props.initial
        : prevState.myCount - 1,
    }));
    this.props.getTotal(-this.props.initCount || -1);
  };

  render() {
    const Container = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 190px;
      font-weight: 700;
    `;

    return (
      <Container>
        <button onClick={this.increment}>+</button>
        <p>{this.state.myCount}</p>
        <button onClick={this.decrement}>-</button>
      </Container>
    );
  }
}
