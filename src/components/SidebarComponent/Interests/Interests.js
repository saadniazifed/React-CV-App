import React, { Component } from "react";
import RenderInterests from "./RenderInterests";

class Interests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interestName: { text: "" },
      interestList: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      interestName: {
        text: e.target.value,
      },
    });
  };

  addInterest = (e) => {
    e.preventDefault();
    this.setState({
      ...this.interestList,
      interestList: this.state.interestList.concat(this.state.interestName),
      interestName: { text: "" },
    });
  };

  render() {
    const { ...props } = this.state;

    return (
      <>
        <label htmlFor="interestInput">Enter Interests</label>
        <input
          type="text"
          id="interestInput"
          value={this.state.interestName.text}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.addInterest}>
          Add Interest
        </button>
        <RenderInterests {...props} />
      </>
    );
  }
}

export default Interests;
