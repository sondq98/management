import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Formik, Form, useField } from 'formik';
import Stack from '@material-ui/core/Stack';
import Button from '@material-ui/core/Button';
import AuthenHeader from '../../components/AuthenHeader';
import * as Yup from 'yup';

import './style.css'

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="authen-FormGroup">
            <label htmlFor={props.id || props.name} className="authenForm-Label">{label}</label>
            <input
                {...field}
                {...props}
            />

            <div className="authen-FormGroupNoti">
                {meta.touched && meta.error ? (
                    <span className="errorNoti">{meta.error}</span>
                ) : null}
            </div>
        </div>
    )
}

const validateRules = {
    required: function (inputValue) {
        return inputValue ? undefined : 'Vui lòng nhập trường này';
    },
    email: function (inputValue) {
        var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        return mailFormat.test(inputValue) ? undefined : 'Địa chỉ email không hợp lệ!';
    },
    min: function (min) {
        return function (inputValue) {
            return inputValue.length >= min ? undefined : `Độ dài tối thiểu ${min} kí tự!`;
        }
    },
    max: function (max) {
        return function (inputValue) {
            return inputValue.length <= max ? undefined : `Độ dài tối đa ${max} kí tự!`;
        }
    },
}

function Login() {
    let history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function validateLogin() {

    }

    function handleClickLogin() {
        history.push("/home");
    }
    function handleClickSignup() {
        history.push("/signup");
    }
    return (
        <div className='loginPage'>
            <AuthenHeader />
            <div className="loginFormWrapper">
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        password: Yup.string()
                            .min(8, 'Password is too short - should be 8 chars minimum.')
                            .required('Required'),

                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            dirty,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            handleReset
                        } = props;
                        return (
                            <form action="" className="loginForm">
                                <h1 className="loginForm-Header">Login</h1>
                                <div className="loginForm-Main">


                                    <MyTextInput
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        placeholder="Please enter email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.email && touched.email
                                                ? "authenFormInput error"
                                                : "authenFormInput"
                                        }
                                    />
                                    <MyTextInput
                                        label="Password"
                                        name="password"
                                        type="password"
                                        placeholder="Please enter password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.password && touched.password
                                                ? "authenFormInput error"
                                                : "authenFormInput"
                                        }
                                    />
                                </div>
                                <div className="loginFormBtns">
                                    <Stack direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={0}
                                    >
                                        <Button variant="contained" onClick={handleClickLogin} className="btn-40" color="success">Login</Button>
                                        <Button variant="contained" onClick={handleClickSignup} className="btn-40">Sign up</Button>
                                    </Stack>
                                </div>
                                <div className="loginFormNoti hide">
                                    <span className="formNoti">Account Invalid!</span>
                                    <span className="formNoti">Please check your email and password</span>
                                </div>
                            </form>
                        );
                    }}
                </Formik>
                {/* <Formik
                    initialValues={{ email: "" }}
                    onSubmit={async values => {
                        await new Promise(resolve => setTimeout(resolve, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email()
                            .required("Required")
                    })}
                >
                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            dirty,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            handleReset
                        } = props;
                        return (
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email" style={{ display: "block" }}>
                                    Email
                                </label>
                                <input
                                    id="email"
                                    placeholder="Enter your email"
                                    type="text"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.email && touched.email
                                            ? "text-input error"
                                            : "text-input"
                                    }
                                />
                                {errors.email && touched.email && (
                                    <div className="input-feedback">{errors.email}</div>
                                )}

                                <button
                                    type="button"
                                    className="outline"
                                    onClick={handleReset}
                                    disabled={!dirty || isSubmitting}
                                >
                                    Reset
                                </button>
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>

                            </form>
                        );
                    }}
                </Formik> */}
            </div>
        </div>
    )
}

export default Login
