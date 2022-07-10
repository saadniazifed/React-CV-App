import React, { Component } from "react";

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
      <div>
        <form>
          <input
            name="firstName"
            value={this.state.fullName}
            onChange={this.handleName}
            placeholder="Name"
          />
        </form>
      </div>
    );
  }
}

export default FullName;
