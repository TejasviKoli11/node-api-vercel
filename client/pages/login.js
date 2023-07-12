import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { FaHome, FaPhone, FaEnvelope, FaFax } from 'react-icons/fa';
import styles from "./login.module.css";
<<<<<<< HEAD
import User from "../../server/models/user";
//import useLogin from "../hooks/useLogin";
//import { FaHome, FaPhone, FaEnvelope, FaFax } from 'react-icons/fa';
=======
>>>>>>> da18f363380b778ad6235abf53d3c6a97c07c92b

import useLogin from "../hooks/useLogin";

export default function LoginPage() {
<<<<<<< HEAD

  //const [errorMessage, setErrorMessage] = useState({});

  //const [isSubmitted, setSubmitted] = useState(false);

  const { errorMessage, isSubmitted } = useLogin();
  const router = useRouter();
=======
  //const [errorMessage, setErrorMessage] = useState({});
  //const [isSubmitted, setSubmitted] = useState(false);
  const { errorMessage, isSubmitted } = useLogin();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

>>>>>>> da18f363380b778ad6235abf53d3c6a97c07c92b
  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
<<<<<<< HEAD
      login = await axios.post("/login", {
        username: uname.value,
        password: pass.value,
      });

      const { message, body } = login.data;

      if (message === "logged in") {
        useLogin();
        if (body.user.role === "technician") {
          router.push("/uservents");
=======
      console.log(email, password);
      axios.post('http://localhost:4000/login',{
        email: email,
        password: password
      }).then((response)=>{
        console.log(response.data);
        var message = response.data;
        if (message === "logged in") {
          useLogin();
          if (body.user.role === "technician") {
            router.push("/uservents");
            return;
          } else {
            router.push("/userStuffs");
            return;
          }
>>>>>>> da18f363380b778ad6235abf53d3c6a97c07c92b
        } else {
          router.push("/dashboard");
        }
<<<<<<< HEAD
      } else {
        //setErrorMessage({ name: "login", message: message });
      }

=======
      }, (error) =>{
        console.log(error);
      });
>>>>>>> da18f363380b778ad6235abf53d3c6a97c07c92b
    } catch (error) {
      console.error("Error occurred while fetching user data:", error);
      //setErrorMessage({ name: "login", message: "Internal server error" });
    }
  };

<<<<<<< HEAD
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const renderErrorMessage = (name) =>
    name === errorMessage.name && (
      <div className={styles.error}>{errorMessage.message}</div>

    );
=======
  //const renderErrorMessage = (name) =>
   // name === errorMessage.name && (
    //  <div className={styles.error}>{errorMessage.message}</div>
   // );
>>>>>>> da18f363380b778ad6235abf53d3c6a97c07c92b

   //{renderErrorMessage("pass")}
   //{renderErrorMessage("uname")}
  const renderForm = (
    
    <div>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputcontainer}>
            <label>Username</label>
            <input
              type="text"
              name="uname"
              required
              onChange={(e)=>setEmail(e.target.value)}
              className={styles.label}
            />
           
          </div>
          <div className={styles.inputcontainer}>
            <label>Password</label>
            <input
              type="password"
              name="pass"
              required
              onChange={(e)=>setPassword(e.target.value)}
              className={styles.label}
            />
            
          </div>
          <div className={styles.buttoncontainer}>
<<<<<<< HEAD
            <input type="submit" value="Login" onClick={(e) => {useLogin}}/>
=======
            <input type="submit" value="Login" onClick={(e) => useLogin()}/>
>>>>>>> da18f363380b778ad6235abf53d3c6a97c07c92b
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
            <p className={styles.button}> Contact Us </p>
          </Link>
          <Link href="/about">
            <p className={styles.button}> About Us </p>
          </Link>
        </div>
      </nav>
      <div className={styles.app}>
      <div className={styles.addimage}>
      <img src="ventImage.png" alt="ventImage"/>
      <div className={styles.addTextonImage}>
        <p>
          Less pollution, less radiation, healthier home
        </p>
      </div>
      </div>
      <div className={styles.loginform}>
          <div className={styles.title}>Login</div>
          {isSubmitted ? (
            <div>User is successfully logged in</div>
          ) : (
            renderForm
          )}
      </div>
<<<<<<< HEAD
    </div>
    <div>

            <footer className={styles.footer}>
            <div className={styles.column}>
=======
    </div> 
    <div>
                <footer className={styles.footer}>
            <div className={styles.column}>
              
>>>>>>> da18f363380b778ad6235abf53d3c6a97c07c92b
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
<<<<<<< HEAD
            <div className={styles.column}>
=======

            <div className={styles.column}>

>>>>>>> da18f363380b778ad6235abf53d3c6a97c07c92b
              <h3 id={styles.h3f}>Company</h3>
              <ul id={styles.ulf}>
                <li id={styles.lif}>
                  <a href="/" id={styles.af}>Home</a>
                </li>
<<<<<<< HEAD
                <li id={styles.lif}>
=======
                <li id={styles.lif}> 
>>>>>>> da18f363380b778ad6235abf53d3c6a97c07c92b
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
<<<<<<< HEAD
=======


>>>>>>> da18f363380b778ad6235abf53d3c6a97c07c92b
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
<<<<<<< HEAD
=======

>>>>>>> da18f363380b778ad6235abf53d3c6a97c07c92b
            </div>
          </footer>
          </div>
      </div>
<<<<<<< HEAD
=======
      
>>>>>>> da18f363380b778ad6235abf53d3c6a97c07c92b
  );
}

