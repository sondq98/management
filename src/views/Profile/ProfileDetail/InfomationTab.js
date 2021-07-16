import { useHistory } from "react-router-dom";
import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { Input } from "@material-ui/core";

import StyledInput from '../../../components/InputCpn';

import "./style.css"

function InfomationTab() {
    let history = useHistory();

    const handleClickBack = () => {
        history.push("/profile");
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
                                <StyledInput
                                    size="small"
                                    style={{ marginRight: "20px", paddingLeft: "10px" }}
                                    placeholder="Code"
                                />
                                <StyledInput
                                    size="medium"
                                    placeholder="Please enter company name"
                                />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={3} className="form-group">
                                <label htmlFor="">Branch</label>
                            </Grid>
                            <Grid container item xs={9}>
                                <StyledInput
                                    size="small"
                                    style={{ marginRight: "20px", paddingLeft: "10px" }}
                                    placeholder="Code"
                                />
                                <StyledInput
                                    size="medium"
                                    placeholder="Please enter company name"
                                />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={3} className="form-group">
                                <label htmlFor="">Division</label>
                            </Grid>
                            <Grid container item xs={9}>
                                <StyledInput
                                    size="small"
                                    style={{ marginRight: "20px", paddingLeft: "10px" }}
                                    placeholder="Code"
                                /><StyledInput
                                    size="medium"
                                    placeholder="Please enter company name"
                                />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={3} className="form-group">
                                <label htmlFor="">Employee</label>
                            </Grid>
                            <Grid container item xs={9}>
                                <StyledInput
                                    size="small"
                                    style={{ marginRight: "20px", paddingLeft: "10px" }}
                                    placeholder="Code"
                                /><StyledInput
                                    size="medium"
                                    placeholder="Please enter company name"
                                />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={3} className="form-group">
                                <label htmlFor="">Work email</label>
                            </Grid>
                            <Grid item>
                                <StyledInput size="medium" placeholder="Email" />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={3} className="form-group">
                                <label htmlFor="">Join Date</label>
                            </Grid>
                            <Grid item>
                                <StyledInput size="medium" placeholder="Phone number" />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={3} className="form-group">
                                <label htmlFor="">Experience</label>
                            </Grid>
                            <Grid item>
                                <StyledInput size="medium" placeholder="Status" />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={3} className="form-group">
                                <label htmlFor="">Type of Contact</label>
                            </Grid>
                            <Grid item>
                                <StyledInput size="medium" placeholder="Status" />
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
                                    <div className="form-logo-preview">
                                        <img src="/user.png" alt="" className="form-logo-preview" />
                                    </div>
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
                                <StyledInput size="large" placeholder="Address" />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={4} className="form-group">
                                <label htmlFor="">Phone number</label>
                            </Grid>
                            <Grid item>
                                <StyledInput size="medium" placeholder="Phone number" />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={4} className="form-group">
                                <label htmlFor="">Date of Birth</label>
                            </Grid>
                            <Grid item>
                                <StyledInput size="medium" placeholder="Date of Birth" />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={4} className="form-group">
                                <label htmlFor="">Email</label>
                            </Grid>
                            <Grid item>
                                <StyledInput size="medium" placeholder="Email" />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={4} className="form-group">
                                <label htmlFor="">ID/Passport No</label>
                            </Grid>
                            <Grid item>
                                <StyledInput size="medium" placeholder="Number" />
                            </Grid>
                        </Grid>
                        <Grid container item mb={2}>
                            <Grid item xs={4} className="form-group">
                                <label htmlFor="">ID/Passport Date</label>
                            </Grid>
                            <Grid item>
                                <StyledInput size="medium" placeholder="Number" />
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

export default InfomationTab;