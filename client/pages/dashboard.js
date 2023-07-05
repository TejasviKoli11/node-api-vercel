import Link from 'next/link';


import React from 'react';

import styles from './dashboard.module.css';


import { icons } from 'react-icons/lib';




const DashboardPage = () => {




  return (




    <div className={styles.background}>

      <div className={styles.dashboarditem}>

    <div className={styles.img}>

    <img src='/vent.png' alt='s-vent' width='30px' height='30px'/> s-vent

    </div>

    <div className="profile-icon">

        {/* User profile icon */}

        <img src="/profile.png" alt="Profile" height='40px' width='40px'/> Jamie Lynn

      </div>

      <div className={styles.searchbar}>




        {/* Search bar */}

        <input className={styles.text} type="text" placeholder="Type to Search...." />




      </div>

      <div className= {styles.loginlogouticons}>

        <Link href="/login">login</Link>

      </div>

      <div className={styles.signup}>

    <Link href="/signup">SignUp</Link>

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




          <li><Link href="/contact">Contact Us</Link></li>




          <li><Link href="/about">About Us</Link></li>




          <li><Link href="/settings">Settings</Link></li>




          <li><Link href="/logout">LogOut</Link></li>

        </ul>




<div>




      <div className={styles.main}> BUILDINGS SORT BY:BUILDING ID

      <div className={styles.temp}> JAMIE'S HOME AVG.TEMP </div>

      <div className={styles.temp2}> WORK BUILDING AVG.TEMP</div>

</div>

     




</div>




      <div className={styles.dashboarditem3}>GRAPH




      <div className={styles.buildgraph}> </div>







      </div>




      <div className={styles.dashboarditem4}>VENTS SORT BY:ROOM</div>




      </div>




    </div>





      </div>






    </div>





  );





};





export default DashboardPage;