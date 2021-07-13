import React, { Component } from 'react'

import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


import AuthenHeader from '../../components/AuthenHeader/AuthenHeader'
import InputCpn from '../../components/InputCpn/InputCpn'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'

class Login extends Component {
    render() {
        return (

            <div className='loginPage'>
                <AuthenHeader />
                <Container className="loginFormWrapper">

                    <Form className="loginForm">
                        <h1 className="loginForm-Header">Login</h1>
                        <Form.Group className="loginForm-Group" controlId="formBasicEmail">
                            <label htmlFor="email" className="loginForm-Label">Email</label>
                            <InputCpn type="text"
                                id="email"
                                name="email"
                                value=""
                                placeholder="Please enter Email"></InputCpn>

                        </Form.Group>

                        <Form.Group className="loginForm-Group" controlId="formBasicPassword">
                            <label htmlFor="password" className="loginForm-Label">Password</label>
                            <InputCpn type="text"
                                id="password"
                                name="password"
                                value=""
                                placeholder="Please enter Password"></InputCpn>

                        </Form.Group>

                        <div className="loginForm-ButtonGroup">
                            <Button variant="success" type="button" className="btn-40">
                                Login
                            </Button>
                            <Link to="/signup">
                                <Button variant="primary" type="button" className="btn-40">
                                    Signup
                                </Button>
                            </Link>
                        </div>

                    </Form>
                </Container>
            </div>

        )
    }
}

export default Login
