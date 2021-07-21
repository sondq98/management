import React from 'react';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';

import { getUserData } from "../../store/profile/action";
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
    console.log(props);
    const { profileReducer, dispatch } = props;
    const { userData } = profileReducer;
    
    React.useEffect(() => {
        console.log(props);
        dispatch(getUserData())
    }, [])
    return (
        <div className="Profile">
            <MainHeader></MainHeader>
            <div className="profileBasic">
                <div className="left">
                    <div className="userImg">
                        <div className="Img">
                            <img src={userData.img} alt="user" />
                        </div>
                        <div className="userName">{userData.fullName}</div>
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
                                <p className="infoContent">{userData.fullName}</p>
                            </li>
                            <li className="info">
                                <p className="infoTitle">Birth Day </p>
                                <p className="infoContent">{userData.birthDay}</p>
                            </li>
                            <li className="info">
                                <p className="infoTitle">Email</p>
                                <p className="infoContent">{userData.email}</p>
                            </li>
                            <li className="info">
                                <p className="infoTitle">Work Email</p>
                                <p className="infoContent">{userData.workEmail}</p>
                            </li>
                            <li className="info">
                                <p className="infoTitle">Phone number</p>
                                <p className="infoContent">{userData.phoneNumber}</p>
                            </li>
                            <li className="info">
                                <p className="infoTitle">Address</p>
                                <p className="infoContent">{userData.address}</p>
                            </li>
                            <li className="info">
                                <p className="infoTitle">Join Date</p>
                                <p className="infoContent">{userData.joinDate}</p>
                            </li>
                            <li className="info">
                                <p className="infoTitle">Company</p>
                                <p className="infoContent">{userData.company}</p>
                            </li>
                            <li className="info">
                                <p className="infoTitle">Branch</p>
                                <p className="infoContent">{userData.branch}</p>
                            </li>
                            <li className="info">
                                <p className="infoTitle">Division</p>
                                <p className="infoContent">{userData.division}</p>
                            </li>
                            <li className="info">
                                <p className="infoTitle">Role</p>
                                <p className="infoContent">{userData.role}</p>
                            </li>
                            <li className="info">
                                <p className="infoTitle">Postion</p>
                                <p className="infoContent">{userData.position}</p>
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
    return { dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
