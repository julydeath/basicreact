import React, { Component } from "react";

import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "manoj",
    };
    console.log("LifecycleA is constructer");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA is GetDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA is component didMount");
  }

  render() {
    console.log("LifecycleA is render");
    return (
      <div>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
