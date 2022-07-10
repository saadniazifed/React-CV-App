import React, { Component } from "react";
import Contact from "../Contact/Contact";
import FullName from "../FullName/FullName";
import Interests from "../Interests/Interests";
import Social from "../Social/Social";
import "./Sidebar.css";

class Sidebar extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar--container">
        <form className="form--container">
          <FullName />
          <Contact />
          <Social />
          <Interests />
        </form>
      </div>
    );
  }
}

export default Sidebar;
