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
<<<<<<< HEAD
                </Link>
                <Link href="/signup">
                <p className={styles.button}> Sign Up </p>
                </Link>
                <Link href="/contact">
                <p className={styles.button}> Conatct Us </p>
                </Link>
                <Link href="/about">
                <p className={styles.button}> About Us </p>
                </Link>
            </div>
          </nav>


          <div class="container">
          <img className={styles.photo} src='./familyPhoto.png' alt='family photo' stype="width:100%;"/>
          <div class="text">Make your life easy, with our Smart vent application</div>
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
=======
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
>>>>>>> dbf6a679163a43a0fd562c7e6ef6c04aeb3bf7fc
        </div>
      </nav>

<<<<<<< HEAD

          <div>
                <footer className={styles.footer}>
            <div className={styles.column}>
              
              <h3 id={styles.h3f}>About Us</h3>
              <p id={styles.pf}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat
                tellus eget sapien mollis, eu efficitur orci aliquet.
              </p>
            </div>
            <div className={styles.column}>
              <h3 id={styles.h3f}>Support</h3>
              <ul id={styles.ulf}>
                <li id={styles.lif}>How to Install</li>
                <li id={styles.lif}>FAQ</li>
                <li id={styles.lif}>Published Research</li>
              </ul>
            </div>
            <div className={styles.column}>

              <h3 id={styles.h3f}>Company</h3>  
              <ul id={styles.ulf}>  
                <li id={styles.lif}>  
                  <a href="/" id={styles.af}>Home</a> 
                </li> 
                <li id={styles.lif}>  
                  <a href="/about" id={styles.af}>About Us</a>  
                </li> 
                <li id={styles.lif}>  
                  <a href="/contact" id={styles.af}>Contact Us</a>  
                </li> 
                <li id={styles.lif}>
                  <a href="/services" id={styles.af}>Services</a>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <h3 id={styles.h3f}>Contact Us</h3>
              <ul id={styles.ulf}>
                <li id={styles.lif}>
                  <FaHome className={styles.icon} />
                  123 Main Street, City, Country
                </li>
                <li id={styles.lif}>
                  <FaPhone className={styles.icon} />
                  +123 456 7890
                </li>
                <li id={styles.lif}>
                  <FaEnvelope className={styles.icon} />
                  info@example.com
                </li>
                <li id={styles.lif}>
                  <FaFax className={styles.icon} />
                  +123 456 7891
                </li>
              </ul>
            </div>
          </footer>
=======
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
>>>>>>> dbf6a679163a43a0fd562c7e6ef6c04aeb3bf7fc
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

      <div>
        <footer className={styles.footer}>
          <div className={styles.column}>
            <h3 id={styles.h3f}>About Us</h3>
            <p id={styles.pf}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat tellus eget sapien mollis, eu efficitur orci aliquet.
            </p>
          </div>
          <div className={styles.column}>
            <h3 id={styles.h3f}>Support</h3>
            <ul id={styles.ulf}>
              <li id={styles.lif}>How to Install</li>
              <li id={styles.lif}>FAQ</li>
              <li id={styles.lif}>Published Research</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 id={styles.h3f}>Company</h3>
            <ul id={styles.ulf}>
              <li id={styles.lif}>
                <a href="/" id={styles.af}>Home</a>
              </li>
              <li id={styles.lif}>
                <a href="/about" id={styles.af}>About Us</a>
              </li>
              <li id={styles.lif}>
                <a href="/contact" id={styles.af}>Contact Us</a>
              </li>
              <li id={styles.lif}>
                <a href="/services" id={styles.af}>Services</a>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 id={styles.h3f}>Contact Us</h3>
            <ul id={styles.ulf}>
              <li id={styles.lif}>
                <FaHome className={styles.icon} />
                123 Main Street, City, Country
              </li>
              <li id={styles.lif}>
                <FaPhone className={styles.icon} />
                +123 456 7890
              </li>
              <li id={styles.lif}>
                <FaEnvelope className={styles.icon} />
                info@example.com
              </li>
              <li id={styles.lif}>
                <FaFax className={styles.icon} />
                +123 456 7891
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default IndexPage;
