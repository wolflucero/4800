import React, { Component } from "react";
import {
  createMuiTheme,
  ThemeProvider,
  Button,
  TextField,
} from "@material-ui/core";
import { getByPlaceholderText } from "@testing-library/react";
import "./Login.css";

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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <h1 className="heading">
            Fresh groceries, delivered right to your door
          </h1>
        </div>
        <TextField
          variant="standard"
          type="email"
          label="Email"
          color="primary"
          style={style}
          onChange = {(event, newValue) => this.setState({username:newValue})}
        ></TextField>
        <br />
        <TextField
          variant="standard"
          type="password"
          label="Password"
          color="primary"
          style={style}
          onChange = {(event, newValue) => this.setState({password:newValue})}
        ></TextField>
        <br />
        <Button variant="contained" color="primary" style={style} onClick={(event) => this.handleClick(event)}>
          Sign In
        </Button>
        <div>
          <h1 className="body">New to Growceries? Sign up here</h1>
        </div>
        <Button variant="contained" color="primary" style={style}>
          Sign up
        </Button>
      </ThemeProvider>
    );
  }
}

const style = {
  margin: 10,
};

export default Login;
