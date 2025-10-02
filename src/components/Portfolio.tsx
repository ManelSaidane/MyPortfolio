import React, { useState, useEffect } from 'react';
import myPhoto from './sansback.png';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

// Type assertion for React Icons
const LinkedInIcon = FaLinkedin as React.ComponentType<any>;
const GitHubIcon = FaGithub as React.ComponentType<any>;
const EmailIcon = FaEnvelope as React.ComponentType<any>;

const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [typedText, setTypedText] = useState('');
  const location = useLocation();

  const roles = ['Software Engineer', 'Full-Stack Developer', 'AI Enthusiast'];
  const typingSpeed = 120;

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let typingTimeout: NodeJS.Timeout;

    const type = () => {
      setTypedText(() => roles[roleIndex].slice(0, charIndex + 1));

      if (charIndex < roles[roleIndex].length - 1) {
        charIndex++;
        typingTimeout = setTimeout(type, typingSpeed);
      } else {
        typingTimeout = setTimeout(() => {
          charIndex = 0;
          roleIndex = (roleIndex + 1) % roles.length;
          setTypedText('');
          typingTimeout = setTimeout(type, typingSpeed);
        }, 2000);
      }
    };

    type();
    return () => clearTimeout(typingTimeout);
  }, []);

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
        background: themeStyles.background,
        color: themeStyles.textColor,
        transition: 'all 0.5s ease',
        minHeight: '100vh',
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
              const names = ['Home', 'About', 'Projects', 'Resume', ''];
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

      {/* Hero */}
      <section
        id="home"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '140px 50px 80px 50px',
          minHeight: '90vh',
          gap: '50px',
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: '300px',
            maxWidth: '550px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '3em',
              marginBottom: '20px',
              fontWeight: 800,
              color: '#9f67e0',
            }}
          >
            Hello, I'm Manel!
          </h1>
          <h2
            style={{
              fontSize: '1.8em',
              color: darkMode ? '#b0b0b0' : '#444',
              minHeight: '40px',
            }}
          >
            <span
              style={{
                borderRight: '2px solid #9f67e0',
                paddingRight: '5px',
                animation: 'blink 0.8s infinite',
              }}
            >
              {typedText}
            </span>
          </h2>
          <a
            href="#contact"
            style={{
              marginTop: '30px',
              display: 'inline-block',
              padding: '14px 28px',
              borderRadius: '12px',
              backgroundColor: '#9f67e0',
              color: '#fff',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Contact Me
          </a>
        </div>
        <div
          style={{
            flex: 1,
            minWidth: '350px',
            maxWidth: '450px',
            textAlign: 'center',
          }}
        >
          <img
            src={myPhoto}
            alt="Manel"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '50%',
              border: '3px solid #9f67e0',
            }}
          />
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        style={{
          maxWidth: '900px',
          margin: '100px auto 80px',
          padding: '0 20px',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <h2
          style={{
            fontSize: '2.6em',
            marginBottom: '40px',
            color: '#9f67e0',
            fontWeight: '700',
            textAlign: 'center',
          }}
        >
          Welcome to My Digital Journey ✨
        </h2>
        <p
          style={{
            fontSize: '1.2em',
            lineHeight: '2',
            textAlign: 'center',
            color: themeStyles.textColor,
            maxWidth: '750px',
            margin: '0 auto',
          }}
        >
          🌍 I create experiences where technology meets creativity. Every project
          I take on is a chance to combine clean design, seamless functionality, and
          innovative ideas.
          <br />
          <br />
          🚀 From web platforms to mobile applications, I focus on building tools
          that inspire and empower.
          <br />
          <br />
          💡 For me, code is not just logic—it’s a way of telling stories through
          design, performance, and imagination.
        </p>
      </section>

      {/* Hero Center */}
      <section
        id="hero-center"
        style={{
          textAlign: 'center',
          padding: '120px 20px 80px',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontSize: '2em',
            marginBottom: '25px',
            color: '#9f67e0',
          }}
        >
          💡 Crafting Tomorrow’s Digital Solutions
        </h2>
        <p style={{ fontSize: '1.2em', lineHeight: '1.9' }}>
          ✨ I transform ideas into powerful applications that inspire and connect.
          <br />
          🌟 From sleek designs to scalable systems, every project is built with
          passion and precision.
          <br />
          🚀 Let’s create something meaningful together.
        </p>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          maxWidth: '900px',
          margin: '100px auto 60px',
          padding: '50px 20px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '2em',
            marginBottom: '30px',
            color: '#9f67e0',
          }}
        >
          Contact
        </h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <a href="mailto:mnlnsdn3@gmail.com" style={{ fontSize: '2em', color: '#9f67e0' }}>
            <EmailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/manel-saidane-07897b25b"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0e76a8', fontSize: '2em' }}
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/ManelSaidane"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: themeStyles.textColor, fontSize: '2em' }}
          >
            <GitHubIcon />
          </a>
        </div>
      </section>

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
        <div
          style={{
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <a href="mailto:mnlnsdn3@gmail.com" aria-label="Email">
            <EmailIcon size={22} color="#9f67e0" />
          </a>
          <a
            href="https://linkedin.com/in/manelsaidane"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={22} color="#0A66C2" />
          </a>
          <a
            href="https://github.com/ManelSaidane"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon size={22} color={darkMode ? '#fff' : '#333'} />
          </a>
        </div>
      </footer>

      <style>{`
        @keyframes blink {
          0%,50%,100% { border-color:#9f67e0; }
          25%,75% { border-color:transparent; }
        }
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
