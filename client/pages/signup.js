import React, { useState } from "react";
import styles from './signup.module.css';

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedUsername, setSubmittedUsername] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const formErrors = {};
    if (username.trim() === "") {
      formErrors.username = "Required field";
    }
    if (email.trim() === "") {
      formErrors.email = "Required field";
    }
    if (password.trim() === "") {
      formErrors.password = "Required field";
    }

    // Display errors if any, otherwise submit the form
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Handle form submission (e.g., send data to backend)
      console.log("Form submitted:", { username, email, password });
      setIsSubmitted(true);
      setSubmittedUsername(username);
      setSubmittedEmail(email);
      // Reset form fields and errors
      setUsername("");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div className={styles.background}>
    <div className={styles.container}>
      <h1 className={styles.title}>Sign Up</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="username" className={styles.label}>Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className={styles.input}
        />
        {errors.username && <span className={styles.error}>{errors.username}</span>}

        <label htmlFor="email" className={styles.label}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}

        <label htmlFor="password" className={styles.label}>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        {errors.password && <span className={styles.error}>{errors.password}</span>}

        <input type="submit" value="Sign Up" className={styles.button} />
      </form>

      {isSubmitted && (
        <div className={styles.successMessage}>
          <p>Your account has been successfully created!</p>
          <p>Name: {submittedUsername}</p>
          <p>Email: {submittedEmail}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default SignUpPage;


