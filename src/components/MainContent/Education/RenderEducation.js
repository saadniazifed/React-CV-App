/* eslint-disable no-useless-constructor */
import React from "react";
import uniqid from "uniqid";

const RenderEducation = (props) => {
  const { educationList, removeEducation } = props;

  return (
    <>
      {educationList.map((eduProject, index) => {
        return (
          <div key={uniqid()} className="educationDataWrapper">
            <div className="educationLevel">
              <h3>Type of Institute: </h3>
              <p>{eduProject.educationList[index].educationLevel}</p>
            </div>

            <div className="educationName">
              <h3>Education Name: </h3>
              <p>{eduProject.educationList[index].name}</p>
            </div>

            <div className="educationStartDate">
              <h3>Start Date: </h3>
              <p>{eduProject.educationList[index].startDate}</p>
            </div>

            <div className="educationEndDate">
              <h3>End Date: </h3>
              <p>{eduProject.educationList[index].endDate}</p>
            </div>

            <div className="educationDescription">
              <h3>Description: </h3>
              <p>{eduProject.educationList[index].description}</p>
            </div>

            <button
              type="button"
              className="projectBtn"
              onClick={() => removeEducation(index)}
            >
              Remove Education
            </button>
          </div>
        );
      })}
    </>
  );
};

export default RenderEducation;
