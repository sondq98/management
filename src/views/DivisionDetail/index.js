import {
  Box,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import StyledButton from "../../components/Button";
import MainHeader from "../../components/MainHeader";
import StyledInput from "../../components/TextField";

function DivisionDetail() {
  const route = useHistory();
  const [isShowChangeStatus, setIsShowChangeStatus] = useState(false);
  const [isShowUpdateDivision, setIsShowUpdateDivision] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClickUpdate = () => {
    setIsShowUpdateDivision(true);
  };

  const handleClickStatus = () => {
    setIsShowChangeStatus(true);
  };

  const handleClickSuccess = () => {
    route.push("/division/");
  };
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
              <Grid xs={7} columnGap={1} container item>
                <StyledInput size="small" placeholder="Company code" disabled />
                <StyledInput
                  disabled
                  size="medium"
                  placeholder="Please enter Company name"
                />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid xs={1.5} container display="flex" alignItems="center" item>
                <label>Branch (Optional)</label>
              </Grid>
              <Grid xs={7} columnGap={1} container item>
                <StyledInput size="small" placeholder="Branch code" disabled />
                <StyledInput
                  disabled
                  size="medium"
                  placeholder="Please enter Branch name"
                />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid xs={1.5} container display="flex" alignItems="center" item>
                <label>Division</label>
              </Grid>
              <Grid xs={7} columnGap={1} container item>
                <StyledInput
                  size="small"
                  placeholder="Division code"
                  disabled
                />
                <StyledInput
                  disabled
                  size="medium"
                  placeholder="Please enter Division name"
                />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid xs={1.5} container display="flex" alignItems="center" item>
                <label>Address</label>
              </Grid>
              <Grid xs={7} columnGap={1} container item>
                <StyledInput
                  size="large"
                  placeholder="Please enter Division name"
                  value="78 Duy Tan, Cau Giay, Ha Noi"
                />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid xs={1.5} container display="flex" alignItems="center" item>
                <label>Area</label>
              </Grid>
              <Grid xs={7} columnGap={1} container item>
                <StyledInput size="medium" placeholder="Select area" />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid xs={1.5} container display="flex" alignItems="center" item>
                <label>Email</label>
              </Grid>
              <Grid xs={7} columnGap={1} container item>
                <StyledInput
                  size="medium"
                  placeholder="Please enter Email"
                  value="abc@gmail.com"
                />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid xs={1.5} container display="flex" alignItems="center" item>
                <label>Phone Number</label>
              </Grid>
              <Grid xs={7} columnGap={1} container item>
                <StyledInput
                  size="medium"
                  placeholder="Please enter Phone number"
                  value="123123123"
                />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid xs={1.5} container display="flex" alignItems="center" item>
                <label>Status</label>
              </Grid>
              <Grid xs={7} columnGap={1} alignItems="center" container item>
                <Typography sx={{ textTransform: "uppercase" }} color="green">
                  Working
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Divider />
        <Container>
          <div className="wrapper-button wrapper-button-side">
            <div className="wrapper-button__div">
              <StyledButton onClick={handleClickStatus} color="success">
                Working
              </StyledButton>
              <StyledButton onClick={handleClickStatus} color="warning">
                Pending
              </StyledButton>
              <StyledButton onClick={handleClickStatus} color="error">
                Stop
              </StyledButton>
            </div>
            <div className="wrapper-button__div button-2">
              <StyledButton onClick={handleClickUpdate} color="primary">
                Update
              </StyledButton>
              <StyledButton onClick={() => route.goBack()} color="inherit">
                Back
              </StyledButton>
            </div>
          </div>
        </Container>
      </div>

      {/* Dialog update */}
      <Dialog
        open={isShowUpdateDivision}
        onClose={() => setIsShowUpdateDivision(false)}
      >
        <DialogTitle>Confirm update</DialogTitle>
        <DialogContent>
          <Grid mb={1} container columnGap={1}>
            <Grid item>
              <HelpOutlineIcon />
            </Grid>
            <Grid item>
              <Typography>Do you want to update these division?</Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Box mb={1}>
            <StyledButton
              sx={{ marginRight: "10px" }}
              color="success"
              onClick={() => {
                setIsShowUpdateDivision(false);
                setIsSuccess(true);
              }}
            >
              OK
            </StyledButton>
            <StyledButton
              onClick={() => {
                setIsShowUpdateDivision(false);
              }}
              color="inherit"
            >
              Cancel
            </StyledButton>
          </Box>
        </DialogActions>
      </Dialog>

      {/* Dialog change status */}
      <Dialog
        open={isShowChangeStatus}
        onClose={() => {
          setIsShowChangeStatus(false);
        }}
      >
        <DialogTitle>Confirm update</DialogTitle>
        <DialogContent>
          <Grid mb={1} container columnGap={1}>
            <Grid item>
              <HelpOutlineIcon />
            </Grid>
            <Grid item>
              <Typography>
                Do you want to change status these division?
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Box mb={1}>
            <StyledButton sx={{ marginRight: "10px" }} color="success">
              OK
            </StyledButton>
            <StyledButton
              onClick={() => {
                setIsShowChangeStatus(false);
              }}
              color="inherit"
            >
              Cancel
            </StyledButton>
          </Box>
        </DialogActions>
      </Dialog>
      {/* Successful */}
      <Dialog
        open={isSuccess}
        onClose={() => {
          setIsSuccess(false);
        }}
      >
        {/* <DialogTitle>Update</DialogTitle> */}
        <DialogContent>
          <Grid width={320} mt={2} mb={1} container columnGap={1}>
            <Grid item>
              <CheckCircleOutline sx={{ color: "green" }} />
            </Grid>
            <Grid item>
              <Typography>Update Division Successfully!!!</Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Box mb={1}>
            <StyledButton
              onClick={() => {
                handleClickSuccess();
              }}
              color="success"
            >
              OK
            </StyledButton>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DivisionDetail;
