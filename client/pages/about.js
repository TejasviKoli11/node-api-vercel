import Link from 'next/link';
import styles from './about.module.css';
import { FaHome, FaPhone, FaEnvelope, FaFax } from 'react-icons/fa';


function AboutUs() {
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
            <p className={styles.button}> Conatct Us </p>
            </Link>
            <Link href="/about">
            <p className={styles.button}> About Us </p>
            </Link>
        </div>
      </nav>

      <p>em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

        Where can I get some?
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
      </p>




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
              <a href="/index" id={styles.af}>Home</a>
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
  
  export default AboutUs;