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
        <div className="form__group field">
          <h4>Social: </h4>
          <label htmlFor="facebook">Facebook: </label>
          <input
            name="facebook"
            onChange={this.handleChange}
            value={this.state.facebook}
            placeholder="fb.com/abcd"
            className="form__label form__field"
          />

          <label htmlFor="twitter">Twitter: </label>
          <input
            name="twitter"
            onChange={this.handleChange}
            value={this.state.twitter}
            placeholder="twitter.com/abcd"
            className="form__label form__field"
          />

          <label htmlFor="instagram">Instagram: </label>
          <input
            name="instagram"
            onChange={this.handleChange}
            value={this.state.instagram}
            placeholder="instagram.com/abcd"
            className="form__label form__field"
          />
        </div>
      </div>
    );
  }
}

export default Social;
