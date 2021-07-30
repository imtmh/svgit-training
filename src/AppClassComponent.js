import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
    student: {
      name: "tiru"
    }
  };

  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    let { counter } = this.state;

    return (
      <div className="App">
        <h1>Counter App</h1>
        <p>Current state is</p>
        <h3>{counter}</h3>
        <button onClick={() => this.handleIncrement()}>Increment</button>
        <button onClick={() => this.handleDecrement()}>Decrement</button>
      </div>
    );
  }
}

/**
 *
 *
 * pure functions =>
 *
 * same input => same output
 *
 * state
 *
 *
 */

export default App;
