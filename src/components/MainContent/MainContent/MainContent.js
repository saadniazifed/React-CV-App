/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Description from "../Description/Description";
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
        </form>
      </div>
    );
  }
}

export default MainContent;
