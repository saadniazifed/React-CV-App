import React, { Component } from "react";
import "./FullName.css";

class FullName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
    };
  }

  handleName = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="name--container">
        <h3>Name: </h3>
        <input
          name="fullName"
          value={this.state.fullName}
          onChange={this.handleName}
          placeholder="Name"
        />
      </div>
    );
  }
}

export default FullName;
