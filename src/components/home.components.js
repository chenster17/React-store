import React, { Component } from 'react';
import {Container} from "react-bootstrap";
import NavigationBar from "./navbar.components";
import CarouselSection from "./carousel.components";
import BestSeller from "./bestSeller.components";
import BottomBar from "./bottombar.components";

export default class Home extends Component{
    render(){
        return (
            <div style={{backgroundColor:"#a8dadc"}}>
            <NavigationBar/>
                <CarouselSection/>
                <Container style={{textAlign:"center"}}>
                    <h1 style={{padding:"50px", fontSize:"100px", color:"#1d3557"}}>BEST SELLERS</h1>
                    <BestSeller/>

                </Container>
                <BottomBar/>

            </div>
        )}
}
