import React, { useState } from "react";
import RenderInterests from "./RenderInterests";
import "./Interests.css";

const Interests = () => {
  const [interestName, setInterestName] = useState("");
  const [interestList, setInterestList] = useState([]);

  const handleChange = (e) => {
    setInterestName({
      name: e.target.value,
    });
  };

  const addInterest = (e) => {
    e.preventDefault();
    setInterestList([
      ...interestList,
      {
        interestList: [...interestList, interestName],
      },
    ]);
  };

  const removeHobby = (index) => {
    setInterestList([
      ...interestList.slice(0, index),
      ...interestList.slice(index + 1, interestList.length),
    ]);
  };

  return (
    <div className="interest--container">
      <div className="form__group field interestCenter">
        <input
          type="text"
          id="interestInput"
          value={interestList.name}
          onChange={handleChange}
          className="form__field"
          placeholder="ReactJS, JavaScript..."
        />
        <button type="button" onClick={addInterest} className="interestButton">
          Add Interest
        </button>

        <RenderInterests
          removeHobby={removeHobby}
          interestList={interestList}
        />
      </div>
    </div>
  );
};

export default Interests;
