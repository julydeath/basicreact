import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleclick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        This is Counter {this.state.count}
        <button onClick={() => this.handleclick()}>increment</button>
      </div>
    );
  }
}

export default Counter;
