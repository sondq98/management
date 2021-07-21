import React from 'react';
import { useHistory } from "react-router-dom";
import { Formik, Form, useField } from 'formik';
import Stack from '@material-ui/core/Stack';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';


import AuthenHeader from '../../components/AuthenHeader'
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

function Signup() {
    let history = useHistory();
    function handleClickBack() {
        history.push("/login");
    }

    return (

        <div className='signupPage'>
            <AuthenHeader />
            <div className="signupFormWrapper">
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
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
                            <form action="" className="signupForm">
                                <h1 className="signupForm-Header">Sign up</h1>
                                <div className="signupForm-Main">
                                    <MyTextInput
                                        label="First Name"
                                        name="firstName"
                                        type="text"
                                        placeholder="Please enter first name"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.firstName && touched.firstName
                                                ? "authenFormInput error"
                                                : "authenFormInput"
                                        }
                                    />
                                    <MyTextInput
                                        label="First Name"
                                        name="lastName"
                                        type="text"
                                        placeholder="Please enter first name"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.lastName && touched.lastName
                                                ? "authenFormInput error"
                                                : "authenFormInput"
                                        }
                                    />
                                    <MyTextInput
                                        label="First Name"
                                        name="lastName"
                                        type="text"
                                        placeholder="Please enter first name"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.lastName && touched.lastName
                                                ? "authenFormInput error"
                                                : "authenFormInput"
                                        }
                                    />
                                    <MyTextInput
                                        label="Phone number"
                                        name="lastName"
                                        type="text"
                                        placeholder="Please enter Phone number"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.lastName && touched.lastName
                                                ? "authenFormInput error"
                                                : "authenFormInput"
                                        }
                                    />
                                    <MyTextInput
                                        label="Password"
                                        name="lastName"
                                        type="text"
                                        placeholder="Please enter password"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.lastName && touched.lastName
                                                ? "authenFormInput error"
                                                : "authenFormInput"
                                        }
                                    />
                                    <MyTextInput
                                        label="Re-Password"
                                        name="lastName"
                                        type="text"
                                        placeholder="Please enter password"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.lastName && touched.lastName
                                                ? "authenFormInput error"
                                                : "authenFormInput"
                                        }
                                    />
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
                        );
                    }}
                </Formik>
            </div>
        </div >
    )
}

export default Signup;
