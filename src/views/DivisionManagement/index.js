import {
  Container,
  Divider,
  Grid,
  MenuItem,
  Pagination,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import StyledButton from "../../components/Button";
import MainHeader from "../../components/MainHeader";
import StyledInput from "../../components/TextField";
import "./style.css";

function DivisionManagement() {
  const route = useHistory();
  return (
    <>
      <MainHeader />
      <div className="wrapper">
        <h3 className="wrapper__header">Division Management</h3>
        <Container>
          <Grid mt={4} pb={2} rowGap={2} xs={12} container>
            <Grid xs={10} display="flex" alignItems="center" container item>
              <Grid xs={2} item>
                <label>Company</label>
              </Grid>
              <Grid xs={7} columnGap={1} container item>
                <StyledInput placeholder="Company code" size="small" />
                <StyledInput
                  placeholder="Please enter company name"
                  size="medium"
                />
              </Grid>
            </Grid>
            <Grid xs={10} display="flex" alignItems="center" container item>
              <Grid xs={2} item>
                <label>Branch (Optional) </label>
              </Grid>
              <Grid xs={7} columnGap={1} container item>
                <StyledInput placeholder="Branch Code" size="small" />
                <StyledInput
                  placeholder="Please enter Branch name"
                  size="medium"
                />
              </Grid>
            </Grid>
            <Grid xs={10} display="flex" alignItems="center" container item>
              <Grid xs={2} item>
                <label>Division</label>
              </Grid>
              <Grid xs={8} columnGap={1} container item>
                <StyledInput placeholder="Division Code" size="small" />
                <StyledInput
                  placeholder="Please enter Division name"
                  size="medium"
                />
              </Grid>
            </Grid>
            <Grid xs={10} display="flex" alignItems="center" container item>
              <Grid xs={2} item>
                <label>Email</label>
              </Grid>
              <Grid xs={8} item>
                <StyledInput placeholder="Email" size="medium" />
              </Grid>
            </Grid>
            <Grid xs={10} display="flex" alignItems="center" container item>
              <Grid xs={2} item>
                <label>Email</label>
              </Grid>
              <Grid xs={8} item>
                <StyledInput placeholder="Please enter Email" size="medium" />
              </Grid>
            </Grid>
            <Grid xs={10} display="flex" alignItems="center" container item>
              <Grid xs={2} item>
                <label>Phone number</label>
              </Grid>
              <Grid xs={8} item>
                <StyledInput
                  placeholder="Please enter Phone number"
                  size="medium"
                />
              </Grid>
            </Grid>
            <Grid xs={10} display="flex" alignItems="center" container item>
              <Grid xs={2} item>
                <label>Status</label>
              </Grid>
              <Grid xs={8} item>
                <Select sx={{ width: "250px", height: "40px", border: "none" }}>
                  <MenuItem value="working">Working</MenuItem>
                </Select>
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
                  route.push("/division/register");
                }}
                color="success"
                variant="contained"
              >
                Register
              </StyledButton>
              <StyledButton color="primary" variant="contained">
                Search
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
        <TableContainer className="table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="table-cell">
                  <label>Company Name</label>
                </TableCell>
                <TableCell className="table-cell">
                  <label>Branch Name</label>
                </TableCell>
                <TableCell className="table-cell">
                  <label>Division Code</label>
                </TableCell>
                <TableCell className="table-cell">
                  <label>Division Name</label>
                </TableCell>
                <TableCell className="table-cell">
                  <label>Email</label>
                </TableCell>
                <TableCell className="table-cell">
                  <label>Phone number</label>
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
                <TableCell>ABC</TableCell>
                <TableCell>ABC</TableCell>
                <TableCell>ABC</TableCell>
                <TableCell>ABC</TableCell>
                <TableCell>ABC</TableCell>
                <TableCell>123123123</TableCell>
                <TableCell>
                  <StyledButton color="inherit">Working</StyledButton>
                </TableCell>
                <TableCell className="table-action">
                  <StyledButton
                    sx={{ marginRight: "10px" }}
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      route.push("/division/detail");
                    }}
                  >
                    Detail
                  </StyledButton>
                  <StyledButton color="error" variant="contained">
                    Delete
                  </StyledButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>ABC</TableCell>
                <TableCell>ABC</TableCell>
                <TableCell>ABC</TableCell>
                <TableCell>ABC</TableCell>
                <TableCell>ABC</TableCell>
                <TableCell>123123123</TableCell>
                <TableCell>
                  <StyledButton color="inherit" variant="contained">
                    Working
                  </StyledButton>
                </TableCell>
                <TableCell className="table-action">
                  <StyledButton
                    sx={{ marginRight: "10px" }}
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      route.push("/division/detail");
                    }}
                  >
                    Detail
                  </StyledButton>
                  <StyledButton color="error" variant="contained">
                    Delete
                  </StyledButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="table-pagination">
            <div>
              <label>Row per page &ensp;</label>
              <Select sx={{ height: "36px", width: "50px" }}>
                <MenuItem selected value={5}>
                  5
                </MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
              </Select>
            </div>
            <div className="pagination">
              <label>1-5 of 50</label>
              <Pagination
                variant="outlined"
                shape="rounded"
                count={20}
                size="small"
                siblingCount={1}
                boundaryCount={0}
              />
            </div>
          </div>
        </TableContainer>
      </div>
    </>
  );
}

export default DivisionManagement;
