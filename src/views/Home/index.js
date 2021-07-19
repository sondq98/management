import React, { Component } from 'react';

import MainHeader from '../../components/MainHeader'

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
