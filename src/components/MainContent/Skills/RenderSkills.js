import React, { Component } from "react";
import uniqid from "uniqid";

// eslint-disable-next-line no-unused-vars
class RenderSkills extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { removeSkills, skillsList } = this.props;
    return (
      <>
        <ul>
          {skillsList.map((task, index) => {
            return (
              <li key={task.text}>
                {task.text}
                <button type="button" onClick={() => removeSkills(index)}>
                  Remove Skills
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default RenderSkills;
