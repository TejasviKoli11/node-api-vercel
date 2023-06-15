import Link from 'next/link';
import styles from './login.module.css';

import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here using email and password values
    console.log('Login clicked:', email, password);
  };

  return (
    <div className={styles.container}>
      <h1 className='head'>Login Page</h1>
      <form onSubmit={handleLogin} className='formdisplay'>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className='labelforpass'>Password:</label>
          <input
            type="password"
            className='settingPass'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className='pressbtn'>Login</button>
      </form>
      <div className='linkstopages'>
      <Link href="/index">
          Home Page
        </Link>
       <Link href="/signup">
          SignUp
        </Link>
        <Link href="/forgotpass">
          Forgot Password
        </Link>
        </div>
    </div>
  );
}

export default LoginPage;
