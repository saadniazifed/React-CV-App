import React, { Component } from "react";
import "./Social.css";

class Social extends Component {
  constructor(props) {
    super(props);

    this.state = {
      facebook: "",
      twitter: "",
      instagram: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="social--container">
        <h4>Social: </h4>
        <input
          name="facebook"
          onChange={this.handleChange}
          value={this.state.facebook}
          placeholder="fb.com/abcd"
        />

        <input
          name="twitter"
          onChange={this.handleChange}
          value={this.state.twitter}
          placeholder="twitter.com/abcd"
        />

        <input
          name="instagram"
          onChange={this.handleChange}
          value={this.state.instagram}
          placeholder="instagram.com/abcd"
        />
      </div>
    );
  }
}

export default Social;