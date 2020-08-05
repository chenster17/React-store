import React, { Component } from 'react';
import {Container, Form, FormControl, Button} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default class BottomBar extends Component{
    render(){
        return (
            <div style={{height:"100%", backgroundColor:"#a8dadc"}}>
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
                            <div>FAQs</div>
                            <div>order lookups</div>
                            <div>returns & exchanges</div>
                            <adiv>contact us</adiv>
                        </div>
                        <div className="box" style={{overflow:"hidden"}}>
                            <div>Privacy Policy</div>
                            <div>Careers</div>
                            <div>About us</div>
                            <div>Schedule</div>
                        </div>
                        <div className="box" style={{overflow:"hidden"}}>
                            <div>Shop</div>
                            <div>New Releases</div>
                            <div>Sale</div>
                        </div>
                    </div>
                    <div style={{color:"#457b9d", textAlign:"center", padding:"20px"}}>© 2020 One Drop Shop</div>
                </Container>
            </div>

        )}
}
