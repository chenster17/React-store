/* eslint no-restricted-globals: 0 */
import React, { Component } from 'react';
import {useSelector, useDispatch} from "react-redux";
import {currentLocation} from "../actions/filter";
import axios from "axios";


import { Dropdown } from "react-bootstrap";
import NavigationBar from "./navbar.components";
import BottomBar from "./bottombar.components";

import SideBarMenu from "./sideBarMenu";



export default class Shop extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fields:[],
            selectOptions : {},
            catalogueOptions:["computer","mouse", "keyboard", "speaker", "headphone", "webcam"],
        }
    };

    async componentDidMount() {
        var extension = document.URL.split('/');
        await this.setState({catalogue: extension[extension.length - 1]});
        if (this.state.catalogueOptions.includes(this.state.catalogue) && extension[extension.length - 2] === "Shop") {
            document.getElementById("container").className = "shop-container";
            document.getElementById("sidebar").style = "visibility:true";
            axios.get("http://localhost:5000/" + extension[extension.length - 1]+ "/getFields")
                .then(async response => {
                    var temp = {};
                    this.setState({fields: response.data})
                    for (var i of this.state.fields) {
                        var result = await axios.get("http://localhost:5000/" + this.state.catalogue + "/get" + i.charAt(0).toUpperCase() + i.slice(1) + "s")
                        temp[i] = await result.data;
                    }
                    this.setState({selectOptions: temp});


                    /*
                    var filtered = extension[extension.length - 1].split('#').slice(1);
                    var temp_JSON = {};
                    for(var select of filtered){
                        if(select.includes("=")){
                            var each_select = select.split("=");
                            if (this.state.fields.includes(each_select[0])){
                                temp_JSON[each_select[0]] = each_select[1];
                            }
                        }
                    }
                    axios.post("http://localhost:5000/" + extension[extension.length - 1].split('#')[0] + "/getFilter", temp_JSON)
                        .then(response => {
                            this.setState({tech:response.data})
                        })*/
                })
        }
        else if (this.state.catalogue === "Shop" && extension.length === 4) {
            this.setState({testText: "All Options"})
            document.getElementById("sidebar").style = "visibility:hidden";
        }
        else{
            window.location = "/Shop";
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
                        <div id="sidebar" className="selection-bar" >
                            <div style={{margin:"20px"}}>
                            {this.state.fields.map((eachField) => {return <SideBarMenu field={eachField} fieldValue={this.state.selectOptions[eachField]} key={eachField} />})}
                            </div>
                        </div>

                        <div className="option-bar">
                            <h1 style={{margin:"20px", textTransform:"capitalize", color:"#457b9d"}}>{this.state.catalogue}</h1>
                        </div>

                    </div>
                </div>

                <BottomBar/>
            </div>
        )}
}
