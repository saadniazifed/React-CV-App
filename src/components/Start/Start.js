import React, { Component } from "react";
import MainContent from "../MainContent/MainContent/MainContent";
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
        <MainContent />
      </div>
    );
  }
}

export default Start;
