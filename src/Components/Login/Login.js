import React from 'react';
import Auth from '../UseAuth/UseAuth';

const Login = () => {
    const auth= Auth();
    console.log(auth.signInWithGoogle);
    return (
        <div>
            <h1>Please Login to order...</h1>
            <button onClick={auth.signInWithGoogle}>Sign in with google</button>
        </div>
    );
};

export default Login;