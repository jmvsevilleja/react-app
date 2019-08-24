import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 }
    ]
  };

  handleRemove = counterId => {
    console.log("Handle Remove", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} onRemove={this.handleRemove} prop={counter}>
            Counter #{counter.id}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
