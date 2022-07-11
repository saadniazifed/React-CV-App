/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import uniqid from "uniqid";

class RenderExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { experienceList, removeExperience } = this.props;

    return (
      <>
        {experienceList.map((projects, index) => {
          return (
            <div key={uniqid()} className="experienceDataWrapper">
              <div className="previousCompany">
                <h3>Project Company: </h3>
                <p>{projects.companyName}</p>
              </div>

              <div className="previousStartDate">
                <h3>Start Date: </h3>
                <p>{projects.startDate}</p>
              </div>

              <div className="previousEndDate">
                <h3>End Date: </h3>
                <p>{projects.endDate}</p>
              </div>

              <div className="previousDescription">
                <h3>Description: </h3>
                <p>{projects.description}</p>
              </div>

              <button
                type="button"
                className="projectBtn"
                onClick={() => removeExperience(index)}
              >
                Remove Work Experience
              </button>
            </div>
          );
        })}
      </>
    );
  }
}

export default RenderExperience;
