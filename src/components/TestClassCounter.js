import React, { Component } from "react";

export default class TestClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>The number: {this.state.count}</h1>
        <button onClick={this.increment}>Add 1</button>
      </div>
    );
  }
}
