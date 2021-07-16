import MainHeader from "../../components/MainHeader";
import "./style.css";
import StyledButton from "../../components/Button";
import { Input, Button, Grid, Typography } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import StyledInput from "../../components/TextField";
import { useHistory } from "react-router-dom";
function CompanyRegister() {
  const route = useHistory();
  return (
    <div>
      <MainHeader />
      <div className="wrapper">
        <h3 className="wrapper-header">Company Register</h3>
        <form className="form">
          <Grid
            container
            columns={18}
            direction="row"
            justifyContent="center"
            paddingBottom={15}
            borderBottom="1px solid lightgray"
          >
            <Grid container item xs={10}>
              <Grid container rowGap={3}>
                <Grid container>
                  <Grid item xs={4}>
                    <label htmlFor="">
                      Company Code <span className="required">*</span>
                    </label>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={1}>
                      <Grid item>
                        <StyledInput
                          disableUnderline={true}
                          placeholder="Code"
                          size="small"
                          required
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={4}>
                    <label htmlFor="">
                      Company Name <span className="required">*</span>
                    </label>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={1}>
                      <Grid item>
                        <StyledInput
                          size="medium"
                          placeholder="Company name"
                          read-only
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="">
                    Address <span className="required">*</span>
                  </label>
                </Grid>
                <Grid item>
                  <StyledInput placeholder="Address" />
                </Grid>
                <Grid container>
                  <Grid item xs={4}>
                    <label htmlFor="">
                      Email <span className="required">*</span>
                    </label>
                  </Grid>
                  <Grid item>
                    <StyledInput size="medium" placeholder="Email" />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={4}>
                    <label htmlFor="">
                      Phone Number <span className="required">*</span>
                    </label>
                  </Grid>
                  <Grid item>
                    <StyledInput size="medium" placeholder="Phone Number" />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={4}>
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
                <Grid container>
                  <Grid item xs={4}>
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
            <Grid container item xs={5} alignItems="flex-start">
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <label style={{ width: "fit-content" }}>
                    Logo <span className="required">*</span>
                  </label>
                </Grid>
                <Grid item>
                  <div className="form-logo-preview"></div>
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
          </Grid>
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
        </form>
      </div>
    </div>
  );
}

export default CompanyRegister;
