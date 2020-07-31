import React, { Component } from 'react';
import {Container, Form, FormControl, Button} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default class BottomBar extends Component{
    render(){
        return (
            <div style={{height:"100%", backgroundColor:"#f1faee"}}>
                <Container>
                    <div className="box-container">
                        <div className="box">
                            <h1>Sign Up</h1>
                            <p>sign up to recieve notifications on new releases</p>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Email</Button>
                            </Form>
                        </div>
                        <div className="box" style={{overflow:"hidden"}}>
                            <a>FAQs</a>
                            <a>order lookups</a>
                            <a>returns & exchanges</a>
                            <a>contact us</a>
                        </div>
                        <div className="box" style={{overflow:"hidden"}}>
                            <a>Privacy Policy</a>
                            <a>Careers</a>
                            <a>About us</a>
                            <a>Schedule</a>
                        </div>
                        <div className="box" style={{overflow:"hidden"}}>
                            <a>Shop</a>
                            <a>New Releases</a>
                            <a>Sale</a>
                        </div>
                    </div>
                    <div style={{color:"#457b9d", textAlign:"center", padding:"20px"}}>© 2020 One Drop Shop</div>
                </Container>
            </div>

        )}
}
