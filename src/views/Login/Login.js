import React, { Component } from 'react'
import { Link } from '@material-ui/core';
import Stack from '@material-ui/core/Stack';

import AuthenHeader from '../../components/AuthenHeader/AuthenHeader'
import Btn40 from '../../components/Buttons/Btn40'
import BtnCustom from '../../components/Buttons/BtnCustom'
import AuthenFormGroup from '../../components/AuthenFormGroup/AuthenFormGroup'

import './Login.css'

class Login extends Component {
    render() {
        return (

            <div className='loginPage'>
                <AuthenHeader />
                <div className="loginFormWrapper">
                    <form action="" className="loginForm">
                        <h1 className="loginForm-Header">Login</h1>
                        <div className="loginForm-Main">
                            <AuthenFormGroup title="Email"></AuthenFormGroup>
                            <AuthenFormGroup title="Password"></AuthenFormGroup>
                        </div>
                        <div className="loginFormFooter">
                            <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={0}
                            >
                                <BtnCustom color="green">Login</BtnCustom>
                                <Link href="/signup" underline="none">
                                    <BtnCustom color="sky">Sign up</BtnCustom>
                                </Link>
                                
                            </Stack>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default Login
