import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Typography,
} from "@material-ui/core";
import {
    CheckCircleOutline,
    HelpOutline,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useHistory } from "react-router";
import StyledButton from "../../components/Button";
import MainHeader from "../../components/MainHeader";
import StyledInput from "../../components/TextField";
function BranchDetail() {
    const route = useHistory();
    const [isShowConfirmModal, setIsShowConfirmModal] = useState(false);
    const [isShowChangeModal, setIsShowChangeModal] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const handleUpdate = () => {
        setTimeout(() => {
            setIsSuccess(true);
        }, 3000);
    };
    return (
        <React.Fragment>
            <MainHeader />
            <div className="wrapper">
                <h3 className="headerPanel">Branch Register</h3>
                <form className="form">
                    <Grid container item xs={10}>
                        <Grid container pl={3} rowGap={3}>
                            <Grid container item mb={0}>
                                <Grid item xs={2} className="form-group">
                                    <label htmlFor="">Company <span className="required">*</span></label>
                                </Grid>
                                <Grid item>
                                    <StyledInput
                                        size="small"
                                        style={{ marginRight: "20px", paddingLeft: "10px" }}
                                        placeholder="Code"
                                    />
                                </Grid>
                                <Grid item>
                                    <StyledInput
                                        size="medium"
                                        placeholder="Please enter company name"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid item xs={2} className="form-group">
                                    <label htmlFor="">Branch Code <span className="required">*</span></label>
                                </Grid>
                                <Grid item>
                                    <StyledInput
                                        size="small"
                                        style={{ marginRight: "20px", paddingLeft: "10px" }}
                                        placeholder="Code"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid item xs={2} className="form-group">
                                    <label htmlFor="">
                                        Branch Name <span className="required">*</span>
                                    </label>
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={1}>
                                        <Grid item>
                                            <StyledInput
                                                size="medium"
                                                placeholder="Branch name"
                                                read-only
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid item xs={2} className="form-group">
                                    <label htmlFor="">
                                        Address
                                    </label>
                                </Grid>
                                <Grid item>
                                    <StyledInput placeholder="Address" />
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid item xs={2} className="form-group">
                                    <label htmlFor="">
                                        Area <span className="required">*</span>
                                    </label>
                                </Grid>
                                <Grid item>
                                    <StyledInput size="medium" placeholder="Email" />
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid item xs={2} className="form-group">
                                    <label htmlFor="">
                                        Email <span className="required">*</span>
                                    </label>
                                </Grid>
                                <Grid item>
                                    <StyledInput size="medium" placeholder="Email" />
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid item xs={2} className="form-group">
                                    <label htmlFor="">
                                        Phone Number <span className="required">*</span>
                                    </label>
                                </Grid>
                                <Grid item>
                                    <StyledInput size="medium" placeholder="Phone Number" />
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid item xs={2} className="form-group">
                                    <label htmlFor="website">Website</label>
                                </Grid>
                                <Grid item>
                                    <StyledInput
                                        name="website"
                                        size="medium"
                                        placeholder="Website"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid item xs={2} className="form-group">
                                    <label htmlFor="website">Status</label>
                                </Grid>
                                <Grid item>
                                    <p style={{ color: "green", textTransform: "uppercase" }}>
                                        working
                                    </p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <hr style={{ marginTop: '20px' }} />
                    <div className="form-btn">
                        <div className="wrapper-btn">
                            <StyledButton
                                variant="contained"
                                color="success"
                                onClick={() => setIsShowChangeModal(!isShowChangeModal)}
                            >
                                <Typography color="white" container="span">
                                    Working
                                </Typography>
                            </StyledButton>
                            <StyledButton
                                variant="contained"
                                color="warning"
                                sx={{ color: "white" }}
                                onClick={() => setIsShowChangeModal(!isShowChangeModal)}
                            >
                                Pending
                            </StyledButton>
                            <StyledButton
                                variant="contained"
                                color="error"
                                onClick={() => setIsShowChangeModal(!isShowChangeModal)}
                            >
                                Stop
                            </StyledButton>
                        </div>
                        <div className="wrapper-btn">
                            <StyledButton
                                variant="contained"
                                color="primary"
                                onClick={() => setIsShowConfirmModal(!isShowConfirmModal)}
                            >
                                Update
                            </StyledButton>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    route.push("/branch");
                                }}
                                className="btn-30"
                                sx={{
                                    bgcolor: '#323232',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        bgcolor: '#080808'
                                    }
                                }}
                            >
                                Back
                            </Button>
                        </div>
                    </div>
                </form>
            </div>

            {/* Dialog confirm update */}
            <Dialog
                open={isShowConfirmModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Confirm Dialog</DialogTitle>
                <DialogContent>
                    <Grid container>
                        <Grid item>
                            <HelpOutline />
                        </Grid>
                        <Grid item>
                            <DialogContentText
                                startIcon={<HelpOutline />}
                                id="alert-dialog-description"
                            >
                                Do you want to update these Branch?
                            </DialogContentText>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <StyledButton
                        variant="contained"
                        color="success"
                        sx={{ color: "white" }}
                        onClick={() => handleUpdate()}
                    >
                        OK
                    </StyledButton>
                    <Button
                        variant="contained"
                        onClick={() => setIsShowConfirmModal(!isShowConfirmModal)}
                        className="btn-30"
                        sx={{
                            bgcolor: '#323232',
                            textTransform: 'capitalize',
                            '&:hover': {
                                bgcolor: '#080808'
                            }
                        }}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Dialog confirm change status */}
            <Dialog
                open={isShowChangeModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Confirm Dialog</DialogTitle>
                <DialogContent>
                    <Grid container>
                        <Grid item>
                            <HelpOutline />
                        </Grid>
                        <Grid item>
                            <DialogContentText
                                startIcon={<HelpOutline />}
                                id="alert-dialog-description"
                            >
                                Do you want to change status these Branch?
                            </DialogContentText>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <StyledButton
                        variant="contained"
                        color="success"
                        sx={{ color: "white" }}
                    >
                        OK
                    </StyledButton>
                    <Button
                        variant="contained"
                        onClick={() => setIsShowChangeModal(!isShowChangeModal)}
                        className="btn-30"
                        sx={{
                            bgcolor: '#323232',
                            textTransform: 'capitalize',
                            '&:hover': {
                                bgcolor: '#080808'
                            }
                        }}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            {/* Dialog update successfully */}
            <Dialog
                open={isSuccess}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <Grid container>
                        <Grid item>
                            <CheckCircleOutline />
                        </Grid>
                        <Grid item>
                            <DialogContentText
                                startIcon={<HelpOutline />}
                                id="alert-dialog-description"
                            >
                                Update Company successfully!!
                            </DialogContentText>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <StyledButton
                        variant="contained"
                        color="success"
                        sx={{ color: "white" }}
                        onClick={() => route.push("/branch/")}
                    >
                        Close
                    </StyledButton>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default BranchDetail;
