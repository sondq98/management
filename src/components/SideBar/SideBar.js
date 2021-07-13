import React, { Component } from "react";
import { HouseDoor } from "react-bootstrap-icons";
import { Navbar, Nav } from "react-bootstrap";
import "./SideBar.css";
class SideBar extends Component {
    componentDidMount() {
        console.log('path', window.location.pathname);
    }

    render() {
        const pathKey = window.location.pathname;
        return (
            <div className="sidebar">
                <Navbar collapseOnSelect>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav defaultActiveKey="/home" activeKey={pathKey} className="flex-column">
                            <Nav.Link className="blue-box" href="/home">
                                <HouseDoor /> <span style={{ padding: "10px" }}>Home</span>
                            </Nav.Link>
                            <Nav.Link className="blue-box" href="/branch/management">
                                <HouseDoor /> <span style={{ padding: "10px" }}>Branch</span>
                            </Nav.Link>
                            <Nav.Link className="blue-box" href="/division/management">
                                <HouseDoor /> <span style={{ padding: "10px" }}>Division</span>
                            </Nav.Link>
                            <Nav.Link className="blue-box" href="/project/management">
                                <HouseDoor /> <span style={{ padding: "10px" }}>Project</span>
                            </Nav.Link>
                            <Nav.Link className="blue-box" href="/human-resource/management">
                                <HouseDoor />
                                <span style={{ padding: "10px" }}>Human Resource</span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default SideBar;
