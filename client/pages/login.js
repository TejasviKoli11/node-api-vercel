import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import styles from "./login.module.css";

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState({});
  const [isSubmitted, setSubmitted] = useState(false);
  const router = useRouter();

  const login = () => {
    axios.post("http://localhost:4000/login", user)
      .then(res => setLoginUser(res.data.user))
      .catch(error => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { uname, pass } = event.target.elements;

    const database = [
      {
        username: "Tejasvi",
        password: "password",
      },
      {
        username: "Aman",
        password: "password",
      },
      {
        username: "Sparsh",
        password: "password",
      },
    ];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessage({ name: "pass", message: "Invalid password" });
      } else {
        setSubmitted(true);
        if (userData.username === "Aman") {
          router.push("/uservents");
        } else {
          router.push("/technicianVentInfo");
        }
      }
    } else {
      setErrorMessage({ name: "uname", message: "Invalid username" });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessage.name && (
      <div className={styles.error}>{errorMessage.message}</div>
    );

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
              className={styles.label}
            />
            {renderErrorMessage("uname")}
          </div>
          <div className={styles.inputcontainer}>
            <label>Password</label>
            <input
              type="password"
              name="pass"
              required
              className={styles.label}
            />
            {renderErrorMessage("pass")}
          </div>
          <div className={styles.buttoncontainer}>
            <input type="submit" value="Login" />
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
        <div className={styles.loginform}>
          <div className={styles.title}>Login</div>
          {isSubmitted ? (
            <div>User is successfully logged in</div>
          ) : (
            renderForm
          )}
        </div>
      </div>
    </div>
  );
}
