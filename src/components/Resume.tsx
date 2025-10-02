// src/components/Resume.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Resume: React.FC = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);

  const themeStyles = {
    background: darkMode
      ? 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)'
      : 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
    textColor: darkMode ? '#e0e0e0' : '#121212',
  };

  return (
    <div
      style={{
        fontFamily: '"Roboto", sans-serif',
        minHeight: '100vh',
        background: themeStyles.background,
        color: themeStyles.textColor,
        transition: 'all 0.5s ease',
      }}
    >
      {/* Header */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          padding: '15px 30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: darkMode ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)',
          backdropFilter: 'blur(10px)',
          zIndex: 1000,
          boxSizing: 'border-box',
        }}
      >
        <div style={{ fontSize: '1.5em', fontWeight: 700, color: '#9f67e0' }}>
          Manel Saidane
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <nav style={{ display: 'flex', gap: '15px' }}>
            {['/', '/about', '/projects', '/resume', ''].map((path, i) => {
              const names = ['Home', 'About', 'Projects', 'Resume', ];
              return (
                <Link
                  key={i}
                  to={path}
                  style={{
                    color: location.pathname === path ? '#9f67e0' : themeStyles.textColor,
                    textDecoration: 'none',
                    fontWeight: 700,
                  }}
                >
                  {names[i]}
                </Link>
              );
            })}
          </nav>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
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
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '140px 20px 80px', textAlign: 'center' }}>
        <h1
          style={{
            fontSize: '2.8em',
            color: '#9f67e0',
            marginBottom: '20px',
          }}
        >
          My Resume
        </h1>

        <p style={{ fontSize: '1.2em', marginBottom: '40px' }}>
          Here you can view or download my latest resume.
        </p>

        {/* Resume Preview */}
        <iframe
          src="/Manel_Saidane_Resume.pdf"
          title="Resume"
          style={{
            width: '80%',
            height: '600px',
            border: 'none',
            borderRadius: '12px',
            boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
            marginBottom: '30px',
          }}
        ></iframe>

        {/* Download Button */}
        <div>
          <a
            href="/Manel_Saidane_Resume.pdf"
            download="Manel_Saidane_Resume.pdf"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: '#9f67e0',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLAnchorElement).style.background = '#7d4bc0')
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLAnchorElement).style.background = '#9f67e0')
            }
          >
            ⬇ Download Resume
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          marginTop: '80px',
          padding: '20px',
          textAlign: 'center',
          background: darkMode ? 'rgba(0,0,0,0.7)' : '#f9f9f9',
        }}
      >
        <p>© {new Date().getFullYear()} Manel Saidane — All rights reserved.</p>
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a href="mailto:mnlnsdn3@gmail.com" aria-label="Email">
            {React.createElement(FaEnvelope as React.ElementType, { size: 22, color: '#9f67e0' })}
          </a>
          <a href="https://linkedin.com/in/manelsaidane" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            {React.createElement(FaLinkedin as React.ElementType, { size: 22, color: '#0A66C2' })}
          </a>
          <a href="https://github.com/ManelSaidane" target="_blank" rel="noreferrer" aria-label="GitHub">
            {React.createElement(FaGithub as React.ElementType, { size: 22, color: darkMode ? '#fff' : '#333' })}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
