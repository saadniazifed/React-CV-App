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
            <>
              <p key={uniqid()}>{projects.companyName}</p>
              <p key={uniqid()}>{projects.startDate}</p>
              <p key={uniqid()}>{projects.endDate}</p>
              <p key={uniqid()}>{projects.description}</p>
            </>
          );
        })}
      </>
    );
  }
}

export default RenderExperience;
