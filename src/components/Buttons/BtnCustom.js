import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Stack from '@material-ui/core/Stack';
import { purple } from '@material-ui/core/colors';

const authenGreen = '#18C090';
const authenSky = '#30C0F0';
const authenOcean = '#0058FF';
const authenBlack = '#000000';

const AuthenBtnGreen = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    width: '134px',
    fontSize: 14,
    padding: '6px 12px',
    // border: '1px solid',
    borderRadius: '6px',
    lineHeight: 2,
    backgroundColor: '#18C090',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#0ead5d',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        outline: 'none',
        border: 'none',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

const AuthenBtnSky = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    width: '134px',
    fontSize: 14,
    padding: '6px 12px',
    // border: '1px solid',
    borderRadius: '6px',
    lineHeight: 2,
    backgroundColor: '#30C0F0',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#00b0ff',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

const AuthenBtnBlack = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    width: '134px',
    fontSize: 14,
    padding: '6px 12px',
    // border: '1px solid',
    borderRadius: '6px',
    lineHeight: 2,
    backgroundColor: '#000000',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#000000dd',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#000000bb',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

export default function BtnCustom(props) {
    if (props.color === 'green') {
        return (
            <AuthenBtnGreen variant="contained" >
                {props.children}
            </AuthenBtnGreen>
        )
    } else if (props.color === 'sky') {
        return (
            <AuthenBtnSky variant="contained" >
                {props.children}
            </AuthenBtnSky>
        )
    } else if (props.color === 'dark') {
        return (
            <AuthenBtnBlack variant="contained" >
                {props.children}
            </AuthenBtnBlack>
        )
    }
}
