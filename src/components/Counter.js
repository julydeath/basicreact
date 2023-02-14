import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  handleclick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <>
        this is counter : {this.state.counter}
        <button onClick={() => this.handleclick()}>click me</button>
      </>
    );
  }
}

export default Counter;
