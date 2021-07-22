import React from 'react';
import { useHistory } from "react-router-dom";
import { Formik, useField } from 'formik';
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

const signupFormSchema = Yup.object().shape({
    firstName: Yup.string()
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    phoneNumber: Yup.string()
        .min(7, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .required('Required'),
    rePassword: Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Re-password not same password"
        )
    })
});

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
                        phoneNumber: '',
                        password: '',
                        rePassword: ''
                    }}
                    validationSchema={signupFormSchema}
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
                        } = props;
                        return (
                            <form action="" className="signupForm">
                                <h1 className="signupForm-Header">Sign up</h1>
                                <div className="signupForm-Main">
                                    <div className="signupForm-InputGroup">
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
                                        <div className="space"></div>
                                        <MyTextInput
                                            label="Last Name"
                                            name="lastName"
                                            type="text"
                                            placeholder="Please enter last name"
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
                                    <MyTextInput
                                        label="Email"
                                        name="email"
                                        type="text"
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
                                        label="Phone number"
                                        name="phoneNumber"
                                        type="text"
                                        placeholder="Please enter Phone number"
                                        value={values.phoneNumber}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.phoneNumber && touched.phoneNumber
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
                                    <MyTextInput
                                        label="Re-Password"
                                        name="rePassword"
                                        type="password"
                                        placeholder="Please enter Re-Password"
                                        value={values.rePassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.rePassword && touched.rePassword
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
