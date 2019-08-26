import React, { Component } from "react";

class Counter extends Component {
  state = {
    tags: ["Tag1", "Tag2", "Tag3"],
    imageUrl: "https://picsum.photos/50"
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  handleIncreament = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <span>
        {this.state.tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </span>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value <= 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  //  Life Cycle Hooks
  componentDidUpdate(prevProps, prevState) {
    console.log("Counter - updated", prevProps);
    //console.log("Prev State", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data base on these changes
    }
  }

  //  Life Cycle Hooks
  componentWillUnmount(prevProps, prevState) {
    console.log("Counter - unmount");
  }

  render() {
    console.log("Counter - rendered");
    const { counter, onRemove, onIncrement } = this.props;
    let classes = this.getBadgeClasses();
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        {counter.id}
        {counter.children}
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button
          style={{ fontSize: 20 }}
          className="btn btn-secondary btn-sm"
          onClick={() => {
            onIncrement(counter); //controlled
          }}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onRemove(counter.id)}
        >
          Remove
        </button>
        {this.state.tags.length === 0 && <p>Please create a new tag!</p>}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
