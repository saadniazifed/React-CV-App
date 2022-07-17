import React, { useState } from "react";
import RenderExperience from "./RenderExperience";
import "./WorkExperience.css";

const WorkExperience = () => {
  const [workExperience, setWorkExperience] = useState({
    companyName: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [experienceList, setExperienceList] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  const showForm = () => {
    setFormVisible({
      formVisible: true,
    });
  };

  const hideForm = () => {
    setFormVisible({
      formVisible: false,
    });
  };

  const addExperience = (e) => {
    e.preventDefault();
    setExperienceList([
      ...experienceList,
      {
        experienceList: [...experienceList, workExperience],
      },
    ]);
  };

  const handleChange = (event) => {
    setWorkExperience({
      ...workExperience,
      [event.target.name]: event.target.value,
    });
  };

  const removeExperience = (index) => {
    setExperienceList([
      ...experienceList.slice(0, index),
      ...experienceList.slice(index + 1, experienceList.length),
    ]);
  };

  return (
    <div>
      <h3>Work Experience: </h3>
      <button type="button" onClick={showForm} className="projectBtn">
        Show Work
      </button>
      {formVisible && (
        <div className="form__group field">
          <input
            placeholder="Previous Experience.."
            type="text"
            name="companyName"
            value={workExperience.companyName}
            onChange={handleChange}
            className="form__field"
          />

          <input
            type="date"
            name="startDate"
            value={workExperience.startDate}
            onChange={handleChange}
            className="form__field"
          />

          <input
            type="date"
            name="endDate"
            value={workExperience.endDate}
            onChange={handleChange}
            className="form__field"
          />

          <textarea
            placeholder="Describe Previous Working Experience..."
            value={workExperience.description}
            onChange={handleChange}
            name="description"
            className="textAreaFormField"
          />

          <div className="experienceBtnDiv">
            <button
              type="button"
              onClick={addExperience}
              className="projectBtn"
            >
              Add Experience
            </button>

            <button type="button" onClick={hideForm} className="projectBtn">
              Hide Form
            </button>
          </div>
          <RenderExperience
            experienceList={experienceList}
            removeExperience={removeExperience}
          />
        </div>
      )}
    </div>
  );
};

export default WorkExperience;
