import React from 'react';
import { useHistory } from "react-router-dom";
import { Formik, useField } from 'formik';
import Stack from '@material-ui/core/Stack';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';

import AuthenHeader from '../../components/AuthenHeader';
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

function Login() {
    let history = useHistory();
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
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        } = props;
                        return (
                            <form action="" className="loginForm" onSubmit={handleSubmit}>
                                <h1 className="loginForm-Header">Login</h1>
                                <div className="loginForm-Main">


                                    <MyTextInput
                                        label="Email"
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
                                        <Button variant="contained" type="submit" className="btn-40" color="success">Login</Button>
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
            </div>
        </div>
    )
}

export default Login
