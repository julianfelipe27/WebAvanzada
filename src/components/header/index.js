import React, { Component } from 'react';
import Name from './components/name'
import Information from './components/information'
import profile from './img/profile.PNG'
import './styles.css'

class Header extends Component {
    render() {
        return (
            <div className='headerContainer'>
                <img className='profile' src={profile} alt='profile'></img>
                <div className='generalInfo'>
                <Name />
                <Information />
                </div>
            </div>
        );
    }
}

export default Header;