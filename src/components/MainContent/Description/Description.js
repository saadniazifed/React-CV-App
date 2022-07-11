import React, { Component } from "react";

class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      descriptionValue: "Enter the Description here.",
    };
  }

  render() {
    return (
      <>
        <label htmlFor="descriptionValue">Description: </label>
        <textarea value={this.state.descriptionValue} />
      </>
    );
  }
}

export default Description;
