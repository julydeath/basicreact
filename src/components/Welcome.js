//this is class component

import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>This is Class Component</h1>
        <p>
          hi i am {this.props.name} , {this.props.work}
        </p>
      </div>
    );
  }
}

export default Welcome;
