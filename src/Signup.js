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
            phone_number:""
        }
    }

    render() {
        return(
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
                    required
                    variant="standard"
                    type="string"
                    color="primary"
                    style={style}
                    label="Password"
                    onChange = {(event,newValue) => this.setState({password:newValue})}
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
            </ThemeProvider>
        )  
    }
}

const style = {
    margin: 10,
};

export default Signup;