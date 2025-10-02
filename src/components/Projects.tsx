import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Projects: React.FC = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);

  const themeStyles = {
    background: darkMode
      ? 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)'
      : 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
    textColor: darkMode ? '#e0e0e0' : '#121212',
    cardBg: darkMode ? 'rgba(255,255,255,0.05)' : '#fff',
    cardShadow: darkMode ? '0 8px 24px rgba(0,0,0,0.4)' : '0 8px 24px rgba(0,0,0,0.1)',
  };

  const projects = [
    {
      title: 'Fullstack Developer, Freelance',
      date: '07/2025 – 09/2025',
      app: 'CraftHub — E-commerce Platform for Artisanal Products & Workshops',
      details: [
        'Built a marketplace + workshop reservation system (online & in-person).',
        'Subscription model for artisans to list products and host workshops.',
        'Integrated AI features for recommendations, content moderation and pricing optimization.',
        'Features: category/region/style navigation, wishlist, secure payments, account management.',
      ],
      tech: ['React', 'Spring Boot', 'Flutter', 'AI'],
    },
    {
      title: 'Fullstack Developer, GTI',
      date: '02/2025 – 06/2025',
      app: 'DocuSmart — Intelligent Document Automation',
      details: [
        'Microservices platform for banking document automation (Spring Boot + Angular).',
        'AI: YOLOv8, PaddleOCR, LayoutLMv3 for invoice extraction & contract verification.',
        'Implemented notifications, user dashboards and monitoring tools.',
      ],
      tech: ['Spring Boot', 'Angular', 'MongoDB', 'YOLOv8'],
    },
    {
      title: 'Fullstack Developer, Proxym',
      date: '06/2024 – 07/2024',
      app: 'Reservation Site',
      details: [
        'Full-stack booking/reservation system (NestJS, React, React Native).',
        'Real-time availability, billing integrations and automated email notifications.',
      ],
      tech: ['NestJS', 'React', 'React Native'],
    },
    {
      title: 'Fullstack Developer, Terraform Tunisia',
      date: '02/2024 – 05/2024',
      app: 'Daycare Management Platform',
      details: [
        'Optimized web & mobile app (React + Flutter) for daycare planning and communication.',
        'Integrated Spring Boot backend for real-time updates, scheduling and reports.',
      ],
      tech: ['React', 'Flutter', 'Spring Boot'],
    },
    {
      title: 'Fullstack Developer, Inside Digital Services',
      date: '06/2023 – 07/2024',
      app: 'Order Management Module (Odoo)',
      details: [
        'Developed an Odoo module to automate purchase orders using Python & XML.',
        'Streamlined ERP workflows and reduced manual processing time.',
      ],
      tech: ['Python', 'Odoo', 'ERP'],
    },
  ];

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
            {['/', '/about', '/projects', '/resume'].map((path, i) => {
              const names = ['Home', 'About', 'Projects', 'Resume'];
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
      <main style={{ padding: '140px 20px 80px', maxWidth: '1100px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.8em', color: '#9f67e0', marginBottom: '40px', textAlign: 'center' }}>
          Professional Projects
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '22px',
          }}
        >
          {projects.map((p, idx) => (
            <div
              key={p.title + idx}
              style={{
                background: themeStyles.cardBg,
                padding: '22px',
                borderRadius: '14px',
                boxShadow: themeStyles.cardShadow,
              }}
            >
              <h3 style={{ margin: 0, marginBottom: '6px', color: '#9f67e0' }}>{p.title}</h3>
              <div style={{ color: '#8b98a6', fontStyle: 'italic', marginBottom: '12px', fontSize: '0.95rem' }}>
                {p.date}
              </div>
              <div style={{ marginBottom: '10px', fontWeight: 600 }}>
                <strong>Application:</strong> {p.app}
              </div>
              <ul style={{ paddingLeft: '18px', margin: '10px 0', lineHeight: 1.6 }}>
                {p.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'rgba(159,103,224,0.12)',
                      padding: '6px 10px',
                      borderRadius: '999px',
                      fontWeight: 700,
                      fontSize: '0.86rem',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
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

export default Projects;
