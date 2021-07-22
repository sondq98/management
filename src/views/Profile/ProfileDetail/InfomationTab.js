import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import Input from "@material-ui/core/Input";

import StyledInput from '../../../components/InputCpn';
import { getUserData, getUserInfomation } from "../../../store/profile/action";


const MyTextInput = ({ ...props }) => {
    return (
        <input
            {...props}
            className="authenFormInput"
            style={{
                width: props.size === "small" ? "110px"
                    : props.size === "medium" ? "250px"
                        : "330px",
                paddingLeft: "10px",
                marginRight: "20px"
            }}
        />
    )
}


function InfomationTab(props) {
    let history = useHistory();
    const handleClickBack = () => {
        history.push("/profile");
    }
    const { userData } = props.profileReducer;
    const [userInfomation, setUserInfomation] = React.useState(userData.infomation)

    const onChangeInput = (e) => {
        let field = e.target.name ? e.target.name : '';
        let newUserInfomation = { ...userInfomation }
        newUserInfomation[field] = e.target.value
        setUserInfomation(newUserInfomation)
    }

    const onClickUpdate = (e) => {
    }
    return (
        <div className="infomationTab">
            <div className="mainPanel">
                <div className="infoInCompany">
                    <Grid container ml={2} mt={0} rowGap={1}>
                        <Grid container item mb={2}>
                            <Grid item xs={3} className="form-group">
                                <label htmlFor="">Company</label>
                            </Grid>
                            <Grid container item xs={9}>
                                <MyTextInput
                                    size="small"
                                    placeholder="Code"
                                    disabled
                                />
                                <MyTextInput
                                    size="medium"
                                    placeholder={userInfomation.company}
                                    disabled
                                />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={3} className="form-group">
                                <label htmlFor="">Branch</label>
                            </Grid>
                            <Grid container item xs={9}>
                                <MyTextInput
                                    size="small"
                                    placeholder="Code"
                                    disabled
                                />
                                <MyTextInput
                                    size="medium"
                                    placeholder={userInfomation.branch}
                                    disabled
                                />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={3} className="form-group">
                                <label htmlFor="">Division</label>
                            </Grid>
                            <Grid container item xs={9}>
                                <MyTextInput
                                    size="small"
                                    placeholder="Code"
                                    disabled
                                />
                                <MyTextInput
                                    size="medium"
                                    placeholder={userInfomation.division}
                                    disabled
                                />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={3} className="form-group">
                                <label htmlFor="">Employee</label>
                            </Grid>
                            <Grid container item xs={9}>
                                <MyTextInput
                                    size="small"
                                    placeholder={userInfomation.id}
                                    disabled
                                />
                                <MyTextInput
                                    size="medium"
                                    placeholder={userInfomation.fullName}
                                    disabled
                                />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={3} className="form-group">
                                <label htmlFor="">Work email</label>
                            </Grid>
                            <Grid item>
                                <MyTextInput
                                    size="medium"
                                    placeholder={userInfomation.workEmail}
                                    disabled
                                />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={3} className="form-group">
                                <label htmlFor="">Join Date</label>
                            </Grid>
                            <Grid item>
                                <MyTextInput
                                    size="medium"
                                    type="date"
                                    value={userInfomation.joinDate}
                                    disabled
                                />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={3} className="form-group">
                                <label htmlFor="">Experience</label>
                            </Grid>
                            <Grid item>
                                <MyTextInput
                                    size="medium"
                                    type="text"
                                    value={userInfomation.experience}
                                    disabled
                                />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={3} className="form-group">
                                <label htmlFor="">Type of Contact</label>
                            </Grid>
                            <Grid item>
                                <MyTextInput
                                    size="medium"
                                    type="text"
                                    value={userInfomation.contract}
                                    disabled
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div className="infoPersonal">
                    <Grid container ml={2} mt={0} rowGap={1}>
                        <Grid container item mb={1} xs={7} alignItems="flex-start">
                            <Grid
                                container
                                alignItems="center"
                                justifyContent="space-between"
                            >

                                <Grid item>
                                    <img src="/user.png" alt="" className="form-logo-preview" />
                                </Grid>
                                <Grid item>
                                    <label htmlFor="contained-button-file">
                                        <Input
                                            accept="image/*"
                                            id="contained-button-file"
                                            multiple
                                            type="file"
                                            style={{ display: "none" }}
                                        />
                                        <Button
                                            variant="contained"
                                            component="span"
                                            startIcon={<PhotoCamera />}
                                        >
                                            <Typography>Upload</Typography>
                                        </Button>
                                    </label>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container item mb={2}>
                            <Grid item xs={4} className="form-group">
                                <label htmlFor="">Address</label>
                            </Grid>
                            <Grid item>
                                <MyTextInput
                                    name="address"
                                    value={userInfomation.address}
                                    placeholder="Address"
                                    onChange={onChangeInput} />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={4} className="form-group">
                                <label htmlFor="">Phone number</label>
                            </Grid>
                            <Grid item>
                                <MyTextInput size="medium" placeholder="Phone number" value={userInfomation.phoneNumber} onChange={onChangeInput} />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={4} className="form-group">
                                <label htmlFor="">Date of Birth</label>
                            </Grid>
                            <Grid item>
                                <MyTextInput size="medium" placeholder="Date of Birth" value={userInfomation.birthDay} onChange={onChangeInput} />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={4} className="form-group">
                                <label htmlFor="">Email</label>
                            </Grid>
                            <Grid item>
                                <MyTextInput size="medium" placeholder="Email" value={userInfomation.email} onChange={onChangeInput} />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={4} className="form-group">
                                <label htmlFor="">ID/Passport No</label>
                            </Grid>
                            <Grid item>
                                <MyTextInput size="medium" placeholder="Number" value={userInfomation.idCode} onChange={onChangeInput} />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={4} className="form-group">
                                <label htmlFor="">ID/Passport Date</label>
                            </Grid>
                            <Grid item>
                                <MyTextInput size="medium" placeholder="Number" value={userInfomation.idDate} onChange={onChangeInput} />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div>
                <div className="br"></div>
                <div className="footerPanel">
                    <div className="buttonGroup">
                        <Button
                            variant="contained"
                            color="success"
                            className="btn-30"
                            sx={{
                                textTransform: 'capitalize'
                            }}
                        >
                            Update
                        </Button>
                        <Button
                            variant="contained"
                            className="btn-30"
                            onClick={handleClickBack}
                            sx={{
                                textTransform: 'capitalize',
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
    )
}

const mapStateToProps = (state) => {
    return {
        profileReducer: state.profileReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return { dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(InfomationTab);