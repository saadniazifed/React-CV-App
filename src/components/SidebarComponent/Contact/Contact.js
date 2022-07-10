import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: "",
      email: "",
      linkedIn: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <>
        <input
          name="phone"
          value={this.state.phone}
          onChange={this.handleChange}
          placeholder="+1-234-5678"
        />

        <input
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="example@example.com"
        />

        <input
          name="linkedIn"
          value={this.state.linkedIn}
          onChange={this.handleChange}
          placeholder="Linkedin.com/abcd"
        />
      </>
    );
  }
}

export default Contact;
