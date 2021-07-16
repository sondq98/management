import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';


import "./style.css"

import MainHeader from '../../components/MainHeader';

function Profile() {
    let history = useHistory();

    const handleClickDetail = () => {
        history.push("/profile/detail");
    }
    const handleClickBack = () => {
        history.push("/home");
    }
    return (
        <div className="Profile">
            <MainHeader></MainHeader>
            <div className="profileBasic">
                <div className="left">
                    <div className="userImg">
                        <div className="Img">
                            <img src="/user.png" alt="user" />
                        </div>
                        <div className="userName">Nguyen Thi Ngoc Bich</div>
                    </div>
                </div>
                <div className="right">
                    <div className="headerPanel">
                        User Infomation
                    </div>
                    <div className="bodyPanel">
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
                    <div className="footerPanel">
                        <div className="buttonGroup">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleClickDetail}
                                className="btn-30"
                            >
                                Detail
                            </Button>
                            <Button
                                variant="contained"
                                className="btn-30"
                                onClick={handleClickBack}
                                sx={{
                                    bgcolor: '#212121',
                                    '&:hover': {
                                        bgcolor: '#080808'
                                    }
                                }}
                            >
                                Back
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
