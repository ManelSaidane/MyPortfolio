import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ProjectsPage: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const themeStyles = {
    background: darkMode
      ? 'linear-gradient(135deg, #0b1320, #1f2a44, #2c3a5a)'
      : 'linear-gradient(135deg, #f5f7fa, #c7b8a6)',
    textColor: darkMode ? '#f2efe8' : '#0b1320',
    cardBg: darkMode ? 'rgba(255,255,255,0.06)' : '#fff',
    cardShadow: darkMode ? '0 12px 30px rgba(0,0,0,0.65)' : '0 8px 25px rgba(0,0,0,0.12)',
    accentColor: '#b46a55',
  };

  const projects = [
    {
      title: t('projectsPage.imset.title'),
      date: '04/2026 – Present',
      institution: t('projectsPage.imset.institution'),
      details: [
        t('projectsPage.imset.detail1'),
        t('projectsPage.imset.detail2'),
        t('projectsPage.imset.detail3'),
        t('projectsPage.imset.detail4'),
      ],
      tech: ['Microsoft Office', 'Algorithmique', 'Pédagogie'],
    },
    {
      title: t('projectsPage.mtouch.title'),
      date: '01/2026 – Present',
      app: t('projectsPage.mtouch.app'),
      details: [
        t('projectsPage.mtouch.detail1'),
        t('projectsPage.mtouch.detail2'),
        t('projectsPage.mtouch.detail3'),
        t('projectsPage.mtouch.detail4'),
        t('projectsPage.mtouch.detail5'),
      ],
      tech: ['Next.js', 'Spring Boot', 'MySQL'],
    },
    {
      title: t('projectsPage.doctrina.title'),
      date: '12/2025 – 01/2026',
      app: t('projectsPage.doctrina.app'),
      details: [
        t('projectsPage.doctrina.detail1'),
        t('projectsPage.doctrina.detail2'),
        t('projectsPage.doctrina.detail3'),
        t('projectsPage.doctrina.detail4'),
      ],
      tech: ['Next.js', 'Node.js', 'MySQL'],
    },
    {
      title: t('projectsPage.weefarm.title'),
      date: '11/2025 – Present',
      app: t('projectsPage.weefarm.app'),
      details: [
        t('projectsPage.weefarm.detail1'),
        t('projectsPage.weefarm.detail2'),
        t('projectsPage.weefarm.detail3'),
        t('projectsPage.weefarm.detail4'),
      ],
      tech: ['Flutter', 'Firebase', 'REST API'],
    },
    {
      title: t('projectsPage.crafthub.title'),
      date: '07/2025 – 09/2025',
      app: t('projectsPage.crafthub.app'),
      details: [
        t('projectsPage.crafthub.detail1'),
        t('projectsPage.crafthub.detail2'),
        t('projectsPage.crafthub.detail3'),
        t('projectsPage.crafthub.detail4'),
      ],
      tech: ['React', 'Spring Boot', 'AI'],
    },
    {
      title: t('projectsPage.docusmart.title'),
      date: '02/2025 – 06/2025',
      app: t('projectsPage.docusmart.app'),
      details: [
        t('projectsPage.docusmart.detail1'),
        t('projectsPage.docusmart.detail2'),
        t('projectsPage.docusmart.detail3'),
      ],
      tech: ['Spring Boot', 'Angular', 'YOLOv8'],
    },
    {
      title: t('projectsPage.reservation.title'),
      date: '06/2024 – 07/2024',
      app: t('projectsPage.reservation.app'),
      details: [
        t('projectsPage.reservation.detail1'),
        t('projectsPage.reservation.detail2'),
      ],
      tech: ['NestJS', 'React', 'React Native'],
    },
    {
      title: t('projectsPage.daycare.title'),
      date: '02/2024 – 05/2024',
      app: t('projectsPage.daycare.app'),
      details: [
        t('projectsPage.daycare.detail1'),
        t('projectsPage.daycare.detail2'),
      ],
      tech: ['React', 'Flutter', 'Spring Boot'],
    },
    {
      title: t('projectsPage.odoo.title'),
      date: '06/2023 – 07/2024',
      app: t('projectsPage.odoo.app'),
      details: [
        t('projectsPage.odoo.detail1'),
        t('projectsPage.odoo.detail2'),
      ],
      tech: ['Python', 'Odoo', 'ERP'],
    },
  ];

  return (
    <div style={{
      fontFamily: '"Roboto", sans-serif',
      background: themeStyles.background,
      color: themeStyles.textColor,
      minHeight: '100vh',
      transition: 'all 0.5s ease',
    }}>
      <main style={{ padding: '140px 20px 80px', maxWidth: '1100px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.8em', color: themeStyles.accentColor, marginBottom: '40px', textAlign: 'center' }}>
          {t('projectsPage.title')}
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '22px' }}>
          {projects.map((p, idx) => (
            <div key={idx} style={{
              background: themeStyles.cardBg,
              padding: '22px',
              borderRadius: '14px',
              boxShadow: themeStyles.cardShadow,
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <h3 style={{ margin: 0, marginBottom: '6px', color: themeStyles.accentColor }}>{p.title}</h3>
              <div style={{ color: '#8b98a6', fontStyle: 'italic', marginBottom: '12px', fontSize: '0.95rem' }}>
                {p.date}
              </div>
              <div style={{ marginBottom: '10px', fontWeight: 600 }}>
                <strong>{p.institution ? 'Institution:' : 'Application:'}</strong> {p.institution || p.app}
              </div>
              <ul style={{ paddingLeft: '18px', margin: '10px 0', lineHeight: 1.6 }}>
                {p.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                {p.tech.map((t, i) => (
                  <span key={i} style={{
                    background: 'rgba(180,106,85,0.12)',
                    padding: '6px 10px',
                    borderRadius: '999px',
                    fontWeight: 700,
                    fontSize: '0.86rem',
                    color: themeStyles.accentColor,
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer style={{ marginTop: '80px', padding: '20px', textAlign: 'center', background: darkMode ? 'rgba(0,0,0,0.7)' : '#f9f9f9' }}>
        <p>© {new Date().getFullYear()} Manel Saidane — All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProjectsPage;