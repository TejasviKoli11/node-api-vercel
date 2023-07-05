import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './uservents.module.css';
import axios from 'axios';

const HomePage = () => {
  const [roomData, setRoomData] = useState([]);
   const [ventData, setVentData] = useState([]);

  useEffect(() => {
    const fetchVentData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/ventData',{body:{id:'5d498f88977f79116410691c'}});
        const data = response.data;
        setVentData(data);
      } catch (error) {
        console.error('Error fetching vent data:', error);
      }
    };

    fetchVentData();
  }, []);

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

      <h1>Vent Data</h1>
      <ul>
        {ventData.map((data) => (
          <li key={data._id}>
            <p>Batch No: {data.batchNo}</p>
            <p>Complete: {data.complete}</p>
            <p>Format Code: {data.formatCode}</p>
            <p>Deleted: {data.deleted}</p>
            <p>Device ID: {data.deviceID}</p>
            <p>Schedule Enabled: {data.scheduleEn}</p>
            <p>Samples Count: {data.samplesCnt}</p>
            <p>Start Date: {data.startDate}</p>
            <p>Temperature Interval: {data.tempIntrv}</p>
            <p>Voltage Interval: {data.voltIntrv}</p>
            <p>User ID: {data.userId}</p>
          </li>
        ))}
      </ul>

    </div>
  );
};


export default HomePage;