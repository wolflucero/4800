import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Stores from "./components/Stores";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginPage: [],
            uploadScreen: [],
        };
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Login} exact />
                        <Route exact path="/Stores" component={Stores} />
                        <Route exact path="/Signup" component={Signup} />
                        <Route navigate="/data" />
                        <Route exact component={Error} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const style = {
    margin: 15,
};

export default App;
