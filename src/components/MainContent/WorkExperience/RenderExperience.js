/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import uniqid from "uniqid";

class RenderExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { experienceList } = this.props;

    return (
      <>
        {experienceList.map((projects) => {
          return (
            <div key={uniqid()}>
              <p>{projects.companyName}</p>
              <p>{projects.startDate}</p>
              <p>{projects.endDate}</p>
              <p>{projects.description}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default RenderExperience;
