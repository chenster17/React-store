import React, { Component } from 'react';
import {Card, CardColumns} from "react-bootstrap";


export default class BestSeller extends Component{
    render(){
        return (
            <div>
                <h1 className="main-page-header" style={{color:"#1d3557", paddingTop:"50px"}}>BEST SELLER</h1>
            <hr style={{ margin:"20px", border: "3px solid #1d3557", borderRadius: "10px"}}/>
            <CardColumns style={{paddingBottom:"100px"}}>
                <Card className="drop-shadow" style={{borderRadius: "10px"}}>
                    <Card.Img variant="top" src={require("../image/products/headphones.jpg")} style={{padding:"20px"}}/>
                    <Card.Footer>
                        <div>Razer Thresher for Xbox One...</div>
                    </Card.Footer>
                </Card>
                <Card className="drop-shadow" style={{borderRadius: "10px"}}>
                    <Card.Img variant="top" src={require("../image/products/razor_webcam.jpg")} style={{padding:"20px"}}/>
                    <Card.Footer>
                        <div>Razer Kiyo Streaming Webcam...</div>
                    </Card.Footer>
                </Card>
                <Card className="drop-shadow" style={{borderRadius: "10px"}}>
                    <Card.Img variant="top" src={require("../image/products/razor_mouse.jpg")} style={{padding:"20px"}}/>
                    <Card.Footer>
                        <div>Razer DeathAdder Essential Gaming Mouse...</div>
                    </Card.Footer>
                </Card>
            </CardColumns>
                </div>
        )}
}
