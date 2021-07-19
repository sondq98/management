import MainHeader from "../../components/MainHeader";
import Button from '@material-ui/core/Button';

import StyledButton from "../../components/Button";
import { Grid } from "@material-ui/core";
import StyledInput from "../../components/TextField";
import { useHistory } from "react-router-dom";
function BranchRegister() {
    const route = useHistory();
    return (
        <div>
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
                                <Grid item xs={2}>
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
                                <Grid item xs={2}>
                                    <label htmlFor="">
                                        Address
                                    </label>
                                </Grid>
                                <Grid item>
                                    <StyledInput placeholder="Address" />
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid item xs={2}>
                                    <label htmlFor="">
                                        Area <span className="required">*</span>
                                    </label>
                                </Grid>
                                <Grid item>
                                    <StyledInput size="medium" placeholder="Email" />
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid item xs={2}>
                                    <label htmlFor="">
                                        Email <span className="required">*</span>
                                    </label>
                                </Grid>
                                <Grid item>
                                    <StyledInput size="medium" placeholder="Email" />
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid item xs={2}>
                                    <label htmlFor="">
                                        Phone Number <span className="required">*</span>
                                    </label>
                                </Grid>
                                <Grid item>
                                    <StyledInput size="medium" placeholder="Phone Number" />
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid item xs={2}>
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
                        </Grid>
                    </Grid>
                    <hr style={{ marginTop: '20px' }} />
                    <div className="form-btn">
                        <div></div>
                        <div className="wrapper-btn">
                            <StyledButton
                                color="success"
                                sx={{ color: "white" }}
                                variant="contained"
                            >
                                Register
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
        </div>
    );
}

export default BranchRegister;
