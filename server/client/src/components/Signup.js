import React, { Component } from "react";
import Navbar from "./Navbar";
import "./css/Signup.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";
import {
  createMuiTheme,
  ThemeProvider,
  Button,
  TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Form } from "reactstrap";
import Login from "./Login";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#06C167",
    },
    secondary: {
      main: "#06C167",
    },
  },
});

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phone: ""
    }
    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  register(event) {
    const { firstname, lastname, email, phone } = this.state;
    fetch('/register', {
      method: 'POST',
      headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone
      })
    }).then((Response) => Response.json())
      .then((Results) => {
        if (Results.Status == "Success")
          this.props.history.push("/Dashboard");
        else
          alert("Invalid user")
      })
  }

  render() {
    return (
      <div className="signupContainer">
        <form onSubmit={this.register}>
          <input
            type="firstname"
            name="firstname"
            placeholder="First Name"
            value={this.state.firstname}
            onChange={this.handleChange}
            required
          />
          <input
            type="lastname"
            name="lastname"
            placeholder="Last Name"
            value={this.state.lastname}
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="phone"
            name="phone"
            placeholder="Phone"
            value={this.state.phone}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const style = {
  margin: 5,
};

export default Signup;