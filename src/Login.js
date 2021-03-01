import React, { Component } from "react";
import {
  createMuiTheme,
  ThemeProvider,
  Button,
  TextField,
} from "@material-ui/core";
import "./App.css";
import { getByPlaceholderText } from "@testing-library/react";

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
        <TextField
          variant="standard"
          type="email"
          label="Email"
          color="primary"
          style={style}
        ></TextField>
        <br />
        <TextField
          variant="standard"
          type="password"
          label="Password"
          color="primary"
          style={style}
        ></TextField>
        <br />
        <Button variant="contained" color="primary" style={style}>
          Sign In
        </Button>
        <div>Don't have an account? Sign up here</div>
        <Button variant="contained" color="primary" style={style}>
          Sign up
        </Button>
      </ThemeProvider>
    );
  }
}

const style = {
  margin: 15,
};

export default Login;
