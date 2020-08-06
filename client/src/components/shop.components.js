/* eslint no-restricted-globals: 0 */
import React, { Component } from 'react';
import axios from "axios";

import { Dropdown } from "react-bootstrap";
import NavigationBar from "./navbar.components";
import BottomBar from "./bottombar.components";


export default class Shop extends Component{
    constructor(props) {
        super(props);
        this.state = {
            brands:[],
            selectOptions : [],
            catalogueOptions:["computer","mouse", "keyboard", "speaker", "headphone", "webcam"],
            testText:""
        }
    };
    componentDidMount() {
        var extension = document.URL.split('/');
        if (this.state.catalogueOptions.includes(extension[extension.length - 1]) && extension[extension.length - 2] === "Shop") {
            this.setState({testText: extension[extension.length - 1]})
            document.getElementById("container").className = "shop-container";
            document.getElementById("sidebar").style = "visibility:true";
            axios.get("http://localhost:5000/" + extension[extension.length - 1] + "/getFields")
                .then(response => {
                    var temp = [];
                    this.setState({brands: response.data})
                    for (var i of this.state.brands) {
                        axios.get("http://localhost:5000/" + extension[extension.length - 1] + "/get" + i)
                            .then(brandsOption => {
                                temp.push(brandsOption.data);
                            })
                    }
                    this.setState({selectOption: temp});
                })
        } else if (extension[extension.length - 1] === "Shop" && extension.length === 4) {
            this.setState({testText: "All Options"})
            document.getElementById("sidebar").style = "visibility:hidden";

        } else {
            window.location = "/Shop"
        }
    }

    render(){
        return (
            <div style={{backgroundColor:"#f1faee"}}>
                <NavigationBar/>
                <div className="center" style={{height:"60px", width:"80%"}}>
                    <Dropdown style={{margin:"30px 120px 30px 20px", textAlign:"right"}}>
                        <Dropdown.Toggle id="dropdown-basic" style={{border:"0px", backgroundColor:"#a8dadc", color:"#457b9d"}}>
                            Catalogue
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Header>Store Options</Dropdown.Header>
                            <Dropdown.Item href="/Shop/computer">Computers</Dropdown.Item>
                            <Dropdown.Item href="/Shop/mouse">Mice</Dropdown.Item>
                            <Dropdown.Item href="/Shop/keyboard">Keyboards</Dropdown.Item>
                            <Dropdown.Item href="/Shop/speaker">Speakers</Dropdown.Item>
                            <Dropdown.Item href="/Shop/headphone">headphones</Dropdown.Item>
                            <Dropdown.Item href="/Shop/webcam">Webcams</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/shop">reset</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="center shop-page" style={{marginBottom:"50px"}}>
                    <div id="container" className="">
                        <div id="sidebar" className="selection-bar drop-shadow" >
                        </div>
                        <div className="option-bar">
                            <h1 style={{margin:"20px", textTransform:"capitalize", color:"#457b9d"}}>{this.state.testText}</h1>
                        </div>

                    </div>
                </div>

                <BottomBar/>
            </div>
        )}
}
