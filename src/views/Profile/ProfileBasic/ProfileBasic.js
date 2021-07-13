import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfileBasic.css'

import MainHeader from '../../../components/MainHeader/MainHeader'

class ProfileBasic extends Component {
    render() {
        return (
            <div>
                <MainHeader></MainHeader>
                <div className="userInfoWrapper">
                    <div className="left">
                        <div className="userImg">
                            <div className="Img">
                                <img src="/user.png" alt="user" />
                            </div>
                            <div className="userName">Nguyen Thi Ngoc Bich</div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="header">
                            User Infomation
                        </div>
                        <div className="main">
                            <ul className="listInfo">
                                <li className="info">
                                    <p className="infoTitle">Full name</p>
                                    <p className="infoContent">Nguyen Thi Ngoc Bich</p>
                                </li>
                                <li className="info">
                                    <p className="infoTitle">Date of Birth </p>
                                    <p className="infoContent">1999-09-09</p>
                                </li>
                                <li className="info">
                                    <p className="infoTitle">Email</p>
                                    <p className="infoContent">Acb@gmail.com</p>
                                </li>
                                <li className="info">
                                    <p className="infoTitle">Work Email</p>
                                    <p className="infoContent">bich.nguyenthingoc@vti.com.vn</p>
                                </li>
                                <li className="info">
                                    <p className="infoTitle">Phone number</p>
                                    <p className="infoContent">0123456789</p>
                                </li>
                                <li className="info">
                                    <p className="infoTitle">Address</p>
                                    <p className="infoContent">78 Duy Tan Cau Giay Ha Noi</p>
                                </li>
                                <li className="info">
                                    <p className="infoTitle">Join Date</p>
                                    <p className="infoContent">2019-07-01</p>
                                </li>
                                <li className="info">
                                    <p className="infoTitle">Company</p>
                                    <p className="infoContent">VTI</p>
                                </li>
                                <li className="info">
                                    <p className="infoTitle">Branch</p>
                                    <p className="infoContent">Ha Noi</p>
                                </li>
                                <li className="info">
                                    <p className="infoTitle">Division</p>
                                    <p className="infoContent">D5</p>
                                </li>
                                <li className="info">
                                    <p className="infoTitle">Role</p>
                                    <p className="infoContent">Developer</p>
                                </li>
                                <li className="info">
                                    <p className="infoTitle">Postion</p>
                                    <p className="infoContent">Frontend Develop</p>
                                </li>
                            </ul>
                        </div>
                        <div className="br"></div>
                        <div className="footer">
                            <div className="buttonGroup">
                                <Link to="/profile/detail">
                                    <Button variant="primary" type="button" className="btn-30">
                                        Detail
                                    </Button>
                                </Link>

                                <Button variant="dark" type="button" className="btn-30">
                                    Back
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileBasic;
