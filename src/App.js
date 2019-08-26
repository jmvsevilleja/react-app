import React, { Component } from "react";
import logo from "./logo.svg";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 }
    ]
  };

  // initialize properties of this class
  constructor(props) {
    // call constructor of the parent class
    super(props);
    console.log("App - Constructor", this.props);
    //this.state = this.props.something;
  }

  componentDidMount() {
    // Ajax Call
    //this.setState({ newCounters })
    console.log("App - Mounted");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];

    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = counter => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleRemove = counterId => {
    console.log("Handle Remove", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log("App - Renedered");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <NavBar
            totalCounter={this.state.counters.filter(c => c.value > 0).length}
          />
          <main className="container">
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onRemove={this.handleRemove}
            />
          </main>
        </header>
      </div>
    );
  }
}

export default App;
