import Link from 'next/link';
import  styles from './login.module.css';
import { FaHome, FaPhone, FaEnvelope, FaFax } from 'react-icons/fa';
import { useRouter } from 'next/router';
import axios from "axios";

//import React from 'react'

//import react functions for checking the states, if the form is submitted and printing error message
import React, {useState} from "react";
//import { ReactDOM } from 'react-dom';


  const Login = ({setLoginUser}) => {
    //const history = useHistory()
      const [user,setUser] = useState({
        name:"",
        password:""
      })
      const handleChange = e => {
        const {name,value} = e.target
        setUser({
          ...user,
          [name]:value
        })
      }

      const login = () =>{
        axios.post("http://localhost:4000/login",user)
        .then(res=>setLoginUser(res.data.user))
      }
  }


export default function LoginPage() {
  const Login = ({setLoginUser})=> {
    const Login = ({setLoginUser}) => {
      const history = useHistory()
        const [user,setUser] = useState({
          name:"",
          password:""
        })
        const handleChange = e => {
          const {name,value} = e.target
          setUser({
            ...user,
            [name]:value
          })
        }
  
        const login = () =>{
          axios.post("http://localhost:4000/login",user)
          .then(res=>setLoginUser(res.data.user))
        }
    }
  }
  

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
      //----------------------------------
      const router = useRouter();
    //----------------------------------

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
            //console.log("Hello ", uname.value);

            //-----------------------------------
            if (userData.username === "Aman"){
              router.push('/uservents');
            } else {
              router.push('/technicianVentInfo');
            }
            //-------------------------------------
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
    
      //code for login form
      const renderForm = (
        <div>
        <div className={styles.form}> 
          <form >
            <div className={styles.inputcontainer}>
              <label>Username </label>
              <input type="text" name="uname" required class="username" onChange={(e)=>setUser(e.target.value)}className={styles.label}/>
              {renderErrorMessage("uname")}
            </div>
            <div className={styles.inputcontainer}>
              <label>Password </label>
              <input type="password" name="pass" onChange={(e)=>setUser(e.target.value)} required class="username" className={styles.label}/>
              {renderErrorMessage("pass")}
            </div>
            <div className={styles.buttoncontainer}>
              <input type="button" onClick={Login} value="Login"/>
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
              <Link href="/">
              <p className={styles.button}> Home </p>
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
            {isSubmitted ? (
            <div>
            <div>User is successfully logged in</div>
            </div>
            ): (renderForm)}
          </div>
        </div>
    </div>
    );
}
