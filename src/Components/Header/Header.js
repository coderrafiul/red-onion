import React from 'react';
import Logo from '../../images/logo2.png'
import './Header.css';
import Cart from '../../ICON/cart2.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Link } from 'react-router-dom';

const Header = (props) => {
    const handleSignOut= ()=>{
        firebase.auth().signOut()
        .then(res=>{
          const signedOutUser={
            isSignedIn: false,
            name: '',
            email: '',
            photo: '',
            password: '',
            confirmPass: '',
            error: '',
            isValid: false,
            existingUser: false
          }
          props.setUser(signedOutUser);
        })
        .catch(err=>{
    
        })
      }
    console.log(props);

    return (
        <div className="header d-flex justify-content-between">
            <div className="logo">
            <img src={Logo} alt=""/>
            </div>
            <div className="checkin d-flex align-items-center">
                <a href="/">Home</a>
                <a href="/cart"><img src={Cart} alt=""/><span className="badge bg-danger">{props.finalCart.length}</span> </a>
                <a href="/login">Login</a>
                { props.user.isSignedIn ? 
                    <button onClick={handleSignOut}>SignOut</button>
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