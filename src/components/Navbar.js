import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.link}>About Us</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/dashboard" style={styles.link}> COVID-Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    background: "green",
    padding: "15px",
    display: "flex",
    justifyContent: "center",  
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginRight: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "20px",
  },
};

export default Navbar; 
