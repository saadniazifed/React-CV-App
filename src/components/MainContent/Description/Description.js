import React, { Component } from "react";
import "./Description.css";

class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      descriptionValue: "",
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
        <textarea
          value={this.state.descriptionValue}
          onChange={this.handleDescriptionChange}
          name="descriptionValue"
          className="textarea"
          placeholder="Enter Description here.."
        />
      </>
    );
  }
}

export default Description;
