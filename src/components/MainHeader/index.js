import * as React from "react";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Logout from "@material-ui/icons/Logout";

import SideBar from "../SideBar";

import "./style.css";

export default function MainHeader() {
  let history = useHistory();

  // Handle for Account Button
  const [anchorElAccount, setAnchorElAccount] = React.useState(null);
  const openAccount = Boolean(anchorElAccount);
  const handleClickAccount = (event) => {
    setAnchorElAccount(event.currentTarget);
  };
  const handleCloseAccount = () => {
    setAnchorElAccount(null);
  };

  //Handle for Logo Button
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickHome = () => {
    history.push("/home");
  };
  const handleClickProfile = () => {
    history.push("/profile");
  };
  const handleClickLogout = () => {
    history.push("/login");
  };

  return (
    <div className="mainHeader">
      <div className="logo">
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            paddingLeft: 3,
            width: 290,
            height: 50,
            fontSize: 28,
            fontWeight: "bold",
            color: "#131523",
            textTransform: "capitalize",
          }}
        >
          Logo
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <SideBar></SideBar>
        </Menu>
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="">
                  <IconButton
                    onClick={handleClickAccount}
                    size="small"
                    sx={{ ml: 0 }}
                  >
                    <Avatar sx={{ width: 28, height: 28 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorElAccount}
                open={openAccount}
                onClose={handleCloseAccount}
                onClick={handleCloseAccount}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    px: 2.5,
                    "& .MuiAvatar-root": {
                      width: 24,
                      height: 24,
                      mr: 1.5,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClickProfile}>
                  <Avatar /> Profile
                </MenuItem>
                <hr />
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
