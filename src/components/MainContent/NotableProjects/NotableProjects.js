import React, { useState } from "react";
import RenderProjects from "./RenderProjects";
import "./NotableProjects.css";

const NotableProjects = () => {
  const [project, setProject] = useState({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [projectList, setProjectList] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  const handleChange = (event) => {
    setProject({
      ...project,
      [event.target.name]: event.target.value,
    });
  };

  const addProjects = (e) => {
    e.preventDefault();
    setProjectList([
      ...projectList,
      {
        projectList: [...projectList, project],
      },
    ]);
  };

  const removeProjects = (index) => {
    setProjectList([
      ...projectList.slice(0, index),
      ...projectList.slice(index + 1, projectList.length),
    ]);
  };

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

  return (
    <>
      <h3>Projects: </h3>
      <button type="button" onClick={showForm} className="projectBtn">
        Show Projects
      </button>
      {formVisible && (
        <div className="form__group field">
          <input
            type="text"
            name="title"
            value={project.title}
            onChange={handleChange}
            className="form__field"
            placeholder="Project Title"
          />

          <input
            type="date"
            name="startDate"
            value={project.startDate}
            onChange={handleChange}
            className="form__field"
          />

          <input
            type="date"
            name="endDate"
            value={project.endDate}
            onChange={handleChange}
            className="form__field"
          />

          <textarea
            value={project.description}
            onChange={handleChange}
            name="description"
            className="textAreaFormField"
            placeholder="Add Project Description..."
          />
          <div className="projectBtnDiv">
            <button type="button" onClick={addProjects} className="projectBtn">
              Add Projects
            </button>
            <button type="button" onClick={hideForm} className="projectBtn">
              Hide Form
            </button>
          </div>
        </div>
      )}
      <RenderProjects
        projectList={projectList}
        removeProjects={removeProjects}
      />
    </>
  );
};

export default NotableProjects;
