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
            <>
              <p key={uniqid()}>{project.title}</p>
              <p key={uniqid()}>{project.startDate}</p>
              <p key={uniqid()}>{project.endDate}</p>
              <p key={uniqid()}>{project.description}</p>
            </>
          );
        })}
      </>
    );
  }
}

export default RenderProjects;
