/* eslint no-restricted-globals: 0 */
import React from 'react';
import {Button} from "react-bootstrap";

function resetSlider(field,fieldValue){
    document.getElementById("myRange"+field).value=fieldValue[Math.round(fieldValue.length/2)];
    document.getElementById("slide"+field).innerText="Greater than: "+document.getElementById("myRange"+field).value;
}
function addFilter(field, fieldValue){

    if(document.URL.includes(field)){
        var regex = new RegExp(field+"=[a-zA-Z]+[\%20]*[a-zA-Z]*");
        window.location = document.URL.replace(regex, field+"="+fieldValue);

    }
    else{
        window.location += "#" + field +"="+fieldValue;
    }
    location.reload();

}


export default function SideBarMenuShop ({field,fieldValue, selected}){
    if(fieldValue !== undefined){
        if (typeof fieldValue[0] === "string"){
            return(
                <div>
                    <div style={{color:"#1d3557", fontSize:"20px", marginLeft:"10px", fontWeight:"bold"}}>{field.charAt(0).toUpperCase()+field.slice(1)}</div>
                    { fieldValue.map((each_fieldValue) => {
                        if(fieldValue.length === 2 && selected[field]!== undefined){
                            return (
                                <div></div>
                            )
                        }
                        return (
                        <div className="sidebar-container">
                            <div className="box center">
                                {(selected[field]===each_fieldValue)? <input id={each_fieldValue} type="checkbox" id={"checkbox"+each_fieldValue} style={{margin:"5px"}} onClick={()=>addFilter(field, each_fieldValue)} checked/>: <input id={each_fieldValue} type="checkbox" id={"checkbox"+each_fieldValue} style={{margin:"5px"}} onClick={()=>addFilter(field, each_fieldValue)}/> }
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
                    <input type="range" min={fieldValue[0]} max={fieldValue[fieldValue.length-1]} defaultValue={fieldValue[Math.round(fieldValue.length/2)]}  id={"myRange"+field} style={{width:"100%"}} onChange={()=>{document.getElementById("slide"+field).innerText= "Greater than: "+document.getElementById("myRange"+field).value}}/>
                    <Button style={{backgroundColor:"#a8dadc", color:"#e63946", border:"0px"}} onClick={()=>{resetSlider(field, fieldValue)}}>Reset</Button>
                </div>
            )
        }
    }
    else{
        return <div>Loading ...</div>
    }

}