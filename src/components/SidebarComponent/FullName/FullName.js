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
        <div className="form__group field">
          <input
            name="fullName"
            value={this.state.fullName}
            onChange={this.handleName}
            placeholder="Name"
            className="form__field"
          />
        </div>
      </div>
    );
  }
}

export default FullName;
