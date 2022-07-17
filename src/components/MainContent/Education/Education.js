import React, { useState } from "react";
import RenderEducation from "./RenderEducation";
import "./Education.css";

const Education = () => {
  const [education, setEducation] = useState({
    educationLevel: "",
    name: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [educationList, setEducationList] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  const handleChange = (event) => {
    setEducation({
      ...education,
      [event.target.name]: event.target.value,
    });
  };

  const addEducation = (e) => {
    e.preventDefault();
    setEducationList([
      ...educationList,
      { educationList: [...educationList, education] },
    ]);
  };

  const removeEducation = (index) => {
    setEducationList([
      ...educationList.slice(0, index),
      ...educationList.slice(index + 1, educationList.length),
    ]);
  };

  const showForm = () => {
    setFormVisible(true);
  };

  const hideForm = () => {
    setFormVisible(false);
  };

  return (
    <>
      <h3>Education: </h3>
      <button type="button" onClick={showForm} className="projectBtn">
        Show Form
      </button>
      {formVisible && (
        <div className="form__group field">
          <input
            placeholder="School/College/University"
            type="text"
            name="educationLevel"
            value={education.educationLevel}
            onChange={handleChange}
            className="form__field"
          />

          <input
            placeholder="Name of University"
            type="text"
            name="name"
            value={education.name}
            onChange={handleChange}
            className="form__field"
          />

          <input
            type="date"
            name="startDate"
            value={education.startDate}
            onChange={handleChange}
            className="form__field"
          />

          <input
            type="date"
            name="endDate"
            value={education.endDate}
            onChange={handleChange}
            className="form__field"
          />

          <textarea
            value={education.description}
            onChange={handleChange}
            name="description"
            className="textAreaFormField"
            placeholder="Any personal, academic or other things you have received during your study.."
          />
          <div className="projectBtnDiv">
            <button type="button" onClick={addEducation} className="projectBtn">
              Add Education
            </button>

            <button type="button" onClick={hideForm} className="projectBtn">
              Hide Form
            </button>
          </div>
        </div>
      )}
      <RenderEducation
        educationList={educationList}
        removeEducation={removeEducation}
      />
    </>
  );
};

export default Education;
