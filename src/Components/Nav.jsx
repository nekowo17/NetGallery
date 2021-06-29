import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

function Nav() {
    const navStyle = {
        color: 'white',
      textDecoration: 'none',
        padding: '0',
        paddingRight: '2vh',
        paddingLeft: '2vh'
    };
    const imgStyle = {
        height: '6vh',
        padding: '2vh'
    };

    return (
        <nav>
            <img src={logo} style={imgStyle}/>
            <navLinks>
            <ul className="nav-links">
                <Link to='/' style={navStyle}>
                    <li>Main</li>
                </Link>
                <Link to='/events' style={navStyle}>
                    <li>Events</li>
                </Link>
                <Link to='/upload' style={navStyle}>
                    <li>Upload</li>
                </Link>
            </ul>
            <ul className="nav-links">
                <Link to='/login' style={navStyle}>
                    <li><b>Log In</b></li>
                </Link>
                or
                <Link to='/register' style={navStyle}>
                    <li><b>Create an Account</b></li>
                </Link>
            </ul>
            </navLinks>
        </nav>
    )
}

export default Nav