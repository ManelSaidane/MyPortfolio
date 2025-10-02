import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import myphoto from './496befed-b639-4b45-acf0-77749b58b2a8.jpg';

const Contact: React.FC = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);

  const themeStyles = {
    background: darkMode ? '#121212' : '#f5f5f5',
    text: darkMode ? '#e0e0e0' : '#121212',
    sectionBg: darkMode ? '#1e1e1e' : '#ffffff',
    cardShadow: darkMode
      ? '0 10px 20px rgba(0,0,0,0.5)'
      : '0 6px 12px rgba(0,0,0,0.15)',
  };

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLAnchorElement>,
    color: string
  ) => {
    e.currentTarget.style.color = color;
  };
  const handleMouseLeave = (
    e: React.MouseEvent<HTMLAnchorElement>,
    color: string
  ) => {
    e.currentTarget.style.color = color;
  };

  return (
    <div
      style={{
        background: themeStyles.background,
        color: themeStyles.text,
        minHeight: '100vh',
        transition: 'all 0.3s ease',
        fontFamily: '"Roboto", sans-serif',
      }}
    >
      {/* Header */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 40px',
          background: themeStyles.sectionBg,
          boxShadow: themeStyles.cardShadow,
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={myphoto}
            alt="Logo"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              marginRight: '15px',
              border: '3px solid #bb86fc',
              objectFit: 'cover',
            }}
          />
          <h1 style={{ fontSize: '1.8em', fontWeight: 700 }}>
            <Link
              to="/"
              style={{ color: themeStyles.text, textDecoration: 'none' }}
            >
              Manel Saidane
            </Link>
          </h1>
        </div>
        <nav style={{ display: 'flex', gap: '20px' }}>
          {['/', '/projects', '/about', '/contact'].map((path, i) => {
            const names = ['Home', 'Projects', 'About', 'Contact'];
            return (
              <Link
                key={i}
                to={path}
                className={location.pathname === path ? 'active' : ''}
                style={{
                  color:
                    location.pathname === path ? '#03dac6' : '#bb86fc',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => handleMouseEnter(e, '#9f67e0')}
                onMouseLeave={(e) =>
                  handleMouseLeave(
                    e,
                    location.pathname === path ? '#03dac6' : '#bb86fc'
                  )
                }
              >
                {names[i]}
              </Link>
            );
          })}
        </nav>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: '8px 15px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#bb86fc',
            color: '#fff',
            fontWeight: 600,
          }}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      {/* Contact Section */}
      <section
        style={{
          padding: '60px 20px',
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontSize: '3em',
            color: '#bb86fc',
            marginBottom: '40px',
          }}
        >
          Contact
        </h2>

        <div
          style={{
            background: themeStyles.sectionBg,
            padding: '40px',
            borderRadius: '15px',
            boxShadow: themeStyles.cardShadow,
            textAlign: 'left',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          <p
            style={{
              fontSize: '1.2em',
              marginBottom: '30px',
              textAlign: 'center',
            }}
          >
            Interested in collaborating on a project or just want to
            connect? Let’s get in touch!
          </p>

          <div style={{ display: 'grid', gap: '20px' }}>
            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Mail color="#bb86fc" size={24} />
              <a
                href="mailto:saidaneemanel@gmail.com"
                style={{
                  fontSize: '1.1em',
                  textDecoration: 'none',
                  color: themeStyles.text,
                }}
                onMouseEnter={(e) => handleMouseEnter(e, '#9f67e0')}
                onMouseLeave={(e) =>
                  handleMouseLeave(e, themeStyles.text)
                }
              >
                saidaneemanel@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Phone color="#bb86fc" size={24} />
              <span style={{ fontSize: '1.1em' }}>+216 99043314</span>
            </div>

            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <MapPin color="#bb86fc" size={24} />
              <span style={{ fontSize: '1.1em' }}>Sousse, Tunisia</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
