import React from 'react';
import Logo from '../../images/logo2.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
            <img src={Logo} alt=""/>
            </div>
        </div>
    );
};

export default Header;