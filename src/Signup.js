import React, { Component } from "react";
import Navbar from "./Navbar";
import "./Signup.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";
import {
    createMuiTheme,
    ThemeProvider,
    Button,
    TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
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
    constructor(props) {
        super(props);
        this.state= {
            first_name:"",
            last_name:"",
            email:"",
            password:"",
            confirmPassword:"",
            phone_number:""
        }
    }

    componentWillReceiveProps(nextProps){
        console.log("nextProps",nextProps);
      }

    render() {
        return(
            <div className="signupContainer">
                <ThemeProvider theme={theme}>
                    <div>
                        <Navbar />
                    </div>
                    <div className="heading">
                        <h1>
                        Create your Growceries account here!
                        </h1>
                    </div>
                    <TextField
                        required
                        variant="standard"
                        type="string"
                        color="primary"
                        style={style}
                        label="First Name"
                        onChange = {(event,newValue) => this.setState({first_name:newValue})}
                    ></TextField>
                    <TextField
                        required
                        variant="standard"
                        type="string"
                        color="primary"
                        style={style}
                        label="Last Name"
                        onChange = {(event,newValue) => this.setState({last_name:newValue})}
                    ></TextField>
                    <br />
                    <TextField
                        required
                        variant="standard"
                        type="string"
                        color="primary"
                        style={style}
                        label="Email"
                        onChange = {(event,newValue) => this.setState({email:newValue})}
                    ></TextField>
                    <br />
                    <TextField
                        hintText="6 characters minimum"
                        required
                        variant="standard"
                        type="password"
                        color="primary"
                        style={style}
                        InputProps={{
                            inputProps: {
                                min: 6,
                            }
                        }}
                        label="Password"
                        onChange = {(event,newValue) => this.setState({password:newValue})}
                    ></TextField>
                    <br />
                    <TextField
                        required
                        variant="standard"
                        type="password"
                        color="primary"
                        style={style}
                        label="Confirm password"
                        onChange = {(event,newValue) => this.setState({confirmPassword:newValue})}
                    ></TextField>
                    <br />
                    <TextField
                        required
                        variant="standard"
                        type="string"
                        color="primary"
                        style={style}
                        label="Phone Number"
                        onChange = {(event,newValue) => this.setState({phoneNumber:newValue})}
                    ></TextField>
                    <br />
                    <Button variant="contained" color="primary" style={style}>
                        Sign up
                    </Button>
                    <div>
                        <h3>
                            Already have an account?
                        </h3>
                    </div>
                    <Button component={Link} to="/" variant="contained" color="primary" style={style}>
                        Log in here
                    </Button>
                </ThemeProvider>
            </div>
        )  
    }
}

const style = {
    margin: 5,
};

export default Signup;