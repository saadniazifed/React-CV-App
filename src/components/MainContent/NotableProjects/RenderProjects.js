/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import uniqid from "uniqid";

class RenderProjects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { projectList, removeProjects } = this.props;

    return (
      <>
        {projectList.map((project, index) => {
          return (
            <div key={uniqid()} className="projectDataWrapper">
              <div className="projectTitle">
                <h3>Project Title:</h3>
                <p>{project.title}</p>
              </div>

              <div className="projectStartDate">
                <h3>Start Date:</h3>
                <p>{project.startDate}</p>
              </div>

              <div className="projectEndDate">
                <h3>End Date:</h3>
                <p>{project.endDate}</p>
              </div>

              <div className="projectDescription">
                <h3>Description: </h3>
                <p>{project.description}</p>
              </div>

              <button
                type="button"
                className="projectBtn"
                onClick={() => removeProjects(index)}
              >
                {" "}
                Remove Project{" "}
              </button>
            </div>
          );
        })}
      </>
    );
  }
}

export default RenderProjects;
