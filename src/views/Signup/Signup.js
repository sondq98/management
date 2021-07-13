import React, { Component } from 'react'

import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


import AuthenHeader from '../../components/AuthenHeader/AuthenHeader'
import InputCpn from '../../components/InputCpn/InputCpn'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css'

class Signup extends Component {
    render() {
        return (
            <div className='signupPage'>
                <AuthenHeader />
                <Container className="signupFormWrapper">

                    <Form className="signupForm">
                        <h1 className="signupForm-Header">Signup</h1>

                        <div className="signupForm-InputGroup">
                            <Form.Group className="signupForm-Group" controlId="formBasicEmail">
                                <label htmlFor="email" className="signupForm-Label">First Name</label>
                                <InputCpn type="text"
                                    id="email"
                                    name="email"
                                    value=""
                                    placeholder="Please enter Firstname"></InputCpn>
                            </Form.Group>
                            <div className="space"></div>
                            <Form.Group className="signupForm-Group" controlId="formBasicEmail">
                                <label htmlFor="email" className="signupForm-Label">Last Name</label>
                                <InputCpn type="text"
                                    id="email"
                                    name="email"
                                    value=""
                                    placeholder="Please enter Lastname"></InputCpn>
                            </Form.Group>
                        </div>

                        <Form.Group className="signupForm-Group" controlId="formBasicEmail">
                            <label htmlFor="email" className="signupForm-Label">Email</label>
                            <InputCpn type="text"
                                id="email"
                                name="email"
                                value=""
                                placeholder="Please enter Email"></InputCpn>
                        </Form.Group>

                        <Form.Group className="signupForm-Group" controlId="formBasicEmail">
                            <label htmlFor="email" className="signupForm-Label">Phone number</label>
                            <InputCpn type="text"
                                id="email"
                                name="email"
                                value=""
                                placeholder="Please enter Phone number"></InputCpn>
                        </Form.Group>

                        <Form.Group className="signupForm-Group" controlId="formBasicPassword">
                            <label htmlFor="password" className="signupForm-Label">Password</label>
                            <InputCpn type="text"
                                id="password"
                                name="password"
                                value=""
                                placeholder="Please enter Password"></InputCpn>
                        </Form.Group>
                        
                        <Form.Group className="signupForm-Group" controlId="formBasicPassword">
                            <label htmlFor="password" className="signupForm-Label">Re-Password</label>
                            <InputCpn type="text"
                                id="password"
                                name="password"
                                value=""
                                placeholder="Please enter Re-Password"></InputCpn>
                        </Form.Group>

                        <div className="signupForm-ButtonGroup">
                            <Button variant="success" type="button" className="btn-40">
                                Register
                            </Button>

                            <Link to="/login">
                                <Button variant="primary" type="button" className="btn-40">
                                    Back
                                </Button>
                            </Link>
                        </div>

                    </Form>
                </Container>
            </div>
        )
    }
}

export default Signup;
