/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Description from "../Description/Description";
import Education from "../Education/Education";
import NotableProjects from "../NotableProjects/NotableProjects";
import Skills from "../Skills/Skills";
import WorkExperience from "../WorkExperience/WorkExperience";
import "./MainContent.css";

class MainContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <form className="mainContentForm">
          <Description />
          <Skills />
          <NotableProjects />
          <WorkExperience />
          <Education />
        </form>
      </div>
    );
  }
}

export default MainContent;
