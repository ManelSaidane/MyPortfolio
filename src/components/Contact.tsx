import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapPin } from 'react-icons/fa';
import myphoto from './496befed-b639-4b45-acf0-77749b58b2a8.jpg';

const Contact: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language as 'fr' | 'en' | 'ar';

  const themeStyles = {
    background: darkMode
      ? 'linear-gradient(135deg, #0b1320, #1f2a44, #2c3a5a)'
      : 'linear-gradient(135deg, #f5f7fa, #c7b8a6)',
    textColor: darkMode ? '#f2efe8' : '#0b1320',
    accentColor: '#b46a55',
    cardBg: darkMode ? 'rgba(255,255,255,0.06)' : '#fff',
    cardShadow: darkMode ? '0 12px 30px rgba(0,0,0,0.65)' : '0 8px 25px rgba(0,0,0,0.12)',
  };

  return (
    <div style={{
      fontFamily: '"Roboto", sans-serif',
      background: themeStyles.background,
      color: themeStyles.textColor,
      minHeight: '100vh',
      transition: 'all 0.5s ease',
    }}>
 

      {/* Contact Section */}
      <main style={{ padding: '140px 20px 80px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.8em', color: themeStyles.accentColor, marginBottom: '20px' }}>
          {t("contactPage.title")}
        </h1>

        <p style={{ fontSize: '1.2em', marginBottom: '50px' }}>
          {t("contactPage.subtitle")}
        </p>

        <div style={{
          background: themeStyles.cardBg,
          padding: '40px',
          borderRadius: '16px',
          boxShadow: themeStyles.cardShadow,
          maxWidth: '700px',
          margin: '0 auto',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <a href="mailto:saidaneemanel@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none', color: themeStyles.textColor }}>
              {React.createElement(FaEnvelope as React.ElementType, { size: 28, color: themeStyles.accentColor })}
              <span style={{ fontSize: '1.1em' }}>saidaneemanel@gmail.com</span>
            </a>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              {React.createElement(FaPhone as React.ElementType, { size: 28, color: themeStyles.accentColor })}
              <span style={{ fontSize: '1.1em' }}>+216 99 043 314</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              {React.createElement(FaMapPin as React.ElementType, { size: 28, color: themeStyles.accentColor })}
              <span style={{ fontSize: '1.1em' }}>Sousse, Tunisia</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ marginTop: '80px', padding: '30px', textAlign: 'center', background: darkMode ? 'rgba(0,0,0,0.8)' : '#f9f9f9' }}>
        <p>© {new Date().getFullYear()} Manel Saidane — All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;