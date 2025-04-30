import React from 'react';

const Contact = () => {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: "'Arial', sans-serif",
    },
    header: {
      textAlign: 'center',
      color: '#2c3e50',
      marginBottom: '40px',
      fontSize: '2.5rem',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      backgroundColor: '#f9f9f9',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    label: {
      fontSize: '1.1rem',
      color: '#34495e',
      marginBottom: '5px',
    },
    input: {
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '1rem',
    },
    button: {
      backgroundColor: '#3498db',
      color: 'white',
      padding: '12px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.3s',
      marginTop: '10px',
    },
    buttonHover: {
      backgroundColor: '#2980b9',
    }
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Contact Us</h2>
      <form style={styles.form}>
        <div>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            style={styles.input}
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            style={styles.input}
            placeholder="Your email"
          />
        </div>
        
        <div>
          <label htmlFor="message" style={styles.label}>Message:</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            style={{...styles.input, minHeight: '100px'}}
            placeholder="Your message"
          />
        </div>
        
        <button 
          type="submit" 
          style={{
            ...styles.button,
            ...(isHovered && styles.buttonHover)
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;