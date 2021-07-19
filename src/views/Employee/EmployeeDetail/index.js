import {
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { CheckCircleOutlined, HelpOutlineOutlined } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import StyledButton from "../../../components/Button/";
import MainHeader from "../../../components/MainHeader";
import StyledInput from "../../../components/TextField";
function EmployeeDetail() {
  const route = useHistory();
  const [isChange, setIsChange] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleClickUpdate = () => {
    setIsUpdate(true);
  };
  const handleClickChange = () => {
    setIsChange(true);
  };
  const handleClickCancel = (type) => {
    switch (type) {
      case "update": {
        setIsUpdate(false);
        break;
      }
      case "change": {
        setIsChange(false);
        break;
      }
      default: {
        return;
      }
    }
  };
  const handleClickConfirmUpdate = () => {
    setIsUpdate(false);
    setIsSuccess(true);
  };

  return (
    <>
      <MainHeader />
      <div className="wrapper">
        <h3 className="wrapper__header">Employee Detail</h3>
        <Container sx={{ marginTop: "40px", marginBottom: "40px" }}>
          <Grid container>
            {/* left */}
            <Grid xs={6} rowGap={3} container item>
              <Grid xs={12} display="flex" alignItems="center" container item>
                <Grid item xs={3}>
                  <label>Company</label>
                </Grid>
                <Grid container columnGap={1} item xs={9}>
                  <StyledInput
                    disabled
                    placeholder="Company code"
                    size="small"
                  />
                  <StyledInput
                    disabled
                    placeholder="Please enter Branch name"
                    size="medium"
                  />
                </Grid>
              </Grid>
              <Grid xs={12} display="flex" alignItems="center" container item>
                <Grid item xs={3}>
                  <label>Division</label>
                </Grid>
                <Grid container columnGap={1} item xs={9}>
                  <StyledInput
                    disabled
                    placeholder="Division code"
                    size="small"
                  />
                  <StyledInput
                    disabled
                    placeholder="Please enter Division name"
                    size="medium"
                  />
                </Grid>
              </Grid>
              <Grid xs={12} display="flex" alignItems="center" container item>
                <Grid item xs={3}>
                  <label>Employee</label>
                </Grid>
                <Grid container item xs={9} columnGap={1}>
                  <StyledInput
                    disabled
                    placeholder="Employee Code"
                    size="small"
                  />
                  <StyledInput
                    disabled
                    placeholder="Please enter Employee name"
                    size="medium"
                  />
                </Grid>
              </Grid>
              <Grid xs={12} display="flex" alignItems="center" container item>
                <Grid item xs={3}>
                  <label>Phone number</label>
                </Grid>
                <Grid container item xs={9}>
                  <StyledInput
                    placeholder="Please enter Phone number"
                    size="medium"
                  />
                </Grid>
              </Grid>
              <Grid xs={12} display="flex" alignItems="center" container item>
                <Grid item xs={3}>
                  <label>ID/Passport No</label>
                </Grid>
                <Grid container item xs={9}>
                  <StyledInput
                    placeholder="Please enter ID/Passport No"
                    size="medium"
                  />
                </Grid>
              </Grid>
              <Grid xs={12} display="flex" alignItems="center" container item>
                <Grid item xs={3}>
                  <label>Address</label>
                </Grid>
                <Grid container item xs={9}>
                  <StyledInput placeholder="Please enter Addres" size="large" />
                </Grid>
              </Grid>

              <Grid xs={12} display="flex" alignItems="center" container item>
                <Grid item xs={3}>
                  <label>Join Date</label>
                </Grid>
                <Grid container item xs={9}>
                  <StyledInput type="date" size="medium" />
                </Grid>
              </Grid>
              <Grid xs={12} display="flex" alignItems="center" container item>
                <Grid item xs={3}>
                  <label>Experience</label>
                </Grid>
                <Grid container item xs={9}>
                  <StyledInput
                    placeholder="Please select Experience"
                    size="medium"
                  />
                </Grid>
              </Grid>
              <Grid xs={12} display="flex" alignItems="center" container item>
                <Grid item xs={3}>
                  <label>Type of Contract</label>
                </Grid>
                <Grid container item xs={9}>
                  <StyledInput
                    placeholder="Please select type of contract"
                    size="medium"
                  />
                </Grid>
              </Grid>
            </Grid>

            {/* right */}
            <Grid xs={5.5} flexDirection="column" rowGap={3} container item>
              <Grid display="flex" alignItems="center" container>
                <Grid xs={3} item>
                  <label>Branch (Optional) </label>
                </Grid>
                <Grid xs={9} columnGap={1} container>
                  <StyledInput placeholder="Branch code" size="small" />
                  <StyledInput placeholder="Branch code" size="medium" />
                </Grid>
              </Grid>

              <Grid display="flex" alignItems="center" container>
                <Grid xs={3} item>
                  <label>Date of Birth </label>
                </Grid>
                <Grid xs={9} container>
                  <StyledInput type="date" size="medium" />
                </Grid>
              </Grid>

              <Grid display="flex" alignItems="center" container>
                <Grid xs={3} item>
                  <label>Email</label>
                </Grid>
                <Grid xs={9} container>
                  <StyledInput placeholder="Please enter Email" size="medium" />
                </Grid>
              </Grid>

              <Grid display="flex" alignItems="center" container>
                <Grid xs={3} item>
                  <label>ID/Passport Date </label>
                </Grid>
                <Grid xs={9} container>
                  <StyledInput type="date" size="medium" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <label>Skill</label>
          <TableContainer className="table">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="table-cell">
                    <label>Skill type</label>
                  </TableCell>
                  <TableCell className="table-cell">
                    <label>Skill name</label>
                  </TableCell>
                  <TableCell className="table-cell">
                    <label>Skill note</label>
                  </TableCell>
                  <TableCell className="table-cell">
                    <label>Experiences</label>
                  </TableCell>
                  <TableCell className="table-cell">
                    <label>Note experiences</label>
                  </TableCell>
                  <TableCell className="table-cell">
                    <label>Level</label>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Skill type</TableCell>
                  <TableCell>Skill name</TableCell>
                  <TableCell>Skill note</TableCell>
                  <TableCell>3 Months</TableCell>
                  <TableCell>Note experiences</TableCell>
                  <TableCell>Level</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Container>

        <Container>
          <label>Certificate</label>
          <TableContainer className="table">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="table-cell">
                    <label>STT</label>
                  </TableCell>
                  <TableCell className="table-cell">
                    <label>Certificate</label>
                  </TableCell>
                  <TableCell className="table-cell">
                    <label>Filename</label>
                  </TableCell>
                  <TableCell className="table-cell">
                    <label>Date</label>
                  </TableCell>
                  <TableCell className="table-cell">
                    <label>Duration</label>
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Container>
        <Container sx={{ marginBottom: "20px" }}>
          <div style={{ display: "flex" }}>
            <label>Status</label>
            <p
              style={{
                textTransform: "uppercase",
                marginLeft: "30px",
                color: "green",
              }}
            >
              Working
            </p>
          </div>
        </Container>
        <Divider />
        <Container>
          <div className="wrapper-button wrapper-button-side">
            <div className="wrapper-button__div">
              <StyledButton
                onClick={handleClickChange}
                variant="contained"
                color="success"
              >
                Working
              </StyledButton>
              <StyledButton
                onClick={handleClickChange}
                variant="contained"
                color="warning"
              >
                Pending
              </StyledButton>
              <StyledButton
                onClick={handleClickChange}
                variant="contained"
                color="error"
              >
                Stop
              </StyledButton>
            </div>
            <div className="wrapper-button__div button-2">
              <StyledButton
                onClick={handleClickUpdate}
                variant="contained"
                color="info"
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
        </Container>
      </div>
      {/* Dialog update */}
      <Dialog open={isUpdate} onClose={() => handleClickCancel("update")}>
        <DialogTitle>Update confirm</DialogTitle>
        <DialogContent>
          <Grid container columnGap={1}>
            <Grid item>
              <HelpOutlineOutlined />
            </Grid>
            <Grid item>
              <Typography>Do you want to update these Employee</Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ marginBottom: "10px" }}>
          <StyledButton
            onClick={handleClickConfirmUpdate}
            variant="contained"
            color="success"
          >
            OK
          </StyledButton>
          <StyledButton
            onClick={() => handleClickCancel("update")}
            color="inherit"
          >
            Back
          </StyledButton>
        </DialogActions>
      </Dialog>
      {/* Dialog Change */}
      <Dialog open={isChange} onClose={() => handleClickCancel("change")}>
        <DialogTitle>Change status confirm</DialogTitle>
        <DialogContent>
          <Grid container columnGap={1}>
            <Grid item>
              <HelpOutlineOutlined />
            </Grid>
            <Grid item>
              <Typography>
                Do you want to change status these Employee
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ marginBottom: "10px" }}>
          <StyledButton
            onClick={() => handleClickCancel("change")}
            variant="contained"
            color="success"
          >
            OK
          </StyledButton>
          <StyledButton
            onClick={() => handleClickCancel("change")}
            color="inherit"
          >
            Back
          </StyledButton>
        </DialogActions>
      </Dialog>
      {/* Dialog success */}
      <Dialog
        open={isSuccess}
        onClose={() => {
          route.push("/employee");
        }}
      >
        <DialogTitle>Update confirm</DialogTitle>
        <DialogContent>
          <Grid container columnGap={1}>
            <Grid item>
              <CheckCircleOutlined sx={{ color: "green" }} />
            </Grid>
            <Grid item>
              <Typography>Update Employee Successfully!!!</Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ marginBottom: "10px" }}>
          <StyledButton
            onClick={() => {
              route.push("/employee");
            }}
            variant="contained"
            color="primary"
          >
            OK
          </StyledButton>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EmployeeDetail;
