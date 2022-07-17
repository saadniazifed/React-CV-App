/* eslint-disable no-useless-constructor */
import React from "react";
import uniqid from "uniqid";

const RenderProjects = (props) => {
  const { projectList, removeProjects } = props;

  return (
    <>
      {projectList.map((project, index) => {
        return (
          <div key={uniqid()} className="projectDataWrapper">
            <div className="projectTitle">
              <h3>Project Title:</h3>
              <p>{project.projectList[index].title}</p>
            </div>

            <div className="projectStartDate">
              <h3>Start Date:</h3>
              <p>{project.projectList[index].startDate}</p>
            </div>

            <div className="projectEndDate">
              <h3>End Date:</h3>
              <p>{project.projectList[index].endDate}</p>
            </div>

            <div className="projectDescription">
              <h3>Description: </h3>
              <p>{project.projectList[index].description}</p>
            </div>

            <button
              type="button"
              className="projectBtn"
              onClick={() => removeProjects(index)}
            >
              Remove Project{" "}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default RenderProjects;
