import React, { Component } from "react";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "manoj",
    };
    console.log("LifecycleB is constructer");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB is GetDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleB is component didMount");
  }

  render() {
    console.log("LifecycleB is render");
    return <div>LifecycleA</div>;
  }
}

export default LifecycleA;
