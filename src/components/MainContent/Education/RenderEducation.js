/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import uniqid from "uniqid";

class RenderEducation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { educationList } = this.props;

    return (
      <>
        {educationList.map((eduProject) => {
          return (
            <div key={uniqid()} className="educationDataWrapper">
              <div className="educationLevel">
                <h3>Type of Institute: </h3>
                <p>{eduProject.educationLevel}</p>
              </div>

              <div className="educationName">
                <h3>Education Name: </h3>
                <p>{eduProject.name}</p>
              </div>

              <div className="educationStartDate">
                <h3>Start Date: </h3>
                <p>{eduProject.startDate}</p>
              </div>

              <div className="educationEndDate">
                <h3>End Date: </h3>
                <p>{eduProject.endDate}</p>
              </div>

              <div className="educationDescription">
                <h3>Description: </h3>
                <p>{eduProject.description}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default RenderEducation;
