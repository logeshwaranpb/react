import React, { Component } from 'react';
import './header.css';
//import logo from '../images/logo.png';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="brand-logo tooltipped" data-position="bottom" data-delay="50" data-tooltip="Home">
                        <img src="./images/logo.png" alt="logo"></img>
                    </a>
                </div>
            </nav>
        );
    }
}

export default Header;
