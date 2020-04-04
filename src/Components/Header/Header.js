import React from 'react';
import Logo from '../../images/logo2.png'
import './Header.css';
import Cart from '../../ICON/cart2.png';

const Header = () => {
    return (
        <div className="header d-flex justify-content-between">
            <div className="logo">
            <img src={Logo} alt=""/>
            </div>
            <div className="checkin d-flex align-items-center">
                <a href="/">Home</a>
                <a href="/cart"><img src={Cart} alt=""/></a>
                <a href="/login">Login</a>
                <button>Signup</button>
            </div>
        </div>
    );
};

export default Header;