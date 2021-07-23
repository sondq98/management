import React, { useState } from 'react';
import { connect } from "react-redux";

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";

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

const MyTextInput = (props) => {
    return (
        <input
            {...props}
            className="authenFormInput"
            style={{
                width: props.size === "small" ? "110px"
                    : props.size === "medium" ? "250px"
                        : props.size === "large" ? "330px"
                            : "",
                paddingLeft: "10px",
                margin: "0 auto"
            }}
        />
    )
}

const MySelect = ({ ...props }) => (
    <select name={props.name} id="" className="authenFormInput">
        <option value="" selected disabled hidden>Choose here</option>
        {props.options.map(option => (
            <option value={option}>{option}</option>
        ))}
    </select>
)

function createSkillUpdateData(skillType, skillName, skillNote, experiences, noteExperiences, level, button, id) {
    return { skillType, skillName, skillNote, experiences, noteExperiences, level, button, id };
}
//du lieu trong bang skill update
const rowsSkillUpdate = (props) => {
    const output = [];
    if (props.length <= 5) {
        props.forEach(item => {
            output.push(createSkillUpdateData(item.skillType, item.skillName, item.skillNote, item.experiences, item.noteExperiences, item.level, 'delete', item.skillId));
        })
        output.push(createSkillUpdateData('', '', '', '', '', '', 'add'));
        for (let i = 0; i < (5 - props.length); ++i) {
            output.push(createSkillUpdateData('', '', '', '', '', '', ''));
        }
        return output;
    } else {
        output = props.map(item =>
            createSkillUpdateData(item.skillType, item.skillName, item.skillNote, item.experiences, item.noteExperiences, item.level, 'delete', item.skillId)
        )
        output.push(createSkillUpdateData('', '', '', '', '', '', 'add'));
        return output;
    }
};

function SkillTableUpdate(props) {
    const { profileReducer, dispatch } = props;
    console.log(props);
    const { userData } = profileReducer;
    const skillSelectField = profileReducer.skillSelectField;
    const listSkillType = Object.keys(skillSelectField)
    const convertListSkillType = (listSkillType) => {
        return listSkillType.map(item => (
            item.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1")
        ))
    }
    console.log(convertListSkillType(listSkillType));
    console.log(skillSelectField);
    const [userSkillListData, setUserSkillListData] = useState(userData.skill.skillList)

    const reFormatData = [...userSkillListData].map((item, index) => ({
        ...item,
        skillId: index
    }))


    const onChangeInput = (e) => {
        let field = e.target.name ? e.target.name : '';
        let index = e.target.id;
        let newUserSkillListData = [...userSkillListData];
        newUserSkillListData[index][field] = e.target.value;
        setUserSkillListData(newUserSkillListData);
    }
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
                    {rowsSkillUpdate(reFormatData).map((row, idx) => (
                        <TableRow key={idx}>
                            <TableCell align="center" padding="none">
                                {row.skillType ?
                                    <MySelect name={row.skillType} options={skillSelectField.framework} />
                                    : ''
                                }
                            </TableCell>
                            <TableCell align="center" padding="none">{row.skillName}</TableCell>
                            <TableCell align="center" padding="none">
                                {typeof row.id !== "undefined" ?
                                    <MyTextInput
                                        id={row.id}
                                        name="skillNote"
                                        size="small"
                                        value={row.skillNote}
                                        onChange={onChangeInput} />
                                    : ''
                                }
                            </TableCell>
                            <TableCell align="center" padding="none">
                                {typeof row.id !== "undefined" ?
                                    <MyTextInput
                                        id={row.id}
                                        name="experiences"
                                        size="small"
                                        value={row.experiences}
                                        onChange={onChangeInput} />
                                    : ''
                                }
                            </TableCell>
                            <TableCell align="center" padding="none">
                                {typeof row.id !== "undefined" ?
                                    <MyTextInput
                                        id={row.id}
                                        name="noteExperiences"
                                        size="small"
                                        value={row.noteExperiences}
                                        onChange={onChangeInput} />
                                    : ''
                                }</TableCell>
                            <TableCell align="center" padding="none">{row.level}</TableCell>
                            <TableCell align="center" padding="none">
                                {row.button === 'delete' ? <DeleteBtn />
                                    : row.button === 'add' ? <AddBtn />
                                        : ''}
                            </TableCell>
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
export default connect(mapStateToProps, mapDispatchToProps)(SkillTableUpdate);
