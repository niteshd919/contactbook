import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <i fontSize="100px" className="fas fa-address-book" />
          Contact Book
        </Link>

        <div className="navbar-nav mr-auto">
          <Link className="nav-link nav-item active" to="/">
            <i className="fas fa-home" />
            Home
          </Link>
        </div>

        <div className=" navbar-nav mr-auto ">
          <Link className="nav-link nav-item active  " to="/Addcontact">
            <i className="far fa-plus-square" />
            Add conatct
          </Link>
        </div>
        <div className="navbar-nav mr-auto ">
          <Link className="nav-link nav-item active " to="/About" tabIndex="-1">
            <i className="far fa-question-circle" />
            About
          </Link>
        </div>
      </nav>
    );
  }
}
export default Navbar;
