import React, { Component } from "react";
import Sidebar from "../SidebarComponent/Sidebar/Sidebar";
import "./Start.css";

class Start extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="start--container">
        <Sidebar />
      </div>
    );
  }
}

export default Start;
