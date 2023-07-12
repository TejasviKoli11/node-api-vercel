<<<<<<< HEAD
import React, {  useEffect,useState } from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@fortawesome/fontawesome-free/css/all.css';
import styles from './dashboard.module.css';
import axios from 'axios';
import Link from 'next/link';

function MysideNav() {
  const [selectedPage, setSelectedPage] = useState('uservents');
  const [roomData, setRoomData] = useState([]);
  const handleSelect = (selected) => {
    setSelectedPage(selected);
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

  const renderPage = () => {
    switch (selectedPage) {
      case 'uservents':
        return <div  className={styles.body}>
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

          <div className={styles.homediv}> 
         
            
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
        </div>;
      case 'building':
        return <div className={styles.dashdiv}>Building Page</div>; // Replace with your actual component for Building Page
      case 'viewroom':
        return <div div className={styles.viewroom}>View Graph Page</div>; // Replace with your actual component for View Graph Page
      case 'viewgraph':
        return <div div className={styles.graphdiv}>View Graph Page</div>; // Replace with your actual component for View Graph Page
      case 'settings':
        return <div s>Settings Page</div>; // Replace with your actual component for Settings Page
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <SideNav onSelect={handleSelect} className={styles.sidebar}>
        <SideNav.Toggle className={styles.toggle} />
        <SideNav.Nav defaultSelected="home">
          
          <NavItem eventKey="uservents" className={styles.navItem}>
            <NavIcon>
              <i className="fas fa-home" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="building" className={styles.navItem}>
            <NavIcon>
              <i className="fas fa-building-shield" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>Building</NavText>
          </NavItem>         
           <NavItem eventKey="viewrooom" cclassName={styles.navItem}>
            <NavIcon>
              <i className="fas fa-house" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>View Room</NavText>
          </NavItem>
          <NavItem eventKey="viewgraph" className={styles.navItem}>
            <NavIcon>
              <i className="fas fa-line-chart" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>View Graph</NavText>
          </NavItem>
          <NavItem eventKey="settings" className={styles.navItem}>
            <NavIcon>
              <i className="fas fa-gear" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>Settings</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
      <div className={styles.content}>{renderPage()}</div>
    </div>
  );
}
=======
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

          <li><Link href="/addBuilding">Buildings</Link></li>
          <li><Link href="/uservents">Rooms</Link></li>
          <li><Link href="/uservents">Build Graph</Link></li>
          <li><Link href="/uservents">View Users</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/login">LogOut</Link></li>
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
>>>>>>> b62f3d74456cf8e17e1019c49c99c906e06baac5

<<<<<<< HEAD
};

export default DashboardPage;
=======

<<<<<<< HEAD
export default App;
=======



};





export default DashboardPage;
>>>>>>> b62f3d74456cf8e17e1019c49c99c906e06baac5
>>>>>>> cab2d32d2c12a1942d38c0b093bc27be8b3b5dd9
