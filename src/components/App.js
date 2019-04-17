import React, { Component } from "react";
import "../../src/myStyles.scss";

export class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <p>
          We are a most promising species, Mr. Spock, as predators go. Did you
          know that? I frequently have my doubts. I dont. Not any more. And
          maybe in a thousand years or so, we will be able to prove it.
        </p>
        <p>- Captain Kirk</p>
      </div>
    );
  }
}
