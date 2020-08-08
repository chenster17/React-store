import React from 'react';



export default function SideBarMenu ({field,fieldValue}){
    if(fieldValue !== undefined){
        if (typeof fieldValue[0] === "string"){

            return(
                <div>
                    <div style={{color:"#f1faee", fontSize:"20px", marginLeft:"10px"}}>{field.charAt(0).toUpperCase()+field.slice(1)}</div>
                    { fieldValue.map((each_fieldValue) => {return (
                        <div className="sidebar-container">
                            <div className="box center">
                                <input id={each_fieldValue} type="checkbox" style={{margin:"5px"}}/>
                            </div>
                            <div className="text" style={{marginLeft:"5px"}}>
                                {each_fieldValue}
                            </div>
                        </div>)}) }
                </div>
            )
        }
        else{
            return(
                <div>
                    <div style={{color:"#f1faee", fontSize:"20px", marginLeft:"10px"}}>{field.charAt(0).toUpperCase()+field.slice(1)}</div>
                </div>
            )
        }
    }
    else{
        return <div>Loading ...</div>
    }

}