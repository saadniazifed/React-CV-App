import React, { Component } from "react";
import RenderSkills from "./RenderSkills";
import "./Skills.css";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userSkills: { text: "" },
      skillsList: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      userSkills: {
        text: e.target.value,
      },
    });
  };

  addSkills = (e) => {
    e.preventDefault();
    this.setState({
      ...this.skillsList,
      skillsList: this.state.skillsList.concat(this.state.userSkills),
      userSkills: { text: "" },
    });
  };

  removeSkills = (index) => {
    let newArray = this.state.skillsList;
    let pos = newArray.indexOf(index);
    newArray.splice(pos, 1);
    this.setState({
      skillsList: newArray,
    });
  };

  render() {
    const { ...props } = this.state;

    return (
      <div className="skillCenter">
        <div className="skillWrapper">
          <input
            type="text"
            name="userSkills"
            value={this.state.userSkills.text}
            onChange={this.handleChange}
            className="form__field"
            placeholder="Problem Solving..."
          />
          <button
            type="button"
            onClick={this.addSkills}
            className="skillsButton"
          >
            Add Skills
          </button>
        </div>
        <RenderSkills {...props} removeSkills={this.removeSkills} />
      </div>
    );
  }
}

export default Skills;
