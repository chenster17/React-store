import React from "react";
import {useSelector} from "react-redux";


export default function Cart (currentCart){
    const counter = useSelector(state => state.cart.num);
    return(<div>{currentCart.currentCart+ counter}</div>)
}