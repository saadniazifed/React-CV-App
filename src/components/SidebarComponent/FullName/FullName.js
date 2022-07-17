import React, { useState } from "react";
import "./FullName.css";

const FullName = () => {
  const [fullName, setFullName] = useState("");

  const handleName = (event) => {
    setFullName(event.target.value);
  };

  return (
    <div className="name--container">
      <div className="form__group field">
        <input
          name="fullName"
          value={fullName}
          onChange={handleName}
          placeholder="Name"
          className="form__field"
        />
      </div>
    </div>
  );
};

export default FullName;
