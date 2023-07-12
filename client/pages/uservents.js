import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './uservents.module.css';

import axios from 'axios';

const HomePage = () => {
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/rooms');
        const data = response.data;
        setRoomData(data);
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };

    fetchRoomData();
  }, []);




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
              <p className={styles.button}> Log Out </p>
              </Link>
            </div>
          </nav>



      <h1>Room Data</h1>
      <ul>
        {roomData.map((room) => (
          <li key={room._id}>
            <p>Name: {room.name}</p>
            <p>Building: {room.building}</p>
            <p>Floor: {room.floor}</p>
          </li>
        ))}
      </ul>   


    </div>
  );
};

export default HomePage;


