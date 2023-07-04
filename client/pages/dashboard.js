import Link from 'next/link';

import React from 'react';

import styles from './dashboard.module.css';




const DashboardPage = () => {

  return (

    <div className={styles.background}>

      <div className={styles.dashboarditem}>

      <div className="profile-icon">

        {/* User profile icon */}

        <img src="/profile-icon.png" alt="Profile" />

      </div>

      <div className="search-bar">

        {/* Search bar */}

        <input type="text" placeholder="Search" />

      </div>

      <div className="login-logout-icons">

        <Link href="/login">login</Link>

      </div>

      </div>




      <div className={styles.dashboarditem1}>

      <div className={styles.container}>

      <div className={styles.sidebar}>

        <ul>

          <li><Link href="/dashboard">Dashboard</Link></li>

          <li><Link href="/buildings">Buildings</Link></li>

          <li><Link href="/build-graph">Build Graph</Link></li>

          <li><Link href="/view-users">View Users</Link></li>

          <li><Link href="/settings">Settings</Link></li>

        </ul>

      </div>

    </div>

      </div>

      <div className={styles.dashboarditem2}>Dashboard Item 3</div>

      <div className={styles.dashboarditem3}>Dashboard Item 4</div>

      <div className={styles.dashboarditem4}>Dashboard Item 5</div>

    </div>

  );

};




export default DashboardPage;