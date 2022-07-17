/* eslint-disable no-useless-constructor */
import React from "react";
import "./Interests.css";
import uniqid from "uniqid";

const RenderInterests = (props) => {
  const { removeHobby, interestList } = props;

  return (
    <div className="renderInterest--container">
      <ul className="interest-and-button interestContainer">
        {interestList.map((task, index) => {
          return (
            <li key={task.id} className="li--container interestColumn ">
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
