import MainHeader from "../../components/MainHeader";
import Button from '@material-ui/core/Button';

import StyledButton from "../../components/Button";
import { Grid } from "@material-ui/core";
import StyledInput from "../../components/TextField";
import { useHistory } from "react-router-dom";
function ProjectRegister() {
    const route = useHistory();
    return (
        <div>
            <MainHeader />
            <div className="wrapper">
                <h3 className="headerPanel">Project Register</h3>
                <form className="form">
                    <Grid container item xs={13}>
                        <Grid container pl={3} rowGap={3}>
                            <Grid container item mb={0}>
                                <Grid xs={2} alignItems="center" container item>
                                    <label htmlFor="">Company <span className="required">*</span></label>
                                </Grid>
                                <Grid item>
                                    <Grid container item columnGap={1}>
                                        <StyledInput size="small" placeholder="Branch code" />
                                        <StyledInput
                                            size="medium"
                                            placeholder="Please enter Branch name "
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid xs={2} alignItems="center" container item>
                                    <label>Branch (Optional) </label>
                                </Grid>
                                <Grid item>
                                    <Grid container item columnGap={1}>
                                        <StyledInput size="small" placeholder="Branch code" />
                                        <StyledInput
                                            size="medium"
                                            placeholder="Please enter Branch name "
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid xs={2} alignItems="center" container item>
                                <label htmlFor="">Division <span className="required">*</span></label>
                                </Grid>
                                <Grid item>
                                    <Grid container item columnGap={1}>
                                        <StyledInput size="small" placeholder="Branch code" />
                                        <StyledInput
                                            size="medium"
                                            placeholder="Please enter Branch name "
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid xs={2} alignItems="center" container item>
                                <label htmlFor="">Project <span className="required">*</span></label>
                                </Grid>
                                <Grid item>
                                    <Grid container item columnGap={1}>
                                        <StyledInput
                                            size="medium"
                                            placeholder="Enter the Project name"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid xs={2} alignItems="center" container item>
                                <label htmlFor="">PM <span className="required">*</span></label>
                                </Grid>
                                <Grid item>
                                    <Grid container item columnGap={1}>
                                        <StyledInput
                                            size="medium"
                                            placeholder="Enter the Project name"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item container display="flex" alignItems="center">
                                <Grid xs={2} alignItems="center" container item>
                                    <label>Start Date <span className="required">*</span></label>
                                </Grid>
                                <Grid item>
                                    <Grid container item columnGap={1}>
                                        <StyledInput
                                            type="date"
                                            size="medium"
                                            placeholder="Please enter Branch name "
                                        />
                                    </Grid>
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
                                    route.push("/project");
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

export default ProjectRegister;
