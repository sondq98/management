import MainHeader from "../../components/MainHeader";
import Button from '@material-ui/core/Button';

import StyledButton from "../../components/Button";
import { Grid } from "@material-ui/core";
import StyledInput from "../../components/TextField";
import { useHistory } from "react-router-dom";

import {
    Table,
    TableContainer,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
} from "@material-ui/core";

function DeleteBtn(props) {
    return (
        <>
            <Button
                variant="contained"
                color="error"
                className="btn-30"
                onClick={props.onClick}
                sx={{
                    textTransform: 'capitalize'
                }}
            >
                Delete
            </Button>
        </>
    )
}
function AddBtn(props) {
    return (
        <Button
            variant="contained"
            color="success"
            className="btn-30"
            onClick={props.onClick}
            sx={{
                textTransform: 'capitalize'
            }}
        >
            Add
        </Button>
    )
}

function createProjectMemberData(stt, memberCode, memberName, email, phoneNumber, role, button) {
    return { stt, memberCode, memberName, email, phoneNumber, role, button };
}

const rowsProjectMember = [
    createProjectMemberData('1', 'EMP0001', 'Nguyen Cam Le', 'acb@gmail.com', '0123456789', 'QA', 'Delete'),
    createProjectMemberData('2', 'EMP0002', 'Nguyen Van Nam', 'acb@gmail.com', '0123456789', 'DEVELOPER', 'Delete'),
    createProjectMemberData('3', 'EMP0003', 'Nguyen Thanh Tung', 'acb@gmail.com', '0123456789', 'BA', 'Delete'),
    createProjectMemberData('4', 'EMP0004', 'Do Thu Trang', 'acb@gmail.com', '0123456789', 'TESTER', 'Delete'),
    createProjectMemberData('5', 'EMP0005', 'Pham Van Truong', 'acb@gmail.com', '0123456789', 'LEADER', 'Delete'),
    createProjectMemberData('', '', '', '', '', '', 'Add')
];

function ProjectRegister() {
    const route = useHistory();
    return (
        <div>
            <MainHeader />
            <div className="wrapper">
                <h3 className="headerPanel">Project Register</h3>
                <form className="form">
                    <Grid container item xs={12} mb={3}>
                        <Grid container pl={3} rowGap={3}>
                            <Grid container item mb={0}>
                                <Grid xs={1.5} alignItems="center" container item>
                                    <label htmlFor="">Company <span className="required">*</span></label>
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
                            <Grid container item mb={0}>
                                <Grid xs={1.5} alignItems="center" container item>
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
                            <Grid container item mb={0}>
                                <Grid xs={1.5} alignItems="center" container item>
                                    <label htmlFor="">Division <span className="required">*</span></label>
                                </Grid>
                                <Grid item>
                                    <Grid container item columnGap={1}>
                                        <StyledInput
                                            size="small"
                                            placeholder="Branch code"
                                        />
                                        <StyledInput
                                            size="medium"
                                            placeholder="Please enter Branch name "
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid xs={1.5} alignItems="center" container item>
                                    <label htmlFor="">Project <span className="required">*</span></label>
                                </Grid>
                                <Grid item>
                                    <Grid container item columnGap={1}>
                                        <StyledInput
                                            size="medium"
                                            placeholder="Enter the Project name"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid xs={1.5} alignItems="center" container item>
                                    <label htmlFor="">PM <span className="required">*</span></label>
                                </Grid>
                                <Grid item>
                                    <Grid container item columnGap={1}>
                                        <StyledInput
                                            size="medium"
                                            placeholder="Enter the Project Manager"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid xs={1.5} alignItems="center" container item>
                                    <label>Start Date <span className="required">*</span></label>
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
                            <Grid container item mb={0}>
                                <Grid xs={1.5} container item pt={1.5}>
                                    <label htmlFor="">
                                        Team member
                                    </label>
                                </Grid>
                                <Grid item xs={9.5}>
                                    <TableContainer sx={{
                                        borderRadius: '6px',
                                        paddingBottom: '10px',
                                        boxShadow: '30px 5px 90px rgba(0, 0, 0, .16), -10px -5px 40px rgba(0, 0, 0, .16)'
                                    }}>
                                        <Table sx={{
                                            boxShadow: '30px 3px 90px rgba(0, 0, 0, .16)'
                                        }}>
                                            <TableHead
                                                sx={{
                                                    backgroundColor: "#72acff",
                                                }}
                                            >
                                                <TableRow>
                                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>STT</TableCell>
                                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Member Code</TableCell>
                                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Member Name</TableCell>
                                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Email</TableCell>
                                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Phone Number</TableCell>
                                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Role</TableCell>
                                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}></TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rowsProjectMember.map((row) => (
                                                    <TableRow
                                                        key={row.stt}
                                                    >
                                                        <TableCell align="center" padding="none">{row.stt}</TableCell>
                                                        <TableCell align="center" padding="none">{row.memberCode}</TableCell>
                                                        <TableCell align="center" padding="none">{row.memberName}</TableCell>
                                                        <TableCell align="center" padding="none">{row.Email}</TableCell>
                                                        <TableCell align="center" padding="none">{row.phoneNumber}</TableCell>
                                                        <TableCell align="center" padding="none">{row.role}</TableCell>
                                                        <TableCell align="center" padding="none">
                                                            {row.button === 'Delete' ? <DeleteBtn />
                                                                : row.button === 'Add' ? <AddBtn />
                                                                    : ''}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid xs={1.5} alignItems="center" container item>
                                    <label htmlFor="">Manage tool</label>
                                </Grid>
                                <Grid item>
                                    <Grid container item columnGap={3}>
                                        <StyledInput
                                            size="large"
                                            placeholder="https://redmine.com"
                                        />
                                        <Grid item alignItems="center" margin="auto">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                sx={{
                                                    width: "60px",
                                                    height: "30px",
                                                    textTransform: "capitalize",
                                                    padding: "0"
                                                }}
                                            >
                                                Go to
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid xs={1.5} alignItems="center" container item>
                                    <label htmlFor="">Document</label>
                                </Grid>
                                <Grid item>
                                    <Grid container item columnGap={3}>
                                        <StyledInput
                                            size="large"
                                            placeholder="https://drive.google.com/drive"
                                        />
                                        <Grid item alignItems="center" margin="auto">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                sx={{
                                                    width: "60px",
                                                    height: "30px",
                                                    textTransform: "capitalize",
                                                    padding: "0"
                                                }}
                                            >
                                                Go to
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container item mb={0}>
                                <Grid xs={1.5} container item pt={1.5}>
                                    <label htmlFor="">Description</label>
                                </Grid>
                                <Grid item>
                                    <Grid container item columnGap={1}>
                                        <StyledInput
                                            size="large"
                                            height="100px"
                                            placeholder="Please enter description"
                                            alignItems="baseline"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <hr />
                    <div className="form-btn">
                        <div></div>
                        <div className="wrapper-btn">
                            <StyledButton
                                color="primary"
                                sx={{ color: "white" }}
                                variant="contained"
                            >
                                Update
                            </StyledButton>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    route.push("/project");
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
                </form>
            </div>
        </div >
    );
}

export default ProjectRegister;
