import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    console.log("navbar");
    return (
      <nav className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <h1>Habit Tracker</h1>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
