import React, { Component } from "react";
import FullName from "../FullName/FullName";

class Sidebar extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return <FullName />;
  }
}

export default Sidebar;
