import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './uservents.module.css';
import axios from 'axios';

const HomePage = () => {
  const [roomData, setRoomData] = useState([]);
  const [buildingData, setBuildingData] = useState([]);
  const [userData, setUserData] = useState([]);

  const handleLinkClick = () => {
    window.location.href = '/uservents';
    window.location.href = '/uservents';
  };

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
        //const response = 
        await axios.post('http://localhost:4000/buildings',{id: "6492739d625cd683ff5a98f7"}).then((response)=>{

      console.log(response.data);
        var data=response.data;
        setBuildingData(data);
      },
      (error)=>{
      
        console.log(error);
      
      });
        //const data = response.data;
        //setBuildingData(data);
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
  
  // adding room
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:4000/rooms', newRoom);
  //     const createdRoom = response.data;
  //     setRoomData([...roomData, createdRoom]);
  //     setNewRoom({
  //       name: '',
  //       building: '',
  //       floor: 0
  //     });
  //   } catch (error) {
  //     console.error('Error creating room:', error);
  //   }
  // };


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
      {/* <ul>
        {roomData.map((room) => (
          <table>
            <tr>
          <li key={room._id}>
            <p>Name: {room.name}</p>
            <p>Building: {room.building}</p>
            <p>Floor: {room.floor}</p>
          </li>
          </tr>
          </table>
        ))}
      </ul> */}
      <table className={styles.table1}>
      <thead className={styles.thead}>
      <tr className={styles.tr}>
      <th className={styles.th}>Name</th>
      <th className={styles.th}>Building</th>
      <th className={styles.th}>Floor</th>
    </tr>
  </thead>
  <tbody className={styles.tbody}>
    {roomData.map((room) => (
        <tr key={room._id}>
          <Link href="/uservents"><a onClick={handleLinkClick}></a><td>{room.name}</td></Link>
          <td>{room.building}</td>
          <td>{room.floor}</td>
        </tr>
      )
    )}
  </tbody>
</table>

{/* adding room code */}
{/* <h1>Add a Room</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newRoom.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Building:
          <input
            type="text"
            name="building"
            value={newRoom.building}
            onChange={handleChange}
          />
        </label>
        <label>
          Floor:
          <input
            type="number"
            name="floor"
            value={newRoom.floor}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Room</button>
      </form>
    
  ); */}
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