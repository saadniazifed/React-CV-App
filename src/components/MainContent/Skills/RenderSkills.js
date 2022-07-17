import React from "react";
import uniqid from "uniqid";

const RenderSkills = (props) => {
  const { skillsList, removeSkills } = props;

  return (
    <>
      <ul className="container">
        {skillsList.map((task, index) => {
          return (
            <li key={uniqid()} className="column">
              {task.skillsList[index].skills}
              <button
                type="button"
                onClick={() => removeSkills(index)}
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
