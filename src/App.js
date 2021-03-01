import React, { Component } from "react";
import Navbar from "./Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: []
    };
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Login />
          <Switch>
            <Route path="/" exact />
            <div className="app">
              {this.state.loginPage}
              {this.state.uploadScreen}
            </div>
          </Switch>
        </Router>
      </>
    );
  }
}

const style = {
  margin: 15
};

export default App;
