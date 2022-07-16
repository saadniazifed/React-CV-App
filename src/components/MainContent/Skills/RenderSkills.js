import React from "react";

const RenderSkills = (props) => {
  return (
    <>
      <ul className="container">
        {props.skillsList.map((task, index) => {
          return (
            <li key={task.text} className="column">
              {task.text}
              <button
                type="button"
                onClick={() => props.removeSkills(index)}
                className="skillsBtn"
              >
                Remove Skills
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default RenderSkills;
