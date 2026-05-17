import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Resume: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'fr' | 'en' | 'ar';

  const resumeFiles = {
    fr: "/Manel_Saidane_Resume-FRN.pdf",
    en: "/Manel_Saidane_Resume_Ang.pdf",
    ar: "/Manel_Saidane_Resume_Ang.pdf",   // ← change si ton nom est différent
  };

  const currentFile = resumeFiles[currentLang] || resumeFiles.fr;

  const themeStyles = {
    background: darkMode
      ? 'linear-gradient(135deg, #0b1320, #1f2a44, #2c3a5a)'
      : 'linear-gradient(135deg, #f5f7fa, #c7b8a6)',
    textColor: darkMode ? '#f2efe8' : '#0b1320',
    accentColor: '#b46a55',
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
  

      {/* Main Content */}
      <main style={{ padding: '140px 20px 80px', maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.8em', color: themeStyles.accentColor, marginBottom: '20px' }}>
          {t("resume.title")}
        </h1>

        <p style={{ fontSize: '1.2em', marginBottom: '40px' }}>
          {t("resume.subtitle")}
        </p>

        <iframe
          src={currentFile}
          title="Resume"
          style={{
            width: '85%',
            height: '620px',
            border: 'none',
            borderRadius: '16px',
            boxShadow: themeStyles.cardShadow,
            marginBottom: '30px',
          }}
        />

        <a
          href={currentFile}
          download={currentFile.split('/').pop()}
          style={{
            display: 'inline-block',
            padding: '16px 40px',
            background: themeStyles.accentColor,
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '12px',
            textDecoration: 'none',
            boxShadow: '0 8px 25px rgba(180,106,85,0.35)',
          }}
        >
          ⬇ {t("resume.download")}
        </a>
      </main>

      {/* Footer */}
      <footer style={{ marginTop: '80px', padding: '30px', textAlign: 'center', background: darkMode ? 'rgba(0,0,0,0.8)' : '#f9f9f9' }}>
        <p>© {new Date().getFullYear()} Manel Saidane — All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Resume;