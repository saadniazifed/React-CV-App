import React, { Component } from "react";
import RenderInterests from "./RenderInterests";
import "./Interests.css";

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

  removeHobby = (index) => {
    let newArray = this.state.interestList;
    let pos = newArray.indexOf(index);
    newArray.splice(pos, 1);
    this.setState({
      interestList: newArray,
    });
  };

  render() {
    const { ...props } = this.state;

    return (
      <div className="interest--container">
        <div className="form__group field interestCenter">
          <input
            type="text"
            id="interestInput"
            value={this.state.interestName.text}
            onChange={this.handleChange}
            className="form__field"
            placeholder="ReactJS, JavaScript..."
          />
          <button
            type="button"
            onClick={this.addInterest}
            className="interestButton"
          >
            Add Interest
          </button>
          <RenderInterests {...props} removeHobby={this.removeHobby} />
        </div>
      </div>
    );
  }
}

export default Interests;
