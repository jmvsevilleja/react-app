import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["Tag1", "Tag2", "Tag3"],
    imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  handleIncreament = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count <= 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  render() {
    let classes = this.getBadgeClasses();
    return (
      <div>
        {/*         <p>
          <img src={this.state.imageUrl} alt="" />
        </p> */}
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
        {this.state.tags.length === 0 && <p>Please create a new tag!</p>}
        {/* {this.renderTags()} */}
      </div>
    );
  }
}

export default Counter;
