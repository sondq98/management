import {
  Container,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import StyledButton from "../../../components/Button";
import MainHeader from "../../../components/MainHeader";
import StyledInput from "../../../components/TextField";
import "./style.css";
function EmployeeRegister() {
  const route = useHistory();

  return (
    <>
      <MainHeader />
      <div className="wrapper">
        <h3 className="wrapper__header">Create Employee</h3>

        <Container sx={{ marginTop: "40px", marginBottom: "40px" }}>
          <Grid container>
            {/* left */}
            <Grid xs={6} rowGap={3} container item>
              <Grid xs={12} display="flex" alignItems="center" container item>
                <Grid item xs={3}>
                  <label>Company</label>
                </Grid>
                <Grid container columnGap={1} item xs={9}>
                  <StyledInput placeholder="Company code" size="small" />
                  <StyledInput
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
                  <StyledInput placeholder="Division code" size="small" />
                  <StyledInput
                    placeholder="Please enter Division name"
                    size="medium"
                  />
                </Grid>
              </Grid>
              <Grid xs={12} display="flex" alignItems="center" container item>
                <Grid item xs={3}>
                  <label>Employee</label>
                </Grid>
                <Grid container item xs={9}>
                  <StyledInput
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
            {/* <Grid container></Grid> */}
            {/* right */}
            <Grid flexDirection="column" container rowGap={3} item xs={6}>
              <Grid display="flex" alignItems="center" container>
                <Grid xs={3} item>
                  <label>Branch (Optional) </label>
                </Grid>
                <Grid xs={9} columnGap={1} container item>
                  <StyledInput placeholder="Branch code" size="small" />
                  <StyledInput placeholder="Branch code" size="medium" />
                </Grid>
              </Grid>

              <Grid display="flex" alignItems="center" container>
                <Grid xs={3} item>
                  <label>Date of Birth </label>
                </Grid>
                <Grid xs={9} item>
                  <StyledInput type="date" size="medium" />
                </Grid>
              </Grid>

              <Grid display="flex" alignItems="center" container>
                <Grid xs={3} item>
                  <label>Email</label>
                </Grid>
                <Grid xs={9} item>
                  <StyledInput placeholder="Please enter Email" size="medium" />
                </Grid>
              </Grid>

              <Grid display="flex" alignItems="center" container>
                <Grid xs={3} item>
                  <label>ID/Passport Date </label>
                </Grid>
                <Grid xs={9} item>
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
        <Divider />
        <Container>
          <div className="wrapper-button">
            <div className="wrapper-button__div button-2">
              <StyledButton variant="contained" color="success">
                Register
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
    </>
  );
}

export default EmployeeRegister;
