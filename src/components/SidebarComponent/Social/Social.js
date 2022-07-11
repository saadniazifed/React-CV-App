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
        <div className="form__group field socialCenter">
          <input
            name="facebook"
            onChange={this.handleChange}
            value={this.state.facebook}
            placeholder="fb.com/abcd"
            className="form__field"
          />

          <input
            name="twitter"
            onChange={this.handleChange}
            value={this.state.twitter}
            className="form__field"
            placeholder="twitter.com/abcd"
          />

          <input
            name="instagram"
            onChange={this.handleChange}
            value={this.state.instagram}
            placeholder="instagram.com/abcd"
            className="form__field"
          />
        </div>
      </div>
    );
  }
}

export default Social;
