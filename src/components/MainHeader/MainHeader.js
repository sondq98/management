import React, { Component } from 'react'

import { Popover, OverlayTrigger, Navbar } from "react-bootstrap";

import './MainHeader.css'

class MainHeader extends Component {
    render() {
        

        return (
            <div className="mainHeader">
                <div className="logo">
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
                            <p>USER</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default MainHeader
