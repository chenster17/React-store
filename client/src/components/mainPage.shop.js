import React from 'react';
import axios from 'axios';



export default function MainPage ({field}){

    /*
    const data = useSelector(state => state.filter.filter);
    if(field !== ""){
        axios.post("http://localhost:5000/"+field+"/getFilter", data)
            .then(response => {
                console.log(response.data);
            })

    }
    */
    return(
        <div style={{width:"100%", margin:"10px"}}>
            <h1 style={{margin:"10px", textTransform:"capitalize", color:"#457b9d"}}>{field}</h1>
        </div>
    )
}