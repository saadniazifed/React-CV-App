/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
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
      <>
        <ul>
          {interestList.map((task, index) => {
            return (
              <li key={uniqid()}>
                {task.text}
                <button type="button" onClick={() => removeHobby(index)}>
                  Remove Hobby
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default RenderInterests;
