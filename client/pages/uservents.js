import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const HomePage = () => {
  const [roomData, setRoomData] = useState([]);
  const [buildingData, setBuildingData] = useState([]);

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

  return (
    <div>
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
      <Link href="/login">
            <p> Login </p>
                </Link>
      
    </div>
  );
};


export default HomePage;