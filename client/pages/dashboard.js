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
        return <div>
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
          Home Page
            
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
        return <div>Building Page</div>; // Replace with your actual component for Building Page
      case 'viewgraph':
        return <div>View Graph Page</div>; // Replace with your actual component for View Graph Page
      case 'settings':
        return <div>Settings Page</div>; // Replace with your actual component for Settings Page
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
=======
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

>>>>>>> ed2b70cb54043d8b5c68b34b2c802534af076aec
    </div>

      </div>

      <div className={styles.dashboarditem2}>Dashboard Item 3</div>

      <div className={styles.dashboarditem3}>Dashboard Item 4</div>

      <div className={styles.dashboarditem4}>Dashboard Item 5</div>

    </div>

  );
<<<<<<< HEAD
}

function App() {
  return <MysideNav />;
}

export default App;
=======

};




export default DashboardPage;
>>>>>>> ed2b70cb54043d8b5c68b34b2c802534af076aec
