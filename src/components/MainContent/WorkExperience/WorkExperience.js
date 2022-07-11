import React, { Component } from "react";
import RenderExperience from "./RenderExperience";

class WorkExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workExperience: {
        companyName: "",
        startDate: "",
        endDate: "",
        description: "",
      },

      experienceList: [],

      formVisible: false,
    };
  }

  showForm = () => {
    this.setState({
      formVisible: true,
    });
  };

  addExperience = (e) => {
    e.preventDefault();
    this.setState({
      ...this.experienceList,
      experienceList: this.state.experienceList.concat(
        this.state.workExperience
      ),

      workExperience: {
        companyName: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    });
  };

  handleChange = (event) => {
    this.setState({
      workExperience: {
        ...this.state.workExperience,
        [event.target.name]: event.target.value,
      },
    });
  };

  hideForm = () => {
    this.setState({
      formVisible: false,
    });
  };

  render() {
    return (
      <>
        <h3>Work Experience: </h3>
        <button type="button" onClick={this.showForm}>
          Show Form
        </button>
        {this.state.formVisible && (
          <>
            <button type="button" onClick={this.addExperience}>
              Add Experience
            </button>
            <label htmlFor="companyName">Enter Company: </label>
            <input
              type="text"
              name="companyName"
              value={this.state.workExperience.companyName}
              onChange={this.handleChange}
            />
            <label htmlFor="startDate">Start Date: </label>
            <input
              type="date"
              name="startDate"
              value={this.state.workExperience.startDate}
              onChange={this.handleChange}
            />
            <label htmlFor="endDate">End Date: </label>
            <input
              type="date"
              name="endDate"
              value={this.state.workExperience.endDate}
              onChange={this.handleChange}
            />
            <label htmlFor="description">Description: </label>
            <textarea
              value={this.state.workExperience.description}
              onChange={this.handleChange}
              name="description"
            />

            <button type="button" onClick={this.hideForm}>
              Hide Form
            </button>
            <RenderExperience experienceList={this.state.experienceList} />
          </>
        )}
      </>
    );
  }
}

export default WorkExperience;
