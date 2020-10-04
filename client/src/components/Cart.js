import React from "react";
import {useSelector} from "react-redux";


export default function Cart (currentCart){
    var totalItems = 0;
    for (var i = 0; i< currentCart.currentCart.length; i++){
        totalItems += currentCart.currentCart[i].total
    }
    const counter = useSelector(state => state.cart.num);
    return(<div>{totalItems + counter}</div>)
}