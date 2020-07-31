import React, { Component } from 'react';
import {Navbar, Nav} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default class NavigationBar extends Component{
    render(){
        return (
            <Navbar sticky="top" expand="lg" style={{backgroundColor:"#f1faee"}}>

                <Navbar.Brand href="/"><img src={require("../image/One_Drop_Shop.png")}  className="d-inline-block align-top" alt="Website logo" style={{padding: "5px",width:"300px", maxWidth:"100%"}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" style={{fontSize:"20px"}}>
                        <a href="#New"className="Nav-Links">New Releases</a>
                        <a href="#Sale"className="Nav-Links">On Sale</a>
                        <a href="#Shop"className="Nav-Links">Shop</a>
                    </Nav>
                    <div className="cart">
                        <div className="cart-red">
                            <div style={{textAlign:"center", color:"white", lineHeight: "20px"}} >1</div>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        )}
}
