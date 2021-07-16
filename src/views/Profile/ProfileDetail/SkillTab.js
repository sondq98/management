import { useHistory } from "react-router-dom";
import * as React from 'react';
import Button from '@material-ui/core/Button';
import {
    Table,
    TableContainer,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
} from "@material-ui/core";


function SkillTab() {
    let history = useHistory();

    const handleClickBack = () => {
        history.push("/profile");
    }
    return (
        <div className="skillTab">
            <div className="skillTab-TableWrapper">
                <TableContainer sx={{
                    boxShadow: '30px 3px 90px rgba(0, 0, 0, .16), -5px 0px 20px rgba(0, 0, 0, .16)'
                }}>
                    <Table>
                        <TableHead
                            sx={{
                                backgroundColor: "#72acff",
                                textAlign: "center",
                                lineHeight: "2",
                                fontWeight: "bold",
                            }}
                        >
                            <TableRow>
                                <TableCell align="center">Skill type</TableCell>
                                <TableCell align="center">Skill name</TableCell>
                                <TableCell align="center">Skill note</TableCell>
                                <TableCell align="center">Experiences</TableCell>
                                <TableCell align="center">Note experiences</TableCell>
                                <TableCell align="center">Level</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="center">Programing languages</TableCell>
                                <TableCell align="center">Java</TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center">3 Months</TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center">Level 3</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">Framework</TableCell>
                                <TableCell align="center">VueJs</TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center">3 Months</TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center">Level 3</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className="skillTab-LastUpdateTime">
                    <span className="timeUpdate-label">Last update</span>
                    <span className="timeUpdate">2020-01-01 09:00:00</span>
                </div>
            </div>
            <div>
                <div className="br"></div>
                <div className="footerPanel">
                    <div className="buttonGroup">
                        <Button
                            variant="contained"
                            color="primary"
                            className="btn-30"
                            sx={{
                                textTransform: 'capitalize'
                            }}
                        >
                            Update
                        </Button>
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

export default SkillTab;