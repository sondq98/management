import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Logout from '@material-ui/icons/Logout';
import { useHistory } from "react-router-dom";


import './style.css'




export default function MainHeader() {
    let history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }; 
    const handleClickHome = () => {
        history.push("/home");
    }
    const handleClickProfile = () => {
        history.push("/profile");
    }
    const handleClickLogout = () => {
        history.push("/login");
    }

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="mainHeader">
            <div className="logo">
                <h3>Logo</h3>
            </div>
            <div className="nav">
                <div className="navItem">
                    <p onClick={handleClickHome}>HOME</p>
                </div>
                <div className="navItem">
                    <p>ABOUT</p>
                </div>
                <div className="navItem">
                    <div className="user">
                        <React.Fragment>
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                <Tooltip title="">
                                    <IconButton onClick={handleClick} size="small" sx={{ ml: 0 }}>
                                        <Avatar sx={{ width: 28, height: 28 }}>M</Avatar>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 28,
                                            height: 28,
                                            ml: -0.5,
                                            mr: 1.5,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleClickProfile}>
                                    <Avatar/> Profile
                                </MenuItem>
                                <Divider />

                                <MenuItem onClick={handleClickLogout}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                    </div>
                </div>
            </div>
        </div>
    );
}