import React from "react";

// Stateless Functional Component
// No Life Cycle Hooks

const NavBar = ({ totalCounter }) => {
  console.log("NavBar - rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Counter{" "}
        <span className="badge badge-pill badge-secondary">{totalCounter}</span>
      </a>
    </nav>
  );
};

export default NavBar;
