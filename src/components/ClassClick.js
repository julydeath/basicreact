import React, { Component } from "react";

class ClassClicked extends Component {
  handleClicked() {
    console.log("you clicked");
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClicked()}>Click me</button>
      </div>
    );
  }
}

export default ClassClicked;
