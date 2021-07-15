import React from 'react'
import { useHistory } from "react-router-dom";
import { Link } from '@material-ui/core';
import Stack from '@material-ui/core/Stack';

import AuthenHeader from '../../components/AuthenHeader/AuthenHeader'
import BtnCustom from '../../components/Buttons/BtnCustom'
import AuthenFormGroup from '../../components/AuthenFormGroup/AuthenFormGroup'

import './Login.css'

function Login() {
    let history = useHistory();

    function handleClickLogin() {
        history.push("/home");
    }
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
                            <div onClick={handleClickLogin}>
                                <BtnCustom color="green">Login</BtnCustom>
                            </div>
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

export default Login
