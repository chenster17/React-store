/* eslint no-restricted-globals: 0 */
import React, { Component } from 'react';
import axios from "axios";

import { Dropdown, CardColumns } from "react-bootstrap";
import NavigationBar from "./navbar.components";
import BottomBar from "./bottombar.components";

import SideBarMenuShop from "./sideBarMenu.shop.js";
import ShopItem from "./ShopItems.js";


function parseExtension (URL){
    var fieldsAndValues = URL.split('#');
    var parseFieldsAndValues = {};
    var temp = "";
    for( var i = 1; i<fieldsAndValues.length; i++){
        temp = fieldsAndValues[i].split("=");
        parseFieldsAndValues[temp[0]] = temp[1].replace("%20", " ");
    }
    return parseFieldsAndValues
}
function APITranslateExtension (URL){
    var fieldsAndValues = URL.split('#');
    var parseFieldsAndValues = {};
    var temp = "";
    for( var i = 1; i<fieldsAndValues.length; i++){
        temp = fieldsAndValues[i].split("=");
        if(+temp[1]){
            parseFieldsAndValues[temp[0]] = {$gte:temp[1]}
        }
        else{
            parseFieldsAndValues[temp[0]] = temp[1].replace("%20", " ");
        }
    }
    return parseFieldsAndValues
}

export default class Shop extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fields:[], //attribute of a category
            selectOptions : {}, //brands or values of a attribute
            catalogue:'',
            selectedFields: {},
            API_selectedField_V:{},
            selectedItems:[],
            catalogueOptions:["computer","mouse", "keyboard", "speaker", "headphone", "webcam"],

        }
    };

    async componentDidMount() {
        var extension = document.URL.split('/');
        await this.setState({catalogue: extension[extension.length - 1].split("#")[0]});
        await this.setState({selectedFields:parseExtension(extension[extension.length - 1])});
        await this.setState({API_selectedField_V:APITranslateExtension(extension[extension.length - 1]) });
        if (this.state.catalogueOptions.includes(this.state.catalogue) && extension[3] === "Shop") {
            document.getElementById("container").className = "shop-container";
            document.getElementById("sidebar").style = "visibility:true";
            axios.get("http://localhost:5000/" + this.state.catalogue+ "/getFields")
                .then(async response => {
                    var temp = {};
                    this.setState({fields: response.data})
                    for (var i of this.state.fields) {
                        var result = await axios.get("http://localhost:5000/" + this.state.catalogue + "/get" + i.charAt(0).toUpperCase() + i.slice(1) + "s")
                        temp[i] = await result.data;
                    }
                    this.setState({selectOptions: temp});
                    axios.post("http://localhost:5000/" + this.state.catalogue + "/getFilter", this.state.API_selectedField_V)
                        .then(response => {
                            this.setState({selectedItems:response.data})
                        })
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
                            {this.state.fields.map((eachField) => {return <SideBarMenuShop field={eachField} fieldValue={this.state.selectOptions[eachField]} selected={this.state.selectedFields} key={eachField} />})}
                            </div>
                        </div>

                        <div className="option-bar">
                            <div style={{width:"100%", margin:"10px"}}>
                                <h1 style={{margin:"10px", textTransform:"capitalize", color:"#457b9d"}}>{this.state.catalogue}</h1>
                                <div style={{display:"inline-block"}}>{this.state.selectedItems.map((each_item, index) => {return(<ShopItem item_JSON={each_item} key={index}/>)})}</div>

                            </div>
                        </div>

                    </div>
                </div>

                <BottomBar/>
            </div>
        )}
}
