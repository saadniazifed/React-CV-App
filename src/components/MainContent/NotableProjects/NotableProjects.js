import React, { Component } from "react";
import RenderProjects from "./RenderProjects";
import "./NotableProjects.css";

class NotableProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {
        title: "",
        startDate: "",
        endDate: "",
        description: "",
      },

      projectList: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      project: {
        ...this.state.project,
        [event.target.name]: event.target.value,
      },
    });
  };

  addProjects = (e) => {
    e.preventDefault();
    this.setState({
      ...this.projectList,
      projectList: this.state.projectList.concat(this.state.project),

      project: {
        title: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    });
  };

  removeProjects = (index) => {
    let newArray = this.state.projectList;
    let pos = newArray.indexOf(index);
    newArray.splice(pos, 1);
    this.setState({
      projectList: newArray,
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
    const { projectList } = this.state;
    return (
      <>
        <h3>Projects: </h3>
        <button type="button" onClick={this.showForm} className="projectBtn">
          Show Projects
        </button>
        {this.state.formVisible && (
          <div className="form__group field">
            <input
              type="text"
              name="title"
              value={this.state.project.title}
              onChange={this.handleChange}
              className="form__field"
              placeholder="Project Title"
            />

            <input
              type="date"
              name="startDate"
              value={this.state.project.startDate}
              onChange={this.handleChange}
              className="form__field"
            />

            <input
              type="date"
              name="endDate"
              value={this.state.project.endDate}
              onChange={this.handleChange}
              className="form__field"
            />

            <textarea
              value={this.state.project.description}
              onChange={this.handleChange}
              name="description"
              className="textAreaFormField"
              placeholder="Add Project Description..."
            />
            <div className="projectBtnDiv">
              <button
                type="button"
                onClick={this.addProjects}
                className="projectBtn"
              >
                Add Projects
              </button>
              <button
                type="button"
                onClick={this.hideForm}
                className="projectBtn"
              >
                Hide Form
              </button>
            </div>
          </div>
        )}
        <RenderProjects
          projectList={projectList}
          removeProjects={this.removeProjects}
        />
      </>
    );
  }
}

export default NotableProjects;
