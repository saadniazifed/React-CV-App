/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Description from "../Description/Description";
import NotableProjects from "../NotableProjects/NotableProjects";
import Skills from "../Skills/Skills";
import WorkExperience from "../WorkExperience/WorkExperience";

class MainContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <form>
          <Description />
          <Skills />
          <NotableProjects />
          <WorkExperience />
        </form>
      </div>
    );
  }
}

export default MainContent;
