import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import {
    Table,
    TableContainer,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
} from "@material-ui/core";

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
function createCertificationData(stt, certificate, filename, date, duration) {
    return { stt, certificate, filename, date, duration };
}
function createCertificationUpdateData(stt, certificate, filename, date, duration, button) {
    return { stt, certificate, filename, date, duration, button };
}
const rowsCertification = [
    createCertificationData('1', 'AWS Professtional', 'AWS Professtional', '2020-01-01', '2 years'),
    createCertificationData('2', 'JLPT N1', 'JLPT N1', '2020-01-01', '2 years'),
    createCertificationData('', '', '', '', ''),
    createCertificationData('', '', '', '', ''),
    createCertificationData('', '', '', '', ''),
    createCertificationData('', '', '', '', ''),
];
const rowsCertificationUpdate = [
    createCertificationUpdateData('1', 'AWS Professtional', 'AWS Professtional', '2020-01-01', '2 years', 'Delete'),
    createCertificationUpdateData('2', 'JLPT N1', 'JLPT N1', '2020-01-01', '2 years', 'Delete'),
    createCertificationUpdateData('', '', '', '', '', 'Add'),
    createCertificationUpdateData('', '', '', '', '', ''),
    createCertificationUpdateData('', '', '', '', '', ''),
    createCertificationUpdateData('', '', '', '', '', ''),
];

function CertificationTable() {
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
                        <TableCell align="center" sx={{fontWeight : 'bold'}}>STT</TableCell>
                        <TableCell align="center" sx={{fontWeight : 'bold'}}>Certificate</TableCell>
                        <TableCell align="center" sx={{fontWeight : 'bold'}}>Filename</TableCell>
                        <TableCell align="center" sx={{fontWeight : 'bold'}}>Date</TableCell>
                        <TableCell align="center" sx={{fontWeight : 'bold'}}>Duration</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowsCertification.map((row) => (
                        <TableRow
                            key={row.stt}
                        >
                            <TableCell align="center" padding="none">{row.stt}</TableCell>
                            <TableCell align="center" padding="none">{row.certificate}</TableCell>
                            <TableCell align="center" padding="none">{row.filename}</TableCell>
                            <TableCell align="center" padding="none">{row.date}</TableCell>
                            <TableCell align="center" padding="none">{row.duration}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
function CertificationTableUpdate() {
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
                        <TableCell align="center" sx={{fontWeight : 'bold'}}>STT</TableCell>
                        <TableCell align="center" sx={{fontWeight : 'bold'}}>Certificate</TableCell>
                        <TableCell align="center" sx={{fontWeight : 'bold'}}>Filename</TableCell>
                        <TableCell align="center" sx={{fontWeight : 'bold'}}>Date</TableCell>
                        <TableCell align="center" sx={{fontWeight : 'bold'}}>Duration</TableCell>
                        <TableCell align="center" sx={{fontWeight : 'bold'}}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowsCertificationUpdate.map((row) => (
                        <TableRow
                            key={row.stt}
                        >
                            <TableCell align="center" padding="none">{row.stt}</TableCell>
                            <TableCell align="center" padding="none">{row.certificate}</TableCell>
                            <TableCell align="center" padding="none">{row.filename}</TableCell>
                            <TableCell align="center" padding="none">{row.date}</TableCell>
                            <TableCell align="center" padding="none">{row.duration}</TableCell>
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

function CertificationTab() {
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
    return (
        <div className="certificationTab">
            <div className="certificationTab-TableWrapper">
                {show.showUpdateTable ? <CertificationTableUpdate /> : <CertificationTable />}
                <div className="skillTab-LastUpdateTime">
                    <span className="timeUpdate-label">Last update</span>
                    <span className="timeUpdate">2020-01-01 09:00:00</span>
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

export default CertificationTab;