import React from 'react';
import { useHistory } from "react-router-dom";
import Stack from '@material-ui/core/Stack';
import Button from '@material-ui/core/Button';

import AuthenHeader from '../../components/AuthenHeader'
import InputCpn from '../../components/InputCpn';

import './style.css'

import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};
function AuthenFormGroup(props) {
    return (
        <div className="authen-FormGroup">
            <label htmlFor={props.title} className="authenForm-Label">{props.title}</label>
            <InputCpn type="text"
                id={props.title}
                name={props.title}
                value=""
                placeholder={'Please enter ' + props.title}>
            </InputCpn>
            <span className="authen-FormGroupNoti"></span>
        </div>
    )
}

function Signup() {
    let history = useHistory();

    function handleClickBack() {
        history.push("/login");
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (

        <div className='signupPage'>
            <AuthenHeader />
            <div className="signupFormWrapper">
                <form action="" className="signupForm">
                    <h1 className="signupForm-Header">Sign up</h1>
                    <div className="signupForm-Main">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                            />
                            {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                            />
                            {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                        </div>

                        <AuthenFormGroup title="Phone number"></AuthenFormGroup>
                        <AuthenFormGroup title="Password"></AuthenFormGroup>
                        <AuthenFormGroup title="Re-Password"></AuthenFormGroup>
                    </div>
                    <div className="signupFormFooter">
                        <Stack direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            onClick={formik.handleSubmit}
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
        </div >
    )
}

export default Signup;
