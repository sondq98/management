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


const BranchManagement = function () {
    const history = useHistory();
    const goToDetailPage = () => {
        history.push("/branch/detail");
    };
    return (
        <div className="container-div">
            <MainHeader />
            <div className="wrapper">
                <div className="infoBranch-wrapper">
                    <h3 className="headerPanel">Branch Management</h3>
                    <Grid container pl={3} my={3} rowGap={1}>
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
                <hr />
                <div className="btn-wrapper">
                    <div className="btn-nav">
                        <StyledButton
                            onClick={() => {
                                history.push("/branch/register");
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
                                history.push("/home");
                            }}
                            className="btn-30"
                            sx={{
                                bgcolor: '#323232',
                                textTransform: 'capitalize',
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
                                }}
                            >
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Code</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Branch name</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Email</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Phone number</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Status</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center" padding="none">BR0001</TableCell>
                                    <TableCell align="center" padding="none">ABC</TableCell>
                                    <TableCell align="center" padding="none">
                                        anh.nguyenductuan@vti.com.vn
                                    </TableCell>
                                    <TableCell align="center" padding="none">Phone number</TableCell>
                                    <TableCell align="center" padding="none">
                                        <StyledButton
                                            variant="contained"
                                            color="success"
                                            sx={{ color: "white" }}
                                        >
                                            Working
                                        </StyledButton>
                                    </TableCell>
                                    <TableCell padding="none">
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
                                    <TableCell align="center" padding="none">BR0001</TableCell>
                                    <TableCell align="center" padding="none">ABC</TableCell>
                                    <TableCell align="center" padding="none">
                                        anh.nguyenductuan@vti.com.vn
                                    </TableCell>
                                    <TableCell align="center" padding="none">Phone number</TableCell>
                                    <TableCell align="center" padding="none">
                                        <StyledButton
                                            variant="contained"
                                            color="success"
                                            sx={{ color: "white" }}
                                        >
                                            Working
                                        </StyledButton>
                                    </TableCell>
                                    <TableCell padding="none">
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
                                    <TableCell align="center" padding="none">BR0001</TableCell>
                                    <TableCell align="center" padding="none">ABC</TableCell>
                                    <TableCell align="center" padding="none">
                                        anh.nguyenductuan@vti.com.vn
                                    </TableCell>
                                    <TableCell align="center" padding="none">Phone number</TableCell>
                                    <TableCell align="center" padding="none">
                                        <StyledButton
                                            variant="contained"
                                            color="success"
                                            sx={{ color: "white" }}
                                        >
                                            Working
                                        </StyledButton>
                                    </TableCell>
                                    <TableCell padding="none">
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
                                    <TableCell align="center" padding="none">BR0001</TableCell>
                                    <TableCell align="center" padding="none">ABC</TableCell>
                                    <TableCell align="center" padding="none">
                                        anh.nguyenductuan@vti.com.vn
                                    </TableCell>
                                    <TableCell align="center" padding="none">Phone number</TableCell>
                                    <TableCell align="center" padding="none">
                                        <StyledButton
                                            variant="contained"
                                            color="success"
                                            sx={{ color: "white" }}
                                        >
                                            Working
                                        </StyledButton>
                                    </TableCell>
                                    <TableCell padding="none">
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
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                input={<StyledInput sx={{ width: "40px" }} />}
                            >
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

export default BranchManagement;
