import React, { Component } from 'react';
import{Carousel} from "react-bootstrap";

export default class CarouselSection extends Component{
    render(){
        return (
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={require("../image/carousel/iphone_product.png")} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={require("../image/carousel/office_product.png")} alt="Third slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={require("../image/carousel/watch_product.png")} alt="Third slide"/>
                </Carousel.Item>
            </Carousel>
        )}
}
