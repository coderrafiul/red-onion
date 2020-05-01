import React from 'react';
import Logo from '../../images/logo2.png'
import './Header.css';
import Cart from '../../ICON/cart2.png';
// import * as firebase from "firebase/app";
// import "firebase/auth";
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Header = (props) => {

  const auth= useAuth();

    return (
        <div className="header d-flex justify-content-between">
            <div className="logo">
            <img src={Logo} alt=""/>
            </div>
            <div className="checkin d-flex align-items-center">
                <a href="/">Home</a>
                <a href="/cart"><img src={Cart} alt=""/><span className="badge bg-danger">{props.finalCart.length}</span> </a>
                
                { auth.user.isSignedIn? 
                    <button onClick={auth.signOut}>SignOut</button>
                    :
                    <Link to="/login">
                    <button>SignIn</button>
                    </Link>
                    }
            </div>
        </div>
    );
};

export default Header;