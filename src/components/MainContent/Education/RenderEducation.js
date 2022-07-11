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
            <div key={uniqid()}>
              <p>{eduProject.educationLevel}</p>
              <p>{eduProject.name}</p>
              <p>{eduProject.startDate}</p>
              <p>{eduProject.endDate}</p>
              <p>{eduProject.description}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default RenderEducation;
