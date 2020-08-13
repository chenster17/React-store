import React from 'react';
import {useSelector} from "react-redux";


export default function MainPage (){

    const catalogue = useSelector(state => state.filter.location)


    return(
        <div style={{width:"100%", margin:"10px"}}>
            <h1 style={{margin:"10px", textTransform:"capitalize", color:"#457b9d"}}>{catalogue}</h1>
        </div>
    )
}