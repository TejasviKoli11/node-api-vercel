import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './uservents.module.css';
import axios from 'axios';

const HomePage = () => {
  const [roomData, setRoomData] = useState([]);
  const [buildingData, setBuildingData] = useState([]);
  const [userData, setUserData] = useState([]);

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

  useEffect(() => {
    const fetchBuildingData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/buildings');
        const data = response.data;
        setBuildingData(data);
      } catch (error) {
        console.error('Error fetching building data:', error);
      }
    };

    fetchBuildingData();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/user');
        const data = response.data;
        setUserData(data);
      } catch (error) {
        console.error('Error fetching building data:', error);
      }
    };

    fetchUserData();
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

      <h1>Building Data</h1>
      <ul>
        {buildingData.map((building) => (
          <li key={building._id}>
            <p>Name: {building.name}</p>
            <p>Floors: {building.floors}</p>
          </li>
        ))}
      </ul>
      <h1>User Data</h1>
      <ul>
        {userData.map((user) => (
          <li key={user._id}>
            <p>Name: {user.firstName}</p>
            <p>Floors: {user.lastName}</p>
            <p>Role: {user.role}</p>
          </li>
        ))}
      </ul>
      
    </div>
  );
};


export default HomePage;