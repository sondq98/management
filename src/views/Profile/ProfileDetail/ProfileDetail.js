import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfileDetail.css'

import MainHeader from '../../../components/MainHeader/MainHeader'

class ProfileDetail extends Component {
    render() {
        return (
            <div>
                <MainHeader></MainHeader>
                <div className="profileWrapper">
                    <div className="header">
                        Profile
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileDetail;
