import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // initialize properties of this class
  constructor(props) {
    // call constructor of the parent class
    super(props);
    console.log("Counters - Constructor", this.props);
    //this.state = this.props.something;
  }

  render() {
    console.log("Counters - rendered");
    // Object destructuring
    const { onReset, counters, onRemove, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onRemove={onRemove}
            onIncrement={onIncrement}
            counter={counter}
          >
            Counter #{counter.id}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
