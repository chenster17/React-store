import React, { Component } from 'react';
import {Navbar, Nav} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default class NavigationBar extends Component{
    render(){
        return (
            <Navbar sticky="top" expand="lg" style={{backgroundColor:"#a8dadc"}}>
                <Navbar.Brand href="/"><img src={require("../image/One_Drop_Shop.png")}  className="d-inline-block align-top" alt="Website logo" style={{padding: "5px",width:"300px", maxWidth:"100%"}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" style={{fontSize:"20px"}}>
                        <a href="#new"className="Nav-Links">New Releases</a>
                        <a href="#sale"className="Nav-Links">On Sale</a>
                        <div style={{padding: "10px"}} className="drop-down-menu">
                            <a href="/Shop" className="Nav-Links" style={{padding:"0px"}}>Shop</a>
                            <div className="dropdown-content">
                                <a href="/Shop#computer" style={{textDecoration:"none"}}>Computer</a>
                                <a href="/Shop#mouse" style={{textDecoration:"none"}}>Mouse</a>
                                <a href="/Shop#keyboard" style={{textDecoration:"none"}}>Keyboard</a>
                                <a href="/Shop#Speaker" style={{textDecoration:"none"}}>Speaker</a>
                                <a href="/Shop#headphone" style={{textDecoration:"none"}}>headphone</a>
                                <a href="/Shop#webcam" style={{textDecoration:"none"}}>Webcam</a>
                            </div>
                        </div>
                    </Nav>
                    <div className="cart">
                        <div className="cart-red">
                            <div style={{textAlign:"center", color:"white", lineHeight: "20px"}}>0</div>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        )}
}
