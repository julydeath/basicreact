import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>This is counter:{this.state.count}</h1>
        <button onClick={() => this.handleClick()}>Click me</button>
      </div>
    );
  }
}

export default Counter;
