import React, { Component } from 'react';
import {Container} from "react-bootstrap";
import NavigationBar from "./navbar.components";
import BottomBar from "./bottombar.components";


export default class Shop extends Component{
    render(){
        return (
            <div style={{backgroundColor:"#f1faee"}}>
                <NavigationBar/>

                <div className="center shop-page">
                    <div className="shop-container">
                        <div className="selection-bar">heelo</div>
                        <div className="option-bar">

                        </div>

                    </div>
                </div>

                <BottomBar/>
            </div>
        )}
}
