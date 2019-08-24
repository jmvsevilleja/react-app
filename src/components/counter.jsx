import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.prop.value,
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
    classes += this.state.count <= 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  render() {
    console.log("counter props", this.props);

    let classes = this.getBadgeClasses();
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        {this.props.prop.id}
        {this.props.prop.children}
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button
          style={{ fontSize: 20 }}
          className="btn btn-secondary btn-sm"
          onClick={() => {
            this.handleIncreament({ id: 1 });
          }}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onRemove(this.props.prop.id)}
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
