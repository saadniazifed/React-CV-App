import React, { Component } from "react";
import "./Contact.css";

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
      <div className="contact--container">
        <div className="form__group field centerContact">
          <input
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            placeholder="+1-234-5678"
            className="form__field"
            type="number"
          />

          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="example@example.com"
            className="form__field"
          />

          <input
            name="linkedIn"
            value={this.state.linkedIn}
            onChange={this.handleChange}
            placeholder="Linkedin.com/abcd"
            className="form__field"
          />
        </div>
      </div>
    );
  }
}

export default Contact;
