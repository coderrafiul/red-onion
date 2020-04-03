import React from 'react';
import Logo from '../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer d-flex justify-content-between align-items-center">
                <div className="logo">
                    <img src={Logo} alt=""/>
                </div>
                <div className="footer-desc d-flex justify-content-between">
                    <div className="first">
                        <ul>
                            <li>About online food</li>
                            <li>Read our blog</li>
                            <li>Signup to deliver</li>
                            <li>Add your restaurant</li>
                        </ul>
                    </div>
                    <div className="second">
                        <ul>
                            <li>Get help</li>
                            <li>Read FAQs</li>
                            <li>View all cities</li>
                            <li>Restaurant near me</li>
                        </ul>
                    </div>
                    <footer>All rights reserved©rafiul-razib</footer>
                </div>
            </div>
        </div>
    );
};

export default Footer;