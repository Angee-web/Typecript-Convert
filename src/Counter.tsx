import  { Component } from "react";

// Step 1: Define the State interface (there are no props, so no Props interface is necessary).
interface CounterState {
  count: number; // The count will always be a number.
}

class Counter extends Component<{}, CounterState> {
  // Step 2: Define the state type explicitly.
  state: CounterState = {
    count: 0, // Initial value of count.
  };

  // Step 3: Type the increment function.
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
