import React from "react";
import {Card, Button} from "react-bootstrap";

export default function ShopItem (item_JSON){
    return(

        <Card  style={{ width: '275px', display:"inline-block", maxHeight:"400px", verticalAlign: "top", margin:"5px"}}>
            <img variant="top" src={require('../image/speaker/'+item_JSON.item_JSON.file)} style={{maxHeight:"150px", padding:"10px"}} className="center"/>
            <Card.Body style={{verticalAlign: "text-bottom"}}>
                <Card.Title>{item_JSON.item_JSON.name}</Card.Title>
                <Card.Text>price: ${item_JSON.item_JSON.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}