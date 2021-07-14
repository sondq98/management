import React, { Component } from 'react'
import { Link } from '@material-ui/core';
import Stack from '@material-ui/core/Stack';

import AuthenHeader from '../../components/AuthenHeader/AuthenHeader'
import Btn40 from '../../components/Buttons/Btn40'
import BtnCustom from '../../components/Buttons/BtnCustom'
import AuthenFormGroup from '../../components/AuthenFormGroup/AuthenFormGroup'

import './Signup.css'

class Signup extends Component {
    render() {
        return (

            <div className='signupPage'>
                <AuthenHeader />
                <div className="signupFormWrapper">
                    <form action="" className="signupForm">
                        <h1 className="signupForm-Header">Sign up</h1>
                        <div className="signupForm-Main">
                            <div className="signupForm-InputGroup">
                            <AuthenFormGroup title="First Name"></AuthenFormGroup>
                            <div className="space"></div>
                            <AuthenFormGroup title="Last Name"></AuthenFormGroup>
                            </div>
                            <AuthenFormGroup title="Email"></AuthenFormGroup>
                            <AuthenFormGroup title="Phone number"></AuthenFormGroup>
                            <AuthenFormGroup title="Password"></AuthenFormGroup>
                            <AuthenFormGroup title="Re-Password"></AuthenFormGroup>
                        </div>
                        <div className="signupFormFooter">
                            <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={0}
                            >
                                <BtnCustom color="green">Register</BtnCustom>
                                <Link href="/login" underline="none">
                                    <BtnCustom color="dark">Back</BtnCustom>
                                </Link>
                                
                            </Stack>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default Signup
