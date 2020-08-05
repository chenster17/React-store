import React, { Component } from 'react';
import {Container} from "react-bootstrap";
import NavigationBar from "./navbar.components";
import CarouselSection from "./carousel.components";
import BestSeller from "./bestSeller.components";
import BottomBar from "./bottombar.components";
import Catalogue from "./catalogue.components";

export default class Home extends Component{
    render(){
        return (
            <div style={{backgroundColor:"#f1faee"}}>
            <NavigationBar/>
                <CarouselSection/>
                <Container style={{textAlign:"center", paddingTop:"40px"}}>
                    <BestSeller/>
                    <Catalogue/>

                </Container>
                <BottomBar/>
            </div>
        )}
}
