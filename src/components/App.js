import React, { Component, Fragment } from "react";
import ".././myStyles.scss";

export class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <span className="App">
          We are a most promising species, Mr. Spock, as predators go. Did you
          know that? I frequently have my doubts. I dont. Not any more. And
          maybe in a thousand years or so, we will be able to prove it.
        </span>
        <span>- Captain Kirk</span>
      </Fragment>
    );
  }
}
