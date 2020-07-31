import React, { Component } from 'react';
import {Card, CardColumns} from "react-bootstrap";


export default class BestSeller extends Component{
    render(){
        return (
            <CardColumns style={{paddingBottom:"100px"}}>
                <Card className="drop-shadow">
                    <Card.Img variant="top" src={require("../image/products/brita.jpg")} style={{padding:"20px"}}/>
                    <Card.Footer>
                        <div>Brita Space Saver Water Filter Pitcher ...</div>
                    </Card.Footer>
                </Card>
                <Card className="drop-shadow">
                    <Card.Img variant="top" src={require("../image/products/headphones.jpg")} style={{padding:"20px"}}/>
                    <Card.Footer>
                        <div>Razer Thresher for Xbox One ...</div>
                    </Card.Footer>
                </Card>
                <Card className="drop-shadow">
                    <Card.Img variant="top" src={require("../image/products/coffeegrinder.jpg")} style={{padding:"20px"}}/>
                    <Card.Footer>
                        <div>KRUPS Electric Spice and Coffee Grinder ...</div>
                    </Card.Footer>
                </Card>
            </CardColumns>
        )}
}
