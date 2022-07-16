import React, { useState } from "react";
import RenderSkills from "./RenderSkills";
import "./Skills.css";

const Skills = () => {
  const [userSkills, setUserSkills] = useState({ text: "" });
  const [skillsList, setSkillsList] = useState([]);

  const handleChange = (e) => {
    setUserSkills({
      userSkills: {
        text: e.target.value,
      },
    });
  };

  const addSkills = (e) => {
    e.preventDefault();
    setSkillsList({
      ...skillsList,
      skillsList: skillsList.concat(userSkills),
      userSkills: { text: "" },
    });
  };

  const removeSkills = (index) => {
    let newArray = skillsList;
    let pos = newArray.indexOf(index);
    newArray.splice(pos, 1);
    setSkillsList({
      skillsList: newArray,
    });
  };

  return (
    <div className="skillCenter">
      <div className="skillWrapper">
        <input
          type="text"
          name="userSkills"
          value={userSkills.text}
          onChange={handleChange}
          className="form__field"
          placeholder="Problem Solving..."
        />
        <button type="button" onClick={addSkills} className="skillsButton">
          Add Skills
        </button>
      </div>
      <RenderSkills removeSkills={removeSkills} skillsList={skillsList} />
    </div>
  );
};

export default Skills;
