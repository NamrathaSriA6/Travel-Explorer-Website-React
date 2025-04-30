import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  // Simple inline styles
  const styles = {
    container: {
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://wallpaperaccess.com/full/1431673.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '78vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    subtitle: {
      fontSize: '1.2rem',
      marginBottom: '40px',
      maxWidth: '600px',
    },
    button: {
      padding: '12px 30px',
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#2980b9',
    }
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Explore the World with Us</h1>
      <p style={styles.subtitle}>Discover amazing places at local prices</p>
      
      <button
        style={{
          ...styles.button,
          ...(isHovered && styles.buttonHover)
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate('/destinations')}
      >
        Browse Destinations
      </button>
    </div>
  );
};

export default Hero;