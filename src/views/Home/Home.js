import React, { Component } from 'react';
import './Home.css'

import MainHeader from '../../components/MainHeader/MainHeader'

class Home extends Component {
    render() {
        return (
                <div className="home">
                    <MainHeader></MainHeader>
                    <div className="mainHome">
                    </div>
                </div>
        )
    }
}

export default Home;
