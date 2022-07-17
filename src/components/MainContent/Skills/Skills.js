import React, { useState } from "react";
import RenderSkills from "./RenderSkills";
import "./Skills.css";

const Skills = () => {
  const [userSkills, setUserSkills] = useState("");
  const [skillsList, setSkillsList] = useState([]);

  const handleChange = (e) => {
    setUserSkills({ skills: e.target.value });
  };

  const addSkills = (e) => {
    e.preventDefault();
    setSkillsList([
      ...skillsList,
      {
        skillsList: [...skillsList, userSkills],
      },
    ]);

    console.log(skillsList);
  };

  const removeSkills = (index) => {
    setSkillsList([
      ...skillsList.slice(0, index),
      ...skillsList.slice(index + 1, skillsList.length),
    ]);
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
