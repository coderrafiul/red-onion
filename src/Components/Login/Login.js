import React from 'react';
import './Login.css';
import { useAuth } from './useAuth';




const Login = () => {

    const auth= useAuth();
 

    const user= auth.user;
    const setUser= auth.setUser;

    console.log(user);


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
     const newUserInfo={
            ...user
        }

 
        // Perform validation
        let isValid= true;
        if(event.target.name === "email"){
            isValid= isValidEmail(event.target.value)
        }

        if(event.target.name === "password"){
            isValid= event.target.value.length> 8 && hasNumber(event.target.value)
        }

     
        newUserInfo[event.target.name]= event.target.value;
        newUserInfo.isValid= isValid;
        setUser(newUserInfo);

        
    }


    const createAccount= (event) =>{

       
        if (user.password !== user.confirmPass) {
            alert("Passwords don't match");
        } else {
            if (user.isValid) {
                auth.signUp(user.email, user.password)
                .then(res=>{
                    window.history.back()
                })
             
             }
             else{
                 console.log("Form is not valid")
             }
        }

       
        event.preventDefault();
        event.target.reset();
    }
    

    const signIn=(event)=>{
        if (user.isValid) {
            auth.signInWithEmailAndPassword(user.email, user.password)
            .then(res=>{
                window.history.back()
            }
                
            )
        }
        else{
            console.log("Couldn't Sign In")
        }
        event.preventDefault();
        event.target.reset();
    }

    

    return (
        <div className="login-page">

        <div className="container">
            <div className="row">
                <div className="col-md-6">

                    {
                        user.isSignedIn && <div>
                        <p>Welcome, {user.name}</p>
                        
                        <p>Your email: {user.email}</p>
                        </div>
                    }

                    <form style={{display: user.existingUser? 'block' : 'none'}} className="login-form" onSubmit={signIn}>
                        <input onBlur={handleChange} type="email" name="email" placeholder="Your E-mail" id="" required/>
                        <br/>
                        <input onBlur={handleChange} type="password" name="password" placeholder="Password" id="" required/>
                        <br/>
                        <input type="submit" value="Sign In" name="" className="btn-submit"/>
                        <br/>
                        
                        <label htmlFor="switchForm2">
                        <p>Don't have an account? <span style={{color: 'red'}} onClick={switchForm2} id="switchForm2">SignUp here</span></p>
                        </label>
                        

                    </form>

                    
                    


                    <form style={{display: !user.existingUser? 'block' : 'none'}} className="login-form" onSubmit={createAccount}>
                        <input onBlur={handleChange} type="text" name="name" placeholder="Your Name" id="" required/>
                        <br/>
                        <input onBlur={handleChange} type="email" name="email" placeholder="Your E-mail" id="" required/>
                        <br/>
                        <input onBlur={handleChange} type="password" name="password" placeholder="Password" id="" required/>
                        <br/>
                        <input onBlur={handleChange} type="password" name="confirmPass" placeholder="Confirm Password" id="" required/>
                        <br/>
                        <input type="submit" value="CreateAccount" name="" className="btn-submit"/>
                        <br/>
                       
                        <label htmlFor="switchForm1">
                        <p>Already have an account? <span style={{color: 'red'}} onClick={switchForm1}  id="switchForm1">Login here</span></p>
                        </label>
                    
                    </form>
                    {
                        user.error && <p style={{color:"red"}}>{user.error}</p>
                    }
                  
                    

                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;