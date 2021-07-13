import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Popover, OverlayTrigger, Navbar } from "react-bootstrap";
import { HouseDoor } from "react-bootstrap-icons";

import SideBar from "../SideBar/SideBar";

import './MainHeader.css'

class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flagOpen: false,
        };
    }

    handleSideBar = () => {
        this.setState({
            flagOpen: !this.state.flagOpen,
        });
    };

    render() {
        const popover = (
            <Popover id="popover-basic">
                <Popover.Content>
                    <Navbar collapseOnSelect className="blue-box">
                        <Link to="/profile">
                            <Navbar.Brand>
                                <HouseDoor />
                                <span style={{ padding: "0 15px", fontSize: "16px" }}>Profile</span>
                            </Navbar.Brand>
                        </Link>
                    </Navbar>
                    <Navbar className="blue-box">
                        <Link to="/login">
                            <Navbar.Brand onClick={this.handleLogout}>
                                <HouseDoor /> <span style={{ padding: "0 10px", fontSize: "16px" }}>Logout</span>
                            </Navbar.Brand>
                        </Link>
                    </Navbar>
                </Popover.Content>
            </Popover>
        );

        const Avatar = () => (
            <OverlayTrigger trigger="click" placement="bottom-end" overlay={popover}>
                <img src="/user.png" alt="user" className="headerUserImg"/>
            </OverlayTrigger>
        );

        return (
            <div>
                <div className="mainHeader">
                    <div className="logo" onClick={this.handleSideBar}>
                        <h3>Logo</h3>
                        
                    </div>
                    <div className="nav">
                        <div className="navItem">
                            <p>HOME</p>
                        </div>
                        <div className="navItem">
                            <p>ABOUT</p>
                        </div>
                        <div className="navItem">
                            <div className="user">
                                <Avatar />
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.flagOpen && <SideBar key={this.props.location?.pathname} />}
            </div>
        )
    }
}

export default MainHeader
