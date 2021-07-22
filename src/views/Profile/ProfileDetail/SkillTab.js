import React, { useState } from 'react';
import { connect } from "react-redux";

import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";


function UpdateBtn(props) {
    return (
        <Button
            variant="contained"
            color="primary"
            className="btn-30"
            onClick={props.onClick}
            sx={{
                textTransform: 'capitalize'
            }}
        >
            Update
        </Button>
    )
}
function ConfirmBtn(props) {
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
            Confirm
        </Button>
    )
}
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

function createSkillData(skillType, skillName, skillNote, experiences, noteExperiences, level) {
    return { skillType, skillName, skillNote, experiences, noteExperiences, level };
}
function createSkillUpdateData(skillType, skillName, skillNote, experiences, noteExperiences, level, button) {
    return { skillType, skillName, skillNote, experiences, noteExperiences, level, button };
}
const rowsSkill = (props) => {
    return (
        [
            createSkillData('Programing languages', 'Java', '', '3 Months', '', 'Level 3'),
            createSkillData('Framework', 'VueJs', '', '3 Months', '', 'Level 3'),
            createSkillData('', '', '', '', '', ''),
            createSkillData('', '', '', '', '', ''),
            createSkillData('', '', '', '', '', ''),
            createSkillData('', '', '', '', '', ''),
        ]
    )
}
const rowsSkillUpdate = (props) => {
    return (
        [
            createSkillUpdateData('Programing languages', 'Java', '', '3 Months', '', 'Level 3', 'Delete'),
            createSkillUpdateData('Framework', 'VueJs', '', '3 Months', '', 'Level 3', 'Delete'),
            createSkillUpdateData('', '', '', '', '', '', 'Add'),
            createSkillUpdateData('', '', '', '', '', '', ''),
            createSkillUpdateData('', '', '', '', '', '', ''),
            createSkillUpdateData('', '', '', '', '', '', ''),
        ]
    );
};
function SkillTable(props) {
    return (
        <TableContainer
            component={Paper}
            sx={{
                borderRadius: '6px',
                paddingBottom: '10px',
                boxShadow: '30px 3px 90px rgba(0, 0, 0, .16), -5px 0px 20px rgba(0, 0, 0, .16)'
            }}>
            <Table
                aria-label="simple table"
                sx={{
                    boxShadow: '30px 3px 90px rgba(0, 0, 0, .16)'
                }}>
                <TableHead
                    sx={{
                        backgroundColor: "#72acff",
                    }}
                >
                    <TableRow>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Skill type</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Skill name</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Skill note</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Experiences</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Note experiences</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Level</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowsSkill().map((row, idx) => (
                        <TableRow
                            key={idx}
                        >
                            <TableCell align="center" padding="none">{row.skillType}</TableCell>
                            <TableCell align="center" padding="none">{row.skillName}</TableCell>
                            <TableCell align="center" padding="none">{row.skillNote}</TableCell>
                            <TableCell align="center" padding="none">{row.experiences}</TableCell>
                            <TableCell align="center" padding="none">{row.noteExperiences}</TableCell>
                            <TableCell align="center" padding="none">{row.level}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
function SkillTableUpdate(props) {
    return (
        <TableContainer sx={{
            borderRadius: '6px',
            paddingBottom: '10px',
            boxShadow: '30px 3px 90px rgba(0, 0, 0, .16), -5px 0px 20px rgba(0, 0, 0, .16)'
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
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Skill type</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Skill name</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Skill note</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Experiences</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Note experiences</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Level</TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowsSkillUpdate().map((row, idx) => (
                        <TableRow key={row.id}>
                            <TableCell align="center" padding="none">{row.skillType}</TableCell>
                            <TableCell align="center" padding="none">{row.skillName}</TableCell>
                            <TableCell align="center" padding="none">{row.skillNote}</TableCell>
                            <TableCell align="center" padding="none">{row.experiences}</TableCell>
                            <TableCell align="center" padding="none">{row.noteExperiences}</TableCell>
                            <TableCell align="center" padding="none">{row.level}</TableCell>
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
    )
}


function SkillTab(props) {
    let history = useHistory();
    const handleClickBack = () => {
        history.push("/profile");
    }
    const [show, setShow] = useState({ showUpdateTable: false, showConfirmBtn: false });
    const onClickUpdateButton = () => {
        setShow({
            showUpdateTable: !show.showUpdateTable,
            showConfirmBtn: !show.showConfirmBtn
        });
    };

    const { userData } = props.profileReducer;
    const [userSkill, setUserSkill] = React.useState(userData.skill)
    console.log(userSkill);

    const nowTableData = userSkill.skillList;
    console.log(nowTableData);

    return (
        <div className="skillTab">
            <div className="skillTab-TableWrapper">
                {show.showUpdateTable ? <SkillTableUpdate /> : <SkillTable />}
                <div className="skillTab-LastUpdateTime">
                    <span className="timeUpdate-label">Last update</span>
                    <span className="timeUpdate">{userSkill.skillLastUpdate}</span>
                </div>

            </div>
            <div>
                <div className="br"></div>
                <div className="footerPanel">
                    <div className="buttonGroup">
                        {show.showConfirmBtn ? <ConfirmBtn onClick={onClickUpdateButton} /> : <UpdateBtn onClick={onClickUpdateButton} />}
                        <Button
                            variant="contained"
                            className="btn-30"
                            onClick={handleClickBack}
                            sx={{
                                textTransform: 'capitalize',
                                bgcolor: '#212121',
                                '&:hover': {
                                    bgcolor: '#080808'
                                }
                            }}
                        >
                            Back
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { ...state };
};
const mapDispatchToProps = (dispatch) => {
    return { dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(SkillTab);