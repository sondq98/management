import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Input,
  Typography,
} from "@material-ui/core";
import {
  CheckCircleOutline,
  HelpOutline,
  PhotoCamera,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useHistory } from "react-router";
import StyledButton from "../../components/Button/";
import MainHeader from "../../components/MainHeader";
import StyledInput from "../../components/TextField";
import "./style.css";
function CompanyDetail() {
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
        <h3 className="wrapper-header">Company Detail</h3>
        <form className="form">
          <Grid
            container
            columns={18}
            direction="row"
            justifyContent="center"
            paddingBottom={15}
            borderBottom="1px solid lightgray"
          >
            <Grid container item xs={10} md={10} sm={18}>
              <Grid container rowGap={3}>
                <Grid container>
                  <Grid item xs={4}>
                    <label htmlFor="">
                      Company <span className="required">*</span>
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
                      <Grid item>
                        <StyledInput
                          size="medium"
                          value="VTI Company"
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
                    <StyledInput size="medium" value={"1234567890"} />
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
              <StyledButton
                onClick={() => {
                  route.goBack();
                }}
                variant="contained"
                color="inherit"
              >
                Back
              </StyledButton>
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
                Do you want to update these company?
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
          <StyledButton
            variant="contained"
            color="inherit"
            onClick={() => setIsShowConfirmModal(!isShowConfirmModal)}
          >
            Cancel
          </StyledButton>
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
                Do you want to change status these company?
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
          <StyledButton
            variant="contained"
            color="inherit"
            onClick={() => setIsShowChangeModal(!isShowChangeModal)}
          >
            Cancel
          </StyledButton>
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
            onClick={() => route.push("/company/")}
          >
            Close
          </StyledButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default CompanyDetail;
