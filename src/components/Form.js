import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
        </div>
        <div>
          <label>Comment</label>
          <textarea
            value={this.state.comments}
            onChange={(e) => this.setState({ comments: e.target.value })}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select
            value={this.state.topic}
            onChange={(e) => this.setState({ topic: e.target.value })}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">vue</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
