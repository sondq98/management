import React from 'react'
import { useHistory } from "react-router-dom";
import { Link } from '@material-ui/core';
import Stack from '@material-ui/core/Stack';
import Button from '@material-ui/core/Button';

import AuthenHeader from '../../components/AuthenHeader'
import AuthenFormGroup from '../../components/AuthenFormGroup'

import './style.css'

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
                            <Button variant="contained" className="btn-40" color="success">Login</Button>
                            </div>
                            <Link href="/signup" underline="none">
                            <Button variant="contained" className="btn-40">Sign up</Button>
                            </Link>

                        </Stack>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
