import React, { useState } from 'react';
import { connect } from "react-redux";

import Paper from '@material-ui/core/Paper';
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";

function createSkillData(skillType, skillName, skillNote, experiences, noteExperiences, level) {
    return { skillType, skillName, skillNote, experiences, noteExperiences, level };
}

//du lieu trong bang skill
const rowsSkill = (props) => {
    const output = [];
    if (props.length <= 6) {
        props.forEach(index => {
            output.push(createSkillData(index.skillType, index.skillName, index.skillNote, index.experiences, index.noteExperiences, index.level));
        })
        for (let i = 0; i < (6 - props.length); ++i) {
            output.push(createSkillData('', '', '', '', '', ''));
        }
        return output;
    } else {
        return props.map(index =>
            createSkillData(index.skillType, index.skillName, index.skillNote, index.experiences, index.noteExperiences, index.level)
        )
    }
}

function SkillTable(props) {

    const { profileReducer, dispatch } = props;
    const { userData } = profileReducer;
    const [userSkillListData, setUserSkillListData] = React.useState(userData.skill.skillList)
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
                    {rowsSkill(userSkillListData).map((row, idx) => (
                        <TableRow
                            key={idx}
                        >
                            <TableCell align="center" padding="none">{row.skillType}</TableCell>
                            <TableCell align="center" padding="none">{row.skillName}</TableCell>
                            <TableCell align="center" padding="none" sx={{ maxWidth: "250px", wordWrap: "break-word", tableLayout: "fixed" }}>{row.skillNote} </TableCell>
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


const mapStateToProps = (state) => {
    return {
        profileReducer: state.profileReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return { dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(SkillTable);