/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class RenderInterests extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { interestList } = this.props;

    return (
      <ul>
        {interestList.map((task) => {
          return <li key={task.id}>{task.text}</li>;
        })}
      </ul>
    );
  }
}

export default RenderInterests;
