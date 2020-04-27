import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import firebaseConfig from "../../firebase.config";
firebase.initializeApp(firebaseConfig);


const Login = (props) => {

    const user= props.user;
    const setUser= props.setUser;

    // const[user, setUser]= useState({
    //     isSignedIn: false,
    //     name: '',
    //     email: '',
    //     photo: '',
    //     password: '',
    //     confirmPass: '',
    //     error: '',
    //     isValid: false,
    //     existingUser: false
    // })
    // const auth= Auth();
    // console.log(auth.signInWithGoogle);

    const isValidEmail= email =>  /(.+)@(.+){2,}\.(.+){2,}/.test(email);
    const hasNumber = input => /\d/.test(input);

    const switchForm1 = () =>{
        const createdUser ={...user};
        createdUser.existingUser= true;
        setUser(createdUser)
        console.log()
    }

    const switchForm2 = () =>{
        const createdUser ={...user};
        createdUser.existingUser= false;
        setUser(createdUser)
        console.log()
    }

    const handleChange = event =>{
        let isValid= true;

        const newUserInfo={
            ...user
        }

        // Password confirmation

        // if(event.target.name === "password"){
        //     isValid= 
        // }

        // Perform validation
        if(event.target.name === "email"){
            isValid= isValidEmail(event.target.value)
        }

        if(event.target.name === "password"){
            isValid= event.target.value.length> 8 && hasNumber(event.target.value)
        }

        newUserInfo[event.target.name]= event.target.value; 
        newUserInfo.isValid = isValid;
        setUser(newUserInfo);
        
    }

    const signedInUser = (event)=>{
        if(user.isValid){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                console.log(res)
                const createdUser ={...user};
                createdUser.isSignedIn= true;
                createdUser.error= '';
                setUser(createdUser)
               
            })
            .catch(err =>{
                console.log(err)
                const createdUser ={...user};
                createdUser.isSignedIn= false;
                createdUser.error= err.message;
                setUser(createdUser)
            })
        }
        else{
            console.log("Form is not valid")
        }
        
        event.preventDefault();
        event.target.reset();
    }

    const createAccount= (event)=>{
        if(user.isValid){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                console.log(res)
                const createdUser ={...user};
                createdUser.isSignedIn= true;
                createdUser.error= '';
                setUser(createdUser)
               
            })
            .catch(err =>{
                console.log(err)
                const createdUser ={...user};
                createdUser.isSignedIn= false;
                createdUser.error= err.message;
                setUser(createdUser)
            })
        }
        else{
            console.log("Form is not valid")
        }
        
        event.preventDefault();
        event.target.reset();
    }

    

    return (
        // <div>
        //     <h1>Please Login to order...</h1>
        //     <form>
        //     <input type="text" name="" id=""/>
        //     </form>
        //     <button onClick={auth.signInWithGoogle}>Sign in with google</button>
        // </div>

        <div className="container">
            <div className="row">
                <div className="col-md-6">

                    <form style={{display: user.existingUser? "block" : "none"}} className="login-form" onSubmit={signedInUser}>
                        <input onBlur={handleChange} type="email" name="email" placeholder="Your E-mail" id="" required/>
                        <br/>
                        <input onBlur={handleChange} type="password" name="password" placeholder="Password" id="" required/>
                        <br/>
                        <input type="submit" value="Sign In" name="" className="btn-submit"/>
                        <br/>
                        
                        <label htmlFor="switchForm2">
                        <p>Don't have an account? <span onClick={switchForm2} id="switchForm2">SignUp here</span></p>
                        </label>
                        

                    </form>

                    
                    


                    <form style={{display: !user.existingUser? "block": "none"}} className="login-form" onSubmit={createAccount}>
                        <input onBlur={handleChange} type="text" name="name" placeholder="Your Name" id="" required/>
                        <br/>
                        <input onBlur={handleChange} type="email" name="email" placeholder="Your E-mail" id="" required/>
                        <br/>
                        <input onBlur={handleChange} type="password" name="password" placeholder="Password" id="" required/>
                        <br/>
                        <input onBlur={handleChange} type="password" name="password" placeholder="Confirm Password" id="" required/>
                        <br/>
                        <input type="submit" value="CreateAccount" name="" className="btn-submit"/>
                        <br/>
                       
                        <label htmlFor="switchForm1">
                        <p>Already have an account? <span onClick={switchForm1} id="switchForm1">Login here</span></p>
                        </label>
                    
                    </form>
                    {
                        user.error && <p style={{color:"red"}}>{user.error}</p>
                    }
                  
                    

                </div>
            </div>
        </div>
    );
};

export default Login;