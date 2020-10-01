import React from "react";
import {Card, Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addToCart} from "../actions/cart";
import axios from "axios";

function addToTheCart(item,dispatch){
    var data = {type:item.catalogue,id:item.item_JSON._id};
    axios.post("http://localhost:5000/account/updateCart", data);
    dispatch(addToCart(item.catalogue,item.item_JSON._id));
}

export default function ShopItem (item_JSON){
    const dispatch = useDispatch();
    return(
        <Card  style={{ width: '275px', display:"inline-block", maxHeight:"400px", verticalAlign: "top", margin:"5px"}}>
            <img variant="top" src={require('../image/speaker/'+item_JSON.item_JSON.file)} style={{maxHeight:"150px", padding:"10px"}} className="center"/>
            <Card.Body style={{verticalAlign: "text-bottom"}}>
                <Card.Title>{item_JSON.item_JSON.name}</Card.Title>
                <Card.Text>price: ${item_JSON.item_JSON.price}</Card.Text>
                <Button variant="primary" onClick={()=>{addToTheCart(item_JSON,dispatch)}}>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}