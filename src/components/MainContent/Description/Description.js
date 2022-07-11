import React, { Component } from "react";
import "./Description.css";

class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      descriptionValue: "Enter the Description here.",
    };
  }

  handleDescriptionChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <>
        <label htmlFor="descriptionValue">Description: </label>
        <textarea
          value={this.state.descriptionValue}
          onChange={this.handleDescriptionChange}
          name="descriptionValue"
          className="textarea"
        />
      </>
    );
  }
}

export default Description;
