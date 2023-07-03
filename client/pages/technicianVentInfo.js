import Link from 'next/link';
import styles from './contact.module.css';
import { FaHome, FaPhone, FaEnvelope, FaFax } from 'react-icons/fa';


function Technican() {
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
        </div>
      </nav>

      <p>This will be the technician vent info page and is under working</p>
      import React from 'react';

    <div>
      <div style={{ backgroundColor: 'red', height: '200px' }}>
        <h1>Div 1</h1>
      </div>
      <div style={{ backgroundColor: 'blue', height: '200px' }}>
        <h1>Div 2</h1>
      </div>
      <div style={{ backgroundColor: 'green', height: '200px' }}>
        <h1>Div 3</h1>
      </div>
      <div style={{ backgroundColor: 'yellow', height: '200px' }}>
        <h1>Div 4</h1>
      </div>
    </div>

export default HomePage;

      </div>
    );
  }
  
  export default Technican;