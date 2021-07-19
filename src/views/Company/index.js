import {
  Grid,
  InputLabel,
  Pagination,
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
import StyledSelect from "../../components/Select";
import StyledInput from "../../components/TextField";
import "./style.css";
const CompanyManagement = function () {
  const route = useHistory();
  const goToDetailPage = () => {
    route.push("/company/update");
  };
  return (
    <div className="container-div">
      <MainHeader />
      <div className="wrapper">
        <div style={{ height: "345px" }}>
          <h3 className="wrapper-header">Company Management</h3>
          <Grid container ml={3} mt={3} rowGap={2}>
            <Grid container item>
              <Grid item xs={2} className="form-group">
                <label htmlFor="">Company</label>
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
            <Grid container item>
              <Grid item xs={2} className="form-group">
                <label htmlFor="">Email</label>
              </Grid>
              <Grid item>
                <StyledInput size="medium" placeholder="Email" />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item xs={2} className="form-group">
                <label htmlFor="">Phone Number</label>
              </Grid>
              <Grid item>
                <StyledInput size="medium" placeholder="Phone number" />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item xs={2} className="form-group">
                <label htmlFor="">Status</label>
              </Grid>
              <Grid item>
                <StyledSelect
                  defaultValue="working"
                  data={["Working", "Pending", "Stopped"]}
                />
              </Grid>
            </Grid>
            <div className="form-group"></div>
          </Grid>
        </div>
        <hr />
        <div className="btn-wrapper">
          <div className="btn-nav">
            <StyledButton
              onClick={() => {
                route.push("/company/register");
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
        <div className="table-wrapper">
          <TableContainer>
            <Table>
              <TableHead
                sx={{
                  backgroundColor: "#72acff",
                  textAlign: "center",
                  lineHeight: "2",
                  fontStyle: "bold",
                }}
              >
                <TableRow>
                  <TableCell className="table-cell">Code</TableCell>
                  <TableCell className="table-cell">Company name</TableCell>
                  <TableCell className="table-cell">Email</TableCell>
                  <TableCell className="table-cell">Phone number</TableCell>
                  <TableCell className="table-cell">Status</TableCell>
                  <TableCell className="table-cell">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">Code</TableCell>
                  <TableCell align="center">Company name</TableCell>
                  <TableCell align="center">
                    anh.nguyenductuan@vti.com.vn
                  </TableCell>
                  <TableCell align="center">Phone number</TableCell>
                  <TableCell align="center">
                    <StyledButton
                      variant="contained"
                      color="success"
                      sx={{ color: "white" }}
                    >
                      Working
                    </StyledButton>
                  </TableCell>
                  <TableCell>
                    <div className="table-data__action">
                      <StyledButton
                        onClick={goToDetailPage}
                        variant="contained"
                        color="primary"
                      >
                        Detail
                      </StyledButton>
                      <StyledButton variant="contained" color="error">
                        Delete
                      </StyledButton>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell align="center">Code</TableCell>
                  <TableCell align="center">Company name</TableCell>
                  <TableCell align="center">
                    anh.nguyenductuan@vti.com.vn
                  </TableCell>
                  <TableCell align="center">Phone number</TableCell>
                  <TableCell align="center">
                    <StyledButton
                      variant="contained"
                      color="success"
                      sx={{ color: "white" }}
                    >
                      Working
                    </StyledButton>
                  </TableCell>
                  <TableCell>
                    <div className="table-data__action">
                      <StyledButton
                        onClick={goToDetailPage}
                        variant="contained"
                        color="primary"
                      >
                        Detail
                      </StyledButton>
                      <StyledButton variant="contained" color="error">
                        Delete
                      </StyledButton>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell align="center">Code</TableCell>
                  <TableCell align="center">Company name</TableCell>
                  <TableCell align="center">
                    anh.nguyenductuan@vti.com.vn
                  </TableCell>
                  <TableCell align="center">Phone number</TableCell>
                  <TableCell align="center">
                    <StyledButton
                      variant="contained"
                      color="success"
                      sx={{ color: "white" }}
                    >
                      Working
                    </StyledButton>
                  </TableCell>
                  <TableCell>
                    <div className="table-data__action">
                      <StyledButton
                        onClick={goToDetailPage}
                        variant="contained"
                        color="primary"
                      >
                        Detail
                      </StyledButton>
                      <StyledButton variant="contained" color="error">
                        Delete
                      </StyledButton>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell align="center">Code</TableCell>
                  <TableCell align="center">Company name</TableCell>
                  <TableCell align="center">
                    anh.nguyenductuan@vti.com.vn
                  </TableCell>
                  <TableCell align="center">Phone number</TableCell>
                  <TableCell align="center">
                    <StyledButton
                      variant="contained"
                      color="success"
                      sx={{ color: "white" }}
                    >
                      Working
                    </StyledButton>
                  </TableCell>
                  <TableCell>
                    <div className="table-data__action">
                      <StyledButton
                        onClick={goToDetailPage}
                        variant="contained"
                        color="primary"
                      >
                        Detail
                      </StyledButton>
                      <StyledButton variant="contained" color="error">
                        Delete
                      </StyledButton>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div className="table-pagination">
            <div className="table-row-num">
              <InputLabel>Row per page :</InputLabel>
              <StyledSelect
                defaultValue={5}
                data={[5, 6, 7, 8, 9]}
                size="small"
              />
            </div>
            <div className="pagination">
              <h3> 1-5 of 30</h3>
              <Pagination
                count={10}
                shape="rounded"
                size="small"
                boundaryCount={2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyManagement;
