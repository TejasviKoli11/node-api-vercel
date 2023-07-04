import Link from 'next/link';

import styles from './index.module.css';

import { FaHome, FaPhone, FaEnvelope, FaFax } from 'react-icons/fa';

function IndexPage() {
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
          <Link href="/contact">
            <p className={styles.button}> Contact Us </p>
          </Link>
          <Link href="/about">
            <p className={styles.button}> About Us </p>
          </Link>
        </div>
      </nav>

      <div className="container">
        <img className={styles.photo} src='./familyPhoto.png' alt='family photo' style={{ width: "100%" }} />
        <div className="text">Make your life easy, with our Smart vent application</div>
      </div>

      <div className="dashboard">
        <div className="building">
          <h2>Building Name</h2>
          <img src="building_image.jpg" alt="Building" />
        </div>
        <div className="room">
          <h3>Room Name</h3>
          <img src="room_image.jpg" alt="Room" />
        </div>
        <div className="vent">
          <h4>Vent Status</h4>
          <div className="vent-icon">
            <img src="vent_icon.jpg" alt="Vent" />
          </div>
        </div>
      </div>

      <div className={styles.menu}>
        <Link href="./server/routes/api/BuildingRouting.js">
          <p className={styles.button}> Building Routing </p>
        </Link>
        <Link href="/RoomRoserver/routes/api/RoomRouting.js">
          <p className={styles.button}> Room Routing </p>
        </Link>
        <Link href="/server/routes/api/RoomRouting.js">
          <p className={styles.button}> Vent Data </p>
        </Link>
      </div>

      <div className="container">
        <img className={styles.photo} src='./familyPhoto.png' alt='family photo' style={{ width: "100%" }} />
        <div className="text">Make your life easy, with our Smart vent application</div>
      </div>

      <div className="dashboard">
        <div className="building">
          <h2>Building Name</h2>
          <img src="building_image.jpg" alt="Building" />
        </div>
        <div className="room">
          <h3>Room Name</h3>
          <img src="room_image.jpg" alt="Room" />
        </div>
        <div className="vent">
          <h4>Vent Status</h4>
          <div className="vent-icon">
            <img src="vent_icon.jpg" alt="Vent" />
          </div>
</div>


</div>

        </div>







      );

    }

 

export default IndexPage;