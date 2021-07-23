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
  Container,
  Divider,
} from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import StyledButton from "../../components/Button";
import MainHeader from "../../components/MainHeader";
import StyledSelect from "../../components/Select";
import StyledInput from "../../components/TextField";
import "./style.css";
import { connect } from "react-redux";
import {
  deleteCompany,
  getDataWithFilter,
  getSearchedData,
} from "../../store/company/action";
import { useRef } from "react";

const CompanyManagement = function (props) {
  const delayTrigger = useRef();
  const handleDeleteClick = (code) => {
    dispatch(deleteCompany(code));
    setFilter({ ...filter, max: filter.max - 1 });
  };
  const { companyReducer, dispatch } = props;
  const route = useHistory();
  const [filter, setFilter] = useState({ ...companyReducer.filter });
  const goToDetailPage = (code) => {
    route.push("/company/detail/" + code);
  };
  const { tableData } = companyReducer;
  console.log(tableData);
  const [formFilter, setFormFilter] = useState({});
  const handleChangeRowPerPage = (e) => {
    let value = e.target.value;
    let newFilter = { ...filter };
    newFilter.row = value;
    newFilter.currentPage = 1;
    setFilter(newFilter);
  };
  const handleChangePage = (e) => {
    let value = e;
    let newFilter = { ...filter, currentPage: value };
    setFilter(newFilter);
  };

  const handleChangeSearchFrom = (e, ...arg) => {
    if (delayTrigger.current) {
      clearInterval(delayTrigger.current);
    }

    let value = arg.length === 0 ? e.target.value : arg[0];
    let name = arg.length === 0 ? e.target.name : e;
    let newFormFilter = { ...formFilter };
    newFormFilter[name] = value;
    delayTrigger.current = setInterval(() => {
      setFormFilter(newFormFilter);
    }, 400);
  };

  const handleClickSearch = () => {
    dispatch(getSearchedData(formFilter));
  };
  useEffect(() => {
    dispatch(getDataWithFilter(filter));
  }, [filter]);
  return (
    <div className="container-div">
      <MainHeader />
      <div className="wrapper">
        <div style={{ height: "345px" }}>
          <h3 className="wrapper-header">Company Management</h3>
          <Container>
            <Grid container mt={3} rowGap={2}>
              <Grid container item>
                <Grid item xs={2} className="form-group">
                  <label htmlFor="">Company</label>
                </Grid>
                <Grid item>
                  <StyledInput
                    name="companyCode"
                    size="small"
                    style={{ marginRight: "20px", paddingLeft: "10px" }}
                    placeholder="Code"
                    onKeyUp={(e) => handleChangeSearchFrom(e)}
                  />
                </Grid>
                <Grid item>
                  <StyledInput
                    size="medium"
                    placeholder="Please enter company name"
                    name="companyName"
                    onKeyUp={(e) => handleChangeSearchFrom(e)}
                  />
                </Grid>
              </Grid>
              <Grid container item>
                <Grid item xs={2} className="form-group">
                  <label htmlFor="">Email</label>
                </Grid>
                <Grid item>
                  <StyledInput
                    onKeyUp={(e) => handleChangeSearchFrom(e)}
                    name="email"
                    size="medium"
                    placeholder="Email"
                  />
                </Grid>
              </Grid>
              <Grid container item>
                <Grid item xs={2} className="form-group">
                  <label htmlFor="">Phone Number</label>
                </Grid>
                <Grid item>
                  <StyledInput
                    size="medium"
                    name="phoneNumber"
                    placeholder="Phone number"
                    onKeyUp={(e) => handleChangeSearchFrom(e)}
                  />
                </Grid>
              </Grid>
              <Grid container item>
                <Grid item xs={2} className="form-group">
                  <label htmlFor="">Status</label>
                </Grid>
                <Grid item>
                  <StyledSelect
                    name="status"
                    defaultValue="all"
                    data={["All", "Working", "Pending", "Stopped"]}
                    onChange={(e, value) => {
                      handleChangeSearchFrom("status", value.props.value);
                    }}
                  />
                </Grid>
              </Grid>
              <div className="form-group"></div>
            </Grid>
          </Container>
        </div>
        <Divider />
        <Container>
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
              <StyledButton
                onClick={handleClickSearch}
                variant="contained"
                color="primary"
              >
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
                {tableData.map((e) => {
                  return (
                    <TableRow key={e.code}>
                      <TableCell align="center">{e.code}</TableCell>
                      <TableCell align="center">{e.companyName}</TableCell>
                      <TableCell align="center">{e.email}</TableCell>
                      <TableCell align="center">{e.phoneNumber}</TableCell>
                      <TableCell align="center">
                        <StyledButton
                          variant="contained"
                          color={
                            e.status === "working"
                              ? "success"
                              : e.status === "pending"
                              ? "warning"
                              : "inherit"
                          }
                          sx={{ color: "white" }}
                        >
                          {e.status.charAt(0).toUpperCase() +
                            e.status.slice(1).toLowerCase()}
                        </StyledButton>
                      </TableCell>
                      <TableCell>
                        <div className="table-data__action">
                          <StyledButton
                            onClick={() => goToDetailPage(e.code)}
                            variant="contained"
                            color="primary"
                          >
                            Detail
                          </StyledButton>
                          <StyledButton
                            onClick={() => handleDeleteClick(e.code)}
                            variant="contained"
                            color="error"
                          >
                            Delete
                          </StyledButton>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
        <Container>
          <div className="table-pagination">
            <div className="table-row-num">
              <InputLabel>Row per page :</InputLabel>
              <StyledSelect
                onChange={(e) => handleChangeRowPerPage(e)}
                defaultValue={5}
                data={[5, 6, 7, 8, 9]}
                size="small"
              />
            </div>
            <div className="pagination">
              <h3>
                {companyReducer.filter.row *
                  (companyReducer.filter.currentPage - 1) +
                  1}{" "}
                -{" "}
                {companyReducer.filter.row * companyReducer.filter.currentPage >
                companyReducer.filter.max
                  ? companyReducer.filter.max
                  : companyReducer.filter.row *
                    companyReducer.filter.currentPage}{" "}
                of {companyReducer.filter.max}
              </h3>
              <Pagination
                count={
                  companyReducer.filter.max
                    ? Math.ceil(
                        companyReducer.filter.max / companyReducer.filter.row
                      )
                    : 0
                }
                shape="rounded"
                size="small"
                variant="outlined"
                siblingCount={1}
                boundaryCount={0}
                page={filter.currentPage}
                onChange={(e, value) => handleChangePage(value)}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { ...state };
};
const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(CompanyManagement);
