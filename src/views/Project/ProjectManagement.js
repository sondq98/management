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
import StyledSelect from "../../components/Select";



const ProjectManagement = function () {
    const history = useHistory();
    const goToDetailPage = () => {
        history.push("/project/detail");
    };
    return (
        <div className="container-div">
            <MainHeader />
            <div className="wrapper">
                <div className="infoProject-wrapper">
                    <h3 className="headerPanel">Project Management</h3>
                    <Grid
                        container
                        columns={20}
                        ml={2}
                        mt={2}
                        mb={4}
                        sx={{
                            display: "flex",
                            justifyContent: "space-around"
                        }}
                    >
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
                            <Grid item container display="flex" alignItems="center">
                                <Grid xs={4} alignItems="center" item>
                                    <label>Project</label>
                                </Grid>
                                <Grid item>
                                    <Grid container item columnGap={1}>
                                        <StyledInput size="small" placeholder="Project Code" />
                                        <StyledInput
                                            size="medium"
                                            placeholder="Please enter Project name"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item container display="flex" alignItems="center">
                                <Grid xs={4} alignItems="center" container item>
                                    <label>Start Date</label>
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
                            <Grid item container display="flex" alignItems="center">
                                <Grid xs={4} alignItems="center" item>
                                    <label>Status</label>
                                </Grid>
                                <Grid item>
                                    <Grid container item columnGap={1}>
                                        <StyledSelect
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            label="Select status"
                                            data={["Go Live", "Pending", "Working", "Maintain"]}
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
                            <Grid item container display="flex" alignItems="center">
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
                            <Grid item container display="flex" alignItems="center">
                                <Grid xs={5} alignItems="center" container item>
                                    <label>Division </label>
                                </Grid>
                                <Grid item>
                                    <Grid container item columnGap={1}>
                                        <StyledInput size="small" placeholder="Division code" />
                                        <StyledInput
                                            size="medium"
                                            placeholder="Please enter Division name "
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container item>
                                <Grid xs={5} alignItems="center" container item>
                                    <label>Quality</label>
                                </Grid>
                                <Grid item>
                                    <Grid container item columnGap={1}>
                                        <StyledSelect
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            label="Select status"
                                            data={["Good", "Medium", "Bad", "Very Bad"]}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <hr />
                <div className="btn-wrapper">
                    <div className="btn-nav">
                        <StyledButton
                            onClick={() => {
                                history.push("/project/register");
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
                    <TableContainer className="table">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="table-cell">
                                        <label>Project Code</label>
                                    </TableCell>
                                    <TableCell className="table-cell">
                                        <label>Project Name</label>
                                    </TableCell>
                                    <TableCell className="table-cell">
                                        <label>PM</label>
                                    </TableCell>
                                    <TableCell className="table-cell">
                                        <label>Team size</label>
                                    </TableCell>
                                    <TableCell className="table-cell">
                                        <label>Start Date</label>
                                    </TableCell>
                                    <TableCell className="table-cell">
                                        <label>Division</label>
                                    </TableCell>
                                    <TableCell className="table-cell">
                                        <label>Quality</label>
                                    </TableCell>
                                    <TableCell className="table-cell">
                                        <label>Status</label>
                                    </TableCell>
                                    <TableCell className="table-cell">
                                        <label></label>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>BR0001</TableCell>
                                    <TableCell>ABC</TableCell>
                                    <TableCell>Nguyen Van A</TableCell>
                                    <TableCell>7</TableCell>
                                    <TableCell>2020-01-01</TableCell>
                                    <TableCell>D1</TableCell>
                                    <TableCell>Good</TableCell>
                                    <TableCell>
                                        <StyledButton variant="contained" color="success">
                                            Working
                                        </StyledButton>
                                    </TableCell>
                                    <TableCell>
                                        <StyledButton
                                            onClick={() => {
                                                history.push("/employee/detail");
                                            }}
                                            variant="contained"
                                            color="info"
                                        >
                                            Detail
                                        </StyledButton>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>BR0001</TableCell>
                                    <TableCell>ABC</TableCell>
                                    <TableCell>Nguyen Van A</TableCell>
                                    <TableCell>8</TableCell>
                                    <TableCell>2020-01-01</TableCell>
                                    <TableCell>D1</TableCell>
                                    <TableCell>Good</TableCell>
                                    <TableCell>
                                        <StyledButton variant="contained" color="primary">
                                            Golive
                                        </StyledButton>
                                    </TableCell>
                                    <TableCell>
                                        <StyledButton
                                            onClick={() => {
                                                history.push("/employee/detail");
                                            }}
                                            variant="contained"
                                            color="info"
                                        >
                                            Detail
                                        </StyledButton>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>BR0001</TableCell>
                                    <TableCell>ABC</TableCell>
                                    <TableCell>Nguyen Van B</TableCell>
                                    <TableCell>12</TableCell>
                                    <TableCell>2020-01-01</TableCell>
                                    <TableCell>D1</TableCell>
                                    <TableCell>Good</TableCell>
                                    <TableCell>
                                        <StyledButton variant="contained" color="success">
                                            Working
                                        </StyledButton>
                                    </TableCell>
                                    <TableCell>
                                        <StyledButton
                                            onClick={() => {
                                                history.push("/employee/detail");
                                            }}
                                            variant="contained"
                                            color="info"
                                        >
                                            Detail
                                        </StyledButton>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>BR0001</TableCell>
                                    <TableCell>ABC</TableCell>
                                    <TableCell>Nguyen Van C</TableCell>
                                    <TableCell>9</TableCell>
                                    <TableCell>2020-01-01</TableCell>
                                    <TableCell>D1</TableCell>
                                    <TableCell>Good</TableCell>
                                    <TableCell>
                                        <StyledButton variant="contained" color="warning">
                                            Pending
                                        </StyledButton>
                                    </TableCell>
                                    <TableCell>
                                        <StyledButton
                                            onClick={() => {
                                                history.push("/employee/detail");
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

export default ProjectManagement;
