/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import uniqid from "uniqid";

class RenderProjects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { projectList } = this.props;

    return (
      <>
        {projectList.map((project) => {
          return (
            <div key={uniqid()}>
              <p>{project.title}</p>
              <p>{project.startDate}</p>
              <p>{project.endDate}</p>
              <p>{project.description}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default RenderProjects;
