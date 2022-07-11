import React, { Component } from "react";
import RenderExperience from "./RenderExperience";
import "./WorkExperience.css";

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
      <div>
        <h3>Work Experience: </h3>
        <button type="button" onClick={this.showForm} className="projectBtn">
          Show Work
        </button>
        {this.state.formVisible && (
          <div className="form__group field">
            <input
              placeholder="Previous Experience.."
              type="text"
              name="companyName"
              value={this.state.workExperience.companyName}
              onChange={this.handleChange}
              className="form__field"
            />

            <input
              type="date"
              name="startDate"
              value={this.state.workExperience.startDate}
              onChange={this.handleChange}
              className="form__field"
            />

            <input
              type="date"
              name="endDate"
              value={this.state.workExperience.endDate}
              onChange={this.handleChange}
              className="form__field"
            />

            <textarea
              placeholder="Describe Previous Working Experience..."
              value={this.state.workExperience.description}
              onChange={this.handleChange}
              name="description"
              className="textAreaFormField"
            />

            <div className="experienceBtnDiv">
              <button
                type="button"
                onClick={this.addExperience}
                className="projectBtn"
              >
                Add Experience
              </button>

              <button
                type="button"
                onClick={this.hideForm}
                className="projectBtn"
              >
                Hide Form
              </button>
            </div>
            <RenderExperience experienceList={this.state.experienceList} />
          </div>
        )}
      </div>
    );
  }
}

export default WorkExperience;
