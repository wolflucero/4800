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
      phone: "",
    };

    this.firstname = this.firstname.bind(this);
    this.lastname = this.lastname.bind(this);
    this.email = this.email.bind(this);
    this.phone = this.phone.bind(this);
  }

  firstname(event) {
    this.setState({ firstname: event.target.value });
  }

  lastname(event) {
    this.setState({ lastname: event.target.value });
  }

  email(event) {
    this.setState({ email: event.target.value });
  }

  phone(event) {
    this.setState({ phone: event.target.value });
  }

  register(event) {
    fetch("", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          phone: this.state.phone
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
        <Form>
          <ThemeProvider theme={theme}>
            <div>
              <Navbar />
            </div>
            <div className="heading">
              <h1>Create your Growceries account here!</h1>
            </div>
            <TextField
              required
              variant="standard"
              type="string"
              color="primary"
              style={style}
              label="First Name"
              onChange={(event, newValue) =>
                this.setState({ first_name: newValue })
              }
            ></TextField>
            <TextField
              required
              variant="standard"
              type="string"
              color="primary"
              style={style}
              label="Last Name"
              onChange={(event, newValue) =>
                this.setState({ last_name: newValue })
              }
            ></TextField>
            <br />
            <TextField
              required
              variant="standard"
              type="string"
              color="primary"
              style={style}
              label="Email"
              onChange={(event, newValue) => this.setState({ email: newValue })}
            ></TextField>
            <br />
            <TextField
              required
              variant="standard"
              type="string"
              color="primary"
              style={style}
              label="Phone Number"
              onChange={(event, newValue) =>
                this.setState({ phoneNumber: newValue })
              }
            ></TextField>
            <br />
            <Button
              onClick={this.register}
              variant="contained"
              color="primary"
              style={style}
            >
              Sign up
            </Button>
            <div>
              <h3>Already have an account?</h3>
            </div>
            <Button
              component={Link}
              to="/"
              variant="contained"
              color="primary"
              style={style}
            >
              Log in here
            </Button>
            <br />
            <Button variant="contained" color="primary" style={style}>
              Extra button for database content dump
            </Button>
          </ThemeProvider>
        </Form>
      </div>
    );
  }
}

const style = {
  margin: 5,
};

export default Signup;