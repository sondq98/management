import { Container, Divider, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import StyledButton from "../../../components/Button";
import MainHeader from "../../../components/MainHeader";
import StyledInput from "../../../components/TextField";

function DivisionRegister() {
  const route = useHistory();
  return (
    <>
      <MainHeader />
      <div className="wrapper">
        <h3 className="wrapper__header">Division Register</h3>
        <Container>
          <Grid mt={3} pb={4} spacing={2} container>
            <Grid container item>
              <Grid xs={1.5} container display="flex" alignItems="center" item>
                <label>Company</label>
              </Grid>
              <Grid xs={9} columnGap={1} container item>
                <StyledInput size="small" placeholder="Company code" />
                <StyledInput
                  size="medium"
                  placeholder="Please enter Company name"
                />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid xs={1.5} container display="flex" alignItems="center" item>
                <label>Branch (Option)</label>
              </Grid>
              <Grid xs={9} columnGap={1} container item>
                <StyledInput size="small" placeholder="Branch code" />
                <StyledInput
                  size="medium"
                  placeholder="Please enter Branch name"
                />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid xs={1.5} container display="flex" alignItems="center" item>
                <label>Division Code</label>
              </Grid>
              <Grid xs={9} columnGap={1} container item>
                <StyledInput size="small" placeholder="Division code" />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid xs={1.5} container display="flex" alignItems="center" item>
                <label>Division Name</label>
              </Grid>
              <Grid xs={9} columnGap={1} container item>
                <StyledInput
                  size="medium"
                  placeholder="Please enter Division name"
                />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid xs={1.5} container display="flex" alignItems="center" item>
                <label>Address</label>
              </Grid>
              <Grid xs={9} columnGap={1} container item>
                <StyledInput
                  size="large"
                  placeholder="Please enter Division name"
                />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid xs={1.5} container display="flex" alignItems="center" item>
                <label>Area</label>
              </Grid>
              <Grid xs={9} columnGap={1} container item>
                <StyledInput size="medium" placeholder="Select area" />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid xs={1.5} container display="flex" alignItems="center" item>
                <label>Email</label>
              </Grid>
              <Grid xs={9} columnGap={1} container item>
                <StyledInput size="medium" placeholder="Please enter Email" />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid xs={1.5} container display="flex" alignItems="center" item>
                <label>Phone Number</label>
              </Grid>
              <Grid xs={9} columnGap={1} container item>
                <StyledInput
                  size="medium"
                  placeholder="Please enter Phone number"
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Divider />
        <Container>
          <div className="wrapper-button">
            <div className="wrapper-button__div button-2">
              <StyledButton color="success" variant="contained">
                Register
              </StyledButton>
              <StyledButton
                onClick={() => {
                  route.goBack();
                }}
                color="inherit"
                variant="contained"
              >
                Back
              </StyledButton>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default DivisionRegister;
