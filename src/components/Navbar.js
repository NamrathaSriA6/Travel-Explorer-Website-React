import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Styles object
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#2c3e50',
      color: 'white',
    },
    navbarBrand: {
      color: 'white',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
      gap: '2rem',
      margin: 0,
      padding: 0,
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'color 0.3s ease',
    },
    linkHover: {
      color: '#f39c12',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div className="navbar-brand">
        <Link to="/" style={styles.navbarBrand}>Travel Explorer 🌍</Link>
      </div>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/destinations" style={styles.link}>Destinations</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;