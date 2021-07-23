import React from 'react';
import { useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import Button from '@material-ui/core/Button';

import MainHeader from '../../components/MainHeader';

import "./style.css"

const Profile = (props) => {
    let history = useHistory();
    const handleClickDetail = () => {
        history.push("/profile/detail");
    }
    const handleClickBack = () => {
        history.push("/home");
    }
    
    const {userData} = props.profileReducer;

    return (
        <div className="Profile">
            <MainHeader></MainHeader>
            <div className="profileBasic">
                <div className="left">
                    <div className="userImg">
                        <div className="Img">
                            <img src={userData.infomation.img} alt="user" />
                        </div>
                        <div className="userName">{userData.infomation.fullName}</div>
                    </div>
                </div>
                <div className="right">
                    <div className="headerPanel">
                        User Infomation
                    </div>
                    <div className="bodyPanel">
                        <ul className="listInfo">
                            <li className="info">
                                <div className="infoTitle">Full name</div>
                                <div className="infoContent">{userData.infomation.fullName}</div>
                            </li>
                            <li className="info">
                                <div className="infoTitle">Birth Day </div>
                                <div className="infoContent">{userData.infomation.birthDay}</div>
                            </li>
                            <li className="info">
                                <div className="infoTitle">Email</div>
                                <div className="infoContent">{userData.infomation.email}</div>
                            </li>
                            <li className="info">
                                <div className="infoTitle">Work Email</div>
                                <div className="infoContent">{userData.infomation.workEmail}</div>
                            </li>
                            <li className="info">
                                <div className="infoTitle">Phone number</div>
                                <div className="infoContent">{userData.infomation.phoneNumber}</div>
                            </li>
                            <li className="info">
                                <div className="infoTitle">Address</div>
                                <div className="infoContent">{userData.infomation.address}</div>
                            </li>
                            <li className="info">
                                <div className="infoTitle">Join Date</div>
                                <div className="infoContent">{userData.infomation.joinDate}</div>
                            </li>
                            <li className="info">
                                <div className="infoTitle">Company</div>
                                <div className="infoContent">{userData.infomation.company}</div>
                            </li>
                            <li className="info">
                                <div className="infoTitle">Branch</div>
                                <div className="infoContent">{userData.infomation.branch}</div>
                            </li>
                            <li className="info">
                                <div className="infoTitle">Division</div>
                                <div className="infoContent">{userData.infomation.division}</div>
                            </li>
                            <li className="info">
                                <div className="infoTitle">Role</div>
                                <div className="infoContent">{userData.infomation.role}</div>
                            </li>
                            <li className="info">
                                <div className="infoTitle">Postion</div>
                                <div className="infoContent">{userData.infomation.position}</div>
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

const mapStateToProps = (state) => {
    return { profileReducer: state.profileReducer };
};
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
