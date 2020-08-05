import React, { Component } from 'react';
import {Container} from "react-bootstrap";

export default class Catalogue extends Component {
    render() {
        return (
            <Container style={{paddingBottom:"50px"}}>
                <h1 className="main-page-header" style={{color:"#1d3557"}}>CATALOGUE</h1>
                <hr style={{ margin:"20px", border: "3px solid #1d3557", borderRadius: "10px"}}/>
                <div className="catalogue-container">
                    <div className="box drop-shadow">
                        <a href="/Shop#computer">
                            <img src={require("../image/catalogue/computer.png")} alt="Computers" style={{width:"100%"}}/>
                            <div className="text">Computers</div>
                        </a>
                    </div>
                    <div className="box drop-shadow">
                        <a href="/Shop#mouse">
                            <img src={require("../image/catalogue/mouse.png")} alt="Mice" style={{width:"100%"}}/>
                            <div className="text">Mice</div>
                        </a>
                    </div>
                    <div className="box drop-shadow">
                        <a href="#/Shopkeyboard">
                            <img src={require("../image/catalogue/keyboard.png")} alt="Keyboards" style={{width:"100%"}}/>
                            <div className="text">Keyboards</div>
                        </a>

                    </div>
                    <div className="box drop-shadow">
                        <a href="/Shop#speaker">
                            <img src={require("../image/catalogue/speaker.png")} alt="Speakers" style={{width:"100%"}}/>
                            <div className="text">Speakers</div>
                        </a>

                    </div>
                    <div className="box drop-shadow">
                        <a href="/Shop#headphone">
                            <img src={require("../image/catalogue/headphone.png")} alt="Headphones" style={{width:"100%"}}/>
                            <div className="text">Headphones</div>
                        </a>
                    </div>
                    <div className="box drop-shadow">
                        <a href="/Shop#webcam">
                            <img src={require("../image/catalogue/webcam.png")} alt="Webcams" style={{width:"100%"}}/>
                            <div className="text">Webcams</div>
                        </a>
                    </div>

                </div>
            </Container>
        )}
}