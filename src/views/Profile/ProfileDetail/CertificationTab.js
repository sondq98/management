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

function CertificationTab() {
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
                                <TableCell align="center">STT</TableCell>
                                <TableCell align="center">Certificate</TableCell>
                                <TableCell align="center">Filename</TableCell>
                                <TableCell align="center">Date</TableCell>
                                <TableCell align="center">Duration</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="center">1</TableCell>
                                <TableCell align="center">AWS Professtional</TableCell>
                                <TableCell align="center">AWS Professtional</TableCell>
                                <TableCell align="center">2020-01-01</TableCell>
                                <TableCell align="center">2 years</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">2</TableCell>
                                <TableCell align="center">JLPT N1</TableCell>
                                <TableCell align="center">JLPT N1</TableCell>
                                <TableCell align="center">2020-01-01</TableCell>
                                <TableCell align="center">2 years</TableCell>
                            </TableRow>
                            <TableRow>
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
                            </TableRow>
                            <TableRow>
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
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
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

export default CertificationTab;