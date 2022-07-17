/* eslint-disable no-useless-constructor */
import React from "react";
import "./Interests.css";

const RenderInterests = (props) => {
  const { removeHobby, interestList } = props;

  return (
    <div className="renderInterest--container">
      <ul className="interest-and-button interestContainer">
        {interestList.map((task, index) => {
          return (
            <li key={index} className="li--container interestColumn ">
              {task.interestList[index].name}
              <button
                type="button"
                onClick={() => removeHobby(index)}
                className="removeHobbyBtn"
              >
                Remove Hobby
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RenderInterests;
