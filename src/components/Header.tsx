import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const linkStyle = { margin: '0 15px', textDecoration: 'none', color: darkMode ? '#e0e0e0' : '#121212', fontWeight: 500 };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '15px 50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: darkMode ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
      }}
    >
      <div style={{ fontWeight: 700, fontSize: '1.5em', color: '#9f67e0' }}>Manel Saidane</div>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/projects" style={linkStyle}>Projects</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </nav>
      <button
        onClick={toggleDarkMode}
        style={{
          marginLeft: '20px',
          padding: '6px 12px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: darkMode ? '#9f67e0' : '#333',
          color: '#fff',
          fontWeight: 600,
        }}
      >
        {darkMode ? '☀ Light' : '🌙 Dark'}
      </button>
    </header>
  );
};

export default Header;
