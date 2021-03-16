import React, { Component } from "react";
import Navbar from "./Navbar";
import "./css/Stores.css";
import { 
    Button,
    createMuiTheme,
    ThemeProvider,
} from "@material-ui/core";
import DynamicForm from "./DynamicForm";

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

class Stores extends Component {
    constructor() {
        super();
        this.state = {
            storeID: "",
            name: "",
            address: "",
            phone: "",
            item: [],
            isLoaded: false,
            images: [
                {
                    walmart: "https://1000logos.net/wp-content/uploads/2017/05/Walmart-logo.png",
                },
            ],
        };

        this.getData = this.getData.bind(this);
    }

    getData(event) {
        fetch("/home/stores", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        })
            .then((Response) => Response.json())
            .then((json) => {
                this.setState({
                    items: json,
                    isLoaded: true,
                });
            });
    }

    /* Testing
  handleClick = () => {
    console.log(this.state.stores[0].name)
    console.log(this.state.stores[0].phone)
    console.log(this.state.stores[0].address)
  }
  */

    render() {
        const { isLoaded, items } = this.state;
        
        if(!isLoaded) {
            return (
                <div className="storesContainer">
                    <ThemeProvider theme={theme}>
                        <Button
                            onClick={this.getData}
                            variant="contained"
                            style={style}
                            color="primary"
                        >
                            Database dump
                        </Button>
                        {/*
                        <ul>
                            {items.map((item) => (
                                <li key={item.id}>
                                    Store: {item.name}
                                </li>
                            ))}
                        </ul>
                        */}
                    </ThemeProvider>
                </div>

                /*
                <div className="storesContainer">
                    <div className="featuredTag">Featured</div>
                    <img 
                        src={this.state.stores[0].img} 
                    />
                    <div className="imgOverlay">
                        <div className="storeName">
                            {this.state.stores[0].name}
                            <br />
                            {this.state.stores[0].address}
                            <br />
                            {this.state.stores[0].phone}
                            <br />
                        </div>
                    </div>
                </div>
                */
            );
        } else {
            return (
                <div className="App">
                    {/*}
                    <div classname="storeImg">
                        <img src={this.state.images[0]} />
                    </div>
                    <div className="imgOverlay">
                    */}
                        <ul>
                            {items.map((item) => (
                                <li key={item.id}>
                                    Store: {item.storeID} Name: {item.name} Address: {item.address} Phone number: {item.phone}
                                </li>
                            ))}
                        </ul>
                    </div>
                    /*
                </div>
                */
            )
        }
    }
}

const style = {
    margin: 5,
};

export default Stores;
