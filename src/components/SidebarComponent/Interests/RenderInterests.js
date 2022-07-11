/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "./Interests.css";
import uniqid from "uniqid";

class RenderInterests extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   id: 0,
    // };
  }

  render() {
    const { interestList, removeHobby } = this.props;

    return (
      <div className="renderInterest--container">
        <ul className="interest-and-button interestContainer">
          {interestList.map((task, index) => {
            return (
              <li key={uniqid()} className="li--container interestColumn ">
                {task.text}
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
  }
}

export default RenderInterests;
