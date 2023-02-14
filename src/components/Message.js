import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "welcome visitor",
    };
  }

  handleClick() {
    this.setState({
      message: "You clicked me",
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.handleClick()}>click</button>
      </div>
    );
  }
}

export default Message;
