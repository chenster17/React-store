import React from 'react';
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addToFilterCheckbox, removeFromFilterCheckbox, addToFilterValueRange, removeFromFilterRange} from "../actions/filter";

function resetSlider(field,fieldValue, dispatch){
    document.getElementById("myRange"+field).value=fieldValue[Math.round(fieldValue.length/2)];
    document.getElementById("slide"+field).innerText= "Greater than: "+document.getElementById("myRange"+field).value;
    dispatch(removeFromFilterRange(field));

}

function slidevalue(field, dispatch){
    dispatch(addToFilterValueRange(field, {"$gte": document.getElementById("myRange"+field).value}))
}
function checkBox(field, each_fieldValue, dispatch){
    var checkBox = document.getElementById("checkbox"+each_fieldValue);
    if (checkBox.checked === true){
        dispatch(addToFilterCheckbox(field, each_fieldValue))
    }
    else{
        dispatch(removeFromFilterCheckbox(field, each_fieldValue))
    }
}


export default function SideBarMenuShop ({field,fieldValue}){
    const dispatch = useDispatch()
    if(fieldValue !== undefined){

        if (typeof fieldValue[0] === "string"){
            return(
                <div>
                    <div style={{color:"#1d3557", fontSize:"20px", marginLeft:"10px", fontWeight:"bold"}}>{field.charAt(0).toUpperCase()+field.slice(1)}</div>
                    { fieldValue.map((each_fieldValue) => {return (
                        <div className="sidebar-container">
                            <div className="box center">
                                <input id={each_fieldValue} type="checkbox" id={"checkbox"+each_fieldValue} style={{margin:"5px"}} onClick={()=>{checkBox(field,each_fieldValue, dispatch)}}/>
                            </div>
                            <div className="text" style={{marginLeft:"5px", color:"#f1faee"}}>
                                {each_fieldValue}
                            </div>
                        </div>)}) }
                </div>
            )
        }
        else{
            return(
                <div>
                    <div style={{color:"#1d3557", fontSize:"20px", marginLeft:"10px", fontWeight:"bold"}}>{field.charAt(0).toUpperCase()+field.slice(1)}</div>
                    <div id={"slide"+field} style={{color:"#f1faee"}}>Greater than: {fieldValue[Math.round(fieldValue.length/2)]} </div>
                    <input type="range" min={fieldValue[0]} max={fieldValue[fieldValue.length-1]} defaultValue={fieldValue[Math.round(fieldValue.length/2)]}  id={"myRange"+field} style={{width:"100%"}} onMouseUp={()=>{slidevalue(field, dispatch)}} onChange={()=>{document.getElementById("slide"+field).innerText= "Greater than: "+document.getElementById("myRange"+field).value}}/>
                    <Button style={{backgroundColor:"#a8dadc", color:"#e63946", border:"0px"}} onClick={()=>{resetSlider(field, fieldValue, dispatch)}}>Reset</Button>
                </div>
            )
        }
    }
    else{
        return <div>Loading ...</div>
    }

}