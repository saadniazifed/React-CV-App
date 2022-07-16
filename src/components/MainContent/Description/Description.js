import React, { useState } from "react";
import "./Description.css";

const Description = () => {
  const [descriptionValue, setDescriptionValue] = useState("");

  const handleDescriptionChange = (event) => {
    const { name, value } = event.target;

    setDescriptionValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <textarea
        value={descriptionValue}
        onChange={handleDescriptionChange}
        name="descriptionValue"
        className="textarea"
        placeholder="Enter Description here.."
      />
    </>
  );
};

export default Description;
