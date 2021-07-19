import React from 'react';
import { useHistory } from "react-router-dom";
import Stack from '@material-ui/core/Stack';
import Button from '@material-ui/core/Button';

import AuthenHeader from '../../components/AuthenHeader'
import AuthenFormGroup from '../../components/AuthenFormGroup'

import './style.css'

function Signup() {
    let history = useHistory();

    function handleClickBack() {
        history.push("/login");
    }
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
                            <Button
                                variant="contained"
                                className="btn-40"
                            >
                                Register
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleClickBack}
                                className="btn-40"
                                sx={{
                                    bgcolor: '#212121',
                                    '&:hover': {
                                        bgcolor: '#080808'
                                    }
                                }}
                            >
                                Back
                            </Button>
                        </Stack>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;
