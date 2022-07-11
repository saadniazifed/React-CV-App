import React, { Component } from "react";
import RenderEducation from "./RenderEducation";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: {
        educationLevel: "",
        name: "",
        startDate: "",
        endDate: "",
        description: "",
      },

      educationList: [],

      formVisible: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      education: {
        ...this.state.education,
        [event.target.name]: event.target.value,
      },
    });
  };

  addEducation = (e) => {
    e.preventDefault();
    this.setState({
      ...this.educationList,
      educationList: this.state.educationList.concat(this.state.education),
      education: {
        educationLevel: "",
        name: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    });
  };

  removeEducation = (index) => {
    let newArray = this.state.educationList;
    let pos = newArray.indexOf(index);
    newArray.splice(pos, 1);
    this.setState({
      educationList: newArray,
    });
  };

  showForm = () => {
    this.setState({
      formVisible: true,
    });
  };

  hideForm = () => {
    this.setState({
      formVisible: false,
    });
  };

  render() {
    const { educationList } = this.state;
    return (
      <>
        <h3>Education: </h3>
        <button type="button" onClick={this.showForm}>
          Show Form
        </button>
        {this.state.formVisible && (
          <>
            <button type="button" onClick={this.addEducation}>
              Add Education
            </button>
            <label htmlFor="educationLevel">Enter Education Level: </label>
            <input
              placeholder="School/College/University"
              type="text"
              name="educationLevel"
              value={this.state.education.educationLevel}
              onChange={this.handleChange}
            />

            <label htmlFor="name">Enter Education Level: </label>
            <input
              placeholder="Name of University"
              type="text"
              name="name"
              value={this.state.education.name}
              onChange={this.handleChange}
            />

            <label htmlFor="startDate">Start Date: </label>
            <input
              type="date"
              name="startDate"
              value={this.state.education.startDate}
              onChange={this.handleChange}
            />
            <label htmlFor="endDate">End Date: </label>
            <input
              type="date"
              name="endDate"
              value={this.state.education.endDate}
              onChange={this.handleChange}
            />
            <label htmlFor="description">Description: </label>
            <textarea
              value={this.state.education.description}
              onChange={this.handleChange}
              name="description"
            />

            <button type="button" onClick={this.hideForm}>
              Hide Form
            </button>
          </>
        )}
        <RenderEducation educationList={educationList} />
      </>
    );
  }
}

export default Education;
