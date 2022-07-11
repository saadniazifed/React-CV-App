import React, { Component } from "react";
import RenderProjects from "./RenderProjects";

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
        <button type="button" onClick={this.showForm}>
          Show Form
        </button>
        {this.state.formVisible && (
          <>
            <button type="button" onClick={this.addProjects}>
              Add Projects
            </button>
            <label htmlFor="title">Enter Projects: </label>
            <input
              type="text"
              name="title"
              value={this.state.project.title}
              onChange={this.handleChange}
            />
            <label htmlFor="startDate">Start Date: </label>
            <input
              type="date"
              name="startDate"
              value={this.state.project.startDate}
              onChange={this.handleChange}
            />
            <label htmlFor="endDate">End Date: </label>
            <input
              type="date"
              name="endDate"
              value={this.state.project.endDate}
              onChange={this.handleChange}
            />
            <label htmlFor="description">Description: </label>
            <textarea
              value={this.state.project.description}
              onChange={this.handleChange}
              name="description"
            />

            <button type="button" onClick={this.hideForm}>
              Hide Form
            </button>
          </>
        )}
        <RenderProjects projectList={projectList} />
      </>
    );
  }
}

export default NotableProjects;
