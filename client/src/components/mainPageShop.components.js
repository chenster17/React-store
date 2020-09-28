import React, {Component} from 'react';




export default class MainPageShop extends Component{
    constructor(props) {
        super(props);
        this.state = {
            catalogue:localStorage.getItem('catalogue'),
            selectedFields: localStorage.getItem('selectedFields')
        };
    };
    componentDidMount() {
        if(this.state.catalogue === "shop"){
            console.log("get all");
        }
        else{
            console.log("get "+this.state.catalogue);
            console.log(localStorage.getItem('selectedFields'));
        }
    }

    render(){
        return(
            <div>{this.props.catalogue}</div>
        )
    }
}