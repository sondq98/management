import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/core/Pagination";
import {
    Table,
    MenuItem,
    Select,
    TableContainer,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
} from "@material-ui/core";

import MainHeader from "../../components/MainHeader";
import StyledInput from "../../components/TextField";
import StyledButton from "../../components/Button";

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
                <div>
                    <h3 className="headerPanel">Branch Management</h3>
                    <Grid container ml={3} mt={3} mb={3} rowGap={1}>
                        <Grid container item mb={1}>
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
                        <Grid container item mb={1}>
                            <Grid item xs={2} className="form-group">
                                <label htmlFor="">Branch</label>
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
                        <Grid container item mb={1}>
                            <Grid item xs={2} className="form-group">
                                <label htmlFor="">Email</label>
                            </Grid>
                            <Grid item>
                                <StyledInput size="medium" placeholder="Email" />
                            </Grid>
                        </Grid>
                        <Grid container item mb={1}>
                            <Grid item xs={2} className="form-group">
                                <label htmlFor="">Phone Number</label>
                            </Grid>
                            <Grid item>
                                <StyledInput size="medium" placeholder="Phone number" />
                            </Grid>
                        </Grid>
                        <Grid container item mb={1}>
                            <Grid item xs={2} className="form-group">
                                <label htmlFor="">Status</label>
                            </Grid>
                            <Grid item>
                                <StyledInput size="medium" placeholder="Status" />
                            </Grid>
                        </Grid>
                        <div className="form-group"></div>
                    </Grid>
                </div>
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
                        <Button
                            variant="contained"
                            onClick={() => {
                                route.goBack();
                            }}
                            className="btn-30"
                            sx={{
                                bgcolor: '#323232',
                                '&:hover': {
                                    bgcolor: '#080808'
                                }
                            }}
                        >
                            Back
                        </Button>
                        
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
                                    <TableCell align="center">Code</TableCell>
                                    <TableCell align="center">Company name</TableCell>
                                    <TableCell align="center">Email</TableCell>
                                    <TableCell align="center">Phone number</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Action</TableCell>
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
                            <Select input={<StyledInput sx={{ width: "40px" }} />}>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                            </Select>
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
