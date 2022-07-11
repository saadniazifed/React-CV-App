/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Description from "../Description/Description";

class MainContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <form>
          <Description />
        </form>
      </div>
    );
  }
}

export default MainContent;
