import {
  Container,
  Divider,
  Grid,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import StyledButton from "../../../components/Button";
import StyledSelect from "../../../components/Select";
import StyledInput from "../../../components/TextField";

function Management() {
  const route = useHistory();
  return (
    <>
      <Container className="container__div">
        <Grid container columns={20} columnGap={6} ml={2}>
          {/* Left */}
          <Grid item xs={9} container rowGap={3}>
            <Grid item container display="flex" alignItems="center">
              <Grid item xs={4} alignItems="center">
                <label>Company</label>
              </Grid>
              <Grid item>
                <Grid
                  display="flex"
                  alignItems="center"
                  container
                  columnGap={1}
                >
                  <StyledInput size="small" placeholder="Company Code" />
                  <StyledInput
                    size="medium"
                    placeholder="Please enter Company name"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid xs={4} alignItems="center" item>
                <label>Division</label>
              </Grid>
              <Grid item>
                <Grid container item columnGap={1}>
                  <StyledInput size="small" placeholder="Division Code" />
                  <StyledInput
                    size="medium"
                    placeholder="Please enter Division name"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid container item>
              <Grid xs={4} alignItems="center" item>
                <label>Role</label>
              </Grid>
              <Grid item>
                <Grid container item columnGap={1}>
                  <StyledSelect
                    defaultValue="dev"
                    sx={{ height: "40px", width: "250px" }}
                    data={["DEV", "PM", "TESTER"]}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid container item>
              <Grid xs={4} alignItems="center" item>
                <label>Status</label>
              </Grid>
              <Grid item>
                <Grid container item columnGap={1}>
                  <StyledSelect
                    defaultValue="working"
                    data={["Working", "Pending", "Stopped"]}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* Right */}
          <Grid
            xs={9}
            item
            container
            rowGap={3}
            display="flex"
            direction="column"
            alignItems="center"
          >
            <Grid container>
              <Grid xs={5} alignItems="center" container item>
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
            <Grid container>
              <Grid xs={5} alignItems="center" container item>
                <label>Employee </label>
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
            <Grid container item>
              <Grid xs={5} alignItems="center" container item>
                <label>Join Date</label>
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
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container>
        <div className="wrapper-button">
          <div className="wrapper-button__div">
            <StyledButton
              onClick={() => {
                route.push("/employee/register");
              }}
              variant="contained"
              color="success"
            >
              Register
            </StyledButton>
            <StyledButton variant="contained" color="primary">
              Search
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
      <Container>
        <TableContainer className="table">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="table-cell">
                  <label>Employee Code</label>
                </TableCell>
                <TableCell className="table-cell">
                  <label>Employee Name</label>
                </TableCell>
                <TableCell className="table-cell">
                  <label>Role</label>
                </TableCell>
                <TableCell className="table-cell">
                  <label>Experience</label>
                </TableCell>
                <TableCell className="table-cell">
                  <label>Join Date</label>
                </TableCell>
                <TableCell className="table-cell">
                  <label>Type Of Contract</label>
                </TableCell>
                <TableCell className="table-cell">
                  <label>Status</label>
                </TableCell>
                <TableCell className="table-cell">
                  <label>Action</label>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>BR0001</TableCell>
                <TableCell>Nguyen Van A</TableCell>
                <TableCell>Tester</TableCell>
                <TableCell>Senior</TableCell>
                <TableCell>2020-01-01</TableCell>
                <TableCell>3 Year</TableCell>
                <TableCell>
                  <StyledButton variant="contained" color="success">
                    Working
                  </StyledButton>
                </TableCell>
                <TableCell>
                  <StyledButton
                    onClick={() => {
                      route.push("/employee/detail");
                    }}
                    variant="contained"
                    color="info"
                  >
                    Detail
                  </StyledButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Container>
        <div className="table-pagination">
          <div>
            <label>Row per page </label>
            <StyledSelect
              defaultValue={5}
              data={[5, 6, 7, 8, 9]}
              size="small"
            />
          </div>
          <div className="pagination">
            <label>1-5 of 30</label>
            <Pagination
              shape="rounded"
              variant="outlined"
              siblingCount={1}
              boundaryCount={0}
              count={10}
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Management;
