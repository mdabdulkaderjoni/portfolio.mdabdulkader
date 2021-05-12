import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import styles from './NavigationBar.module.css'
const NavigationBar = () => {
  return (

      <Navbar sticky="top" expand="true" className={styles.navBg}>
      <Navbar.Brand href="#home">
        <button className={styles.webBtn}>Web View</button>
      </Navbar.Brand >
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-center">
          <Nav.Link href="#home"><span className={styles.textAlign}>Home</span></Nav.Link>
          <Nav.Link href="#projects"><span className={styles.textAlign}>Projects</span></Nav.Link>
          <Nav.Link href="#skills"><span className={styles.textAlign}>Skills</span></Nav.Link>
          <Nav.Link href="#about"><span className={styles.textAlign}>About</span></Nav.Link>
          <Nav.Link href="#blogs"><span className={styles.textAlign}>Blogs</span></Nav.Link>
          <Nav.Link href="#contact"><span className={styles.textAlign}>Contact</span></Nav.Link>

        </Nav>

      </Navbar.Collapse>
    </Navbar>

  );
};

export default NavigationBar;