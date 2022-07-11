/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Description from "../Description/Description";
import NotableProjects from "../NotableProjects/NotableProjects";
import Skills from "../Skills/Skills";

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
        </form>
      </div>
    );
  }
}

export default MainContent;
