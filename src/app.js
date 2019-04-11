import React, { Component } from "react";
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  browserHistory
} from "react-router";
import ReactDOM from "react-dom";
import "App" from "../src/component/index.js";

import "./myStyles.scss";

const Index = () => {
  return (
    <div>
      Hello React!
      <LandingPage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

// import React, { Component } from "react";
// import "./App.css";
// import { HomePage } from "../src/components/home";
// import { connect } from "react-redux";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <HomePage />
//       </div>
//     );
//   }
// }

// export default connect()(App);
