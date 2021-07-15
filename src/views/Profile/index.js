import React, { Component } from 'react';
import "./style.css"

import MainHeader from '../../components/MainHeader'

class Profile extends Component {
    render() {
        return (
                <div className="Profile">
                    <MainHeader></MainHeader>
                    <div className="mainProfile">
                        <div className="box"></div>
                    </div>
                </div>
        )
    }
}

export default Profile;
