import Link from 'next/link';
import  styles from './login.module.css';
import { FaHome, FaPhone, FaEnvelope, FaFax } from 'react-icons/fa';

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
        <div>
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

        </div> 
      );
    
      return (
        <div>
        <nav className={styles.siteNavigation}>
          <div className={styles.logo}>
            <Link href="/">
                <button className={styles.logoButton}>Smart Vents</button>
            </Link>
          </div>
          <div className={styles.menu}>
          <Link href="/login">
          <p className={styles.button}> Login </p>
              </Link>
              <Link href="/signup">
              <p className={styles.button}> Sign Up </p>
              </Link>
              <Link href="/contact">
              <p className={styles.button}> Conatct Us </p>
              </Link>
              <Link href="/about">
              <p className={styles.button}> About Us </p>
              </Link>
          </div>
        </nav>
        
        <div className={styles.app}>
          <div className={styles.loginform}>
            <div className={styles.title}>Login</div>
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
          </div>
        </div>



        
        <div>
                <footer className={styles.footer}>
            <div className={styles.column}>
              
              <h3 id={styles.h3f}>About Us</h3>
              <p id={styles.pf}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat
                tellus eget sapien mollis, eu efficitur orci aliquet.
              </p>
            </div>


            <div className={styles.column}>
              <h3 id={styles.h3f}>Support</h3>
              <ul id={styles.ulf}>
                <li id={styles.lif}>How to Install</li>
                <li id={styles.lif}>FAQ</li>
                <li id={styles.lif}>Published Research</li>
              </ul>
            </div>

            <div className={styles.column}>

              <h3 id={styles.h3f}>Company</h3>
              <ul id={styles.ulf}>
                <li id={styles.lif}>
                  <a href="/" id={styles.af}>Home</a>
                </li>
                <li id={styles.lif}> 
                  <a href="/about" id={styles.af}>About Us</a>
                </li>
                <li id={styles.lif}>
                  <a href="/contact" id={styles.af}>Contact Us</a>
                </li>
                <li id={styles.lif}>
                  <a href="/services" id={styles.af}>Services</a>
                </li>
              </ul>
            </div>


            <div className={styles.column}>
              <h3 id={styles.h3f}>Contact Us</h3>
              <ul id={styles.ulf}>
                <li id={styles.lif}>
                  <FaHome className={styles.icon} />
                  123 Main Street, City, Country
                </li>
                <li id={styles.lif}>
                  <FaPhone className={styles.icon} />
                  +123 456 7890
                </li>
                <li id={styles.lif}>
                  <FaEnvelope className={styles.icon} />
                  info@example.com
                </li>
                <li id={styles.lif}>
                  <FaFax className={styles.icon} />
                  +123 456 7891
                </li>
              </ul>

            </div>
          </footer>
          </div>
    

    </div>
    )
}
