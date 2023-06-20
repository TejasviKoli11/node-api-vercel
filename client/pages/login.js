import Link from 'next/link';
import  styles from './login.module.css';

//import React from 'react'

//import react functions for checking the states, if the form is submitted and printing error message
import React, {useState} from "react";
//import { ReactDOM } from 'react-dom';



export default function LoginPage() {

    //react states for checking
    const[errorMessage, setErrorMessage] = useState({});
    const [isSubmitted, setSubmitted] = useState(false);

    //User login, providing database for checking purpose

    const database = [
        {
            username : "Tejasvi",
            password: "password"
        },
        {
            username : "Aman",
            password: "password"
        },
        {
            username : "Sparsh",
            password: "password"
        },
    ];

    //for error - if wrong password/username
    const errors = {
        uname: "Invalid username",
        pass: "Invalid password"
      };
    
      const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        var { uname, pass } = document.forms[0];
    
        // Find user login info
        const userData = database.find((user) => user.username === uname.value);
    
        // Compare user info
        if (userData) {
          if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessage({ name: "pass", message: errors.pass });
          } else {
            setSubmitted(true);
          }
        } else {
          // Username not found
          setErrorMessage({ name: "uname", message: errors.uname });
        }
      };
    
      //  code for error message
      const renderErrorMessage = (name) =>
        name === errorMessage.name && (
          <div className={styles.error}>{errorMessage.message}</div>
        );
    
      // JSX code for login form
      const renderForm = (
        <div className={styles.form}> 
          <form onSubmit={handleSubmit}>
            <div className={styles.inputcontainer}>
              <label>Username </label>
              <input type="text" name="uname" required class="username" className={styles.label}/>
              {renderErrorMessage("uname")}
            </div>
            <div className={styles.inputcontainer}>
              <label>Password </label>
              <input type="password" name="pass" required class="username" className={styles.label}/>
              {renderErrorMessage("pass")}
            </div>
            <div className={styles.buttoncontainer}>
              <input type="submit" value="Login"/>
            </div>
          </form>
          <Link href="/forgotpass" className={styles.fgtpass}>
            Forgot Password?
          </Link>
        </div>  
      );
    
      return (
        <div className={styles.app}>
          <div className={styles.loginform}>
            <div className={styles.title}>Login</div>
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
          </div>
        </div>
    
    )
}
