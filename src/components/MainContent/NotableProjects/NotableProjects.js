import React, { Component } from "react";

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

  render() {
    const { title, startDate, endDate, description, projectList } = this.state;

    return (
      <>
        <h3>Projects: </h3>
        <label htmlFor="title">Enter Projects: </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />

        <label htmlFor="startDate">Start Date: </label>
        <input
          type="date"
          name="startDate"
          value={startDate}
          onChange={this.handleChange}
        />

        <label htmlFor="endDate">End Date: </label>
        <input
          type="date"
          name="endDate"
          value={endDate}
          onChange={this.handleChange}
        />

        <label htmlFor="description">Description: </label>
        <textarea
          value={this.state.description}
          onChange={this.handleChange}
          name="description"
        />
      </>
    );
  }
}

export default NotableProjects;
