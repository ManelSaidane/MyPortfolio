import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaJava, FaPython, FaReact, FaRobot,
  FaLinkedin, FaGithub, FaEnvelope
} from 'react-icons/fa';
import { SiSpringboot, SiFlutter, SiJavascript } from 'react-icons/si';
import { IconType } from 'react-icons';


interface SkillItem {
  name: string;
  Icon: IconType;
  color: string;
}

interface SkillCategory {
  title: string;
  items: SkillItem[];
}

interface Certification {
  name: string;
  description: string;
  link: string;
}

const skills: SkillCategory[] = [
  {
    title: 'Frameworks',
    items: [
      { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
      { name: 'NestJS', Icon: FaRobot, color: '#E0234E' },
      { name: 'React', Icon: FaReact, color: '#61DAFB' },
      { name: 'Angular', Icon: FaReact, color: '#DD0031' },
      { name: 'Flutter', Icon: SiFlutter, color: '#02569B' },
      { name: 'React Native', Icon: FaReact, color: '#61DAFB' },
    ],
  },
  {
    title: 'Languages',
    items: [
      { name: 'Java', Icon: FaJava, color: '#f89820' },
      { name: 'Python', Icon: FaPython, color: '#3776AB' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', Icon: SiJavascript, color: '#3178C6' },
    ],
  },
  {
    title: 'DevOps & CI/CD',
    items: [
      { name: 'Docker', Icon: FaRobot, color: '#2496ED' },
      { name: 'GitHub Actions', Icon: FaGithub, color: '#fff' },
      { name: 'Jenkins', Icon: FaRobot, color: '#D33833' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MySQL', Icon: FaRobot, color: '#4479A1' },
      { name: 'PostgreSQL', Icon: FaRobot, color: '#336791' },
      { name: 'Firebase', Icon: FaRobot, color: '#FFCA28' },
      { name: 'MongoDB', Icon: FaRobot, color: '#47A248' },
    ],
  },
  {
    title: 'AI/ML',
    items: [
      { name: 'YOLOv8', Icon: FaRobot, color: '#EE4C2C' },
      { name: 'PaddleOCR', Icon: FaRobot, color: '#005BAC' },
      { name: 'Tesseract', Icon: FaRobot, color: '#000000' },
      { name: 'LayoutLMv3', Icon: FaRobot, color: '#8E44AD' },
    ],
  },
  {
    title: 'Tools & Digital Journey',
    items: [
      { name: 'Git', Icon: FaGithub, color: '#F05032' },
      { name: 'VS Code', Icon: FaRobot, color: '#007ACC' },
      { name: 'GitHub', Icon: FaGithub, color: '#fff' },
      { name: 'LinkedIn', Icon: FaLinkedin, color: '#0A66C2' },
    ],
  },
];

const certifications = [
  {
    key: 'aiPredictive',
    link: 'https://learn.nvidia.com/certificates?id=CUaeudhSR3ScKKg3aWE-XA',
  },
  {
    key: 'deepLearning',
    link: 'https://learn.nvidia.com/certificates?id=-YC3IGpBRKG4WnVoFNCAOA',
  },
];

interface AboutPageProps {
  darkMode: boolean;
}

const AboutPage: React.FC<AboutPageProps> = ({ darkMode }) => {

  const location = useLocation();
  const { t } = useTranslation();
  const [animatedText, setAnimatedText] = useState('');

  const introText = t('aboutPage.intro');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setAnimatedText(introText.slice(0, index + 1));
      index++;
      if (index === introText.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, [introText]);

  const themeStyles = {
    background: darkMode ? 'linear-gradient(135deg, #0b1320, #1f2a44, #2c3a5a)' : 'linear-gradient(135deg, #f5f7fa, #c7b8a6)',
    textColor: darkMode ? '#f2efe8' : '#0b1320',
    sectionBg: darkMode ? 'rgba(255,255,255,0.06)' : '#fff',
    cardShadow: darkMode ? '0 12px 30px rgba(0,0,0,0.65)' : '0 8px 25px rgba(0,0,0,0.12)',
    accentColor: '#b46a55',
  };

  return (
    <div style={{
      fontFamily: '"Roboto", sans-serif',
      background: themeStyles.background,
      color: themeStyles.textColor,
      minHeight: '100vh',
      transition: 'all 0.5s ease',
    }}>
  

      {/* Intro */}
      <section style={{ padding: '140px 20px 80px', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '2.8em',
          color: themeStyles.accentColor,
          fontFamily: '"Courier New", Courier, monospace',
          background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'fadeIn 2s ease',
        }}>
          {t('aboutPage.title')}
        </h1>
        <p style={{
          fontSize: '1.3em',
          maxWidth: '800px',
          margin: '25px auto',
          lineHeight: '1.8',
          fontStyle: 'italic',
          opacity: 0,
          animation: 'fadeInText 3s forwards',
          animationDelay: '0.5s',
        }}>
          {animatedText}
        </p>
      </section>

      {/* Skills */}
    {/* Skills */}
{skills.map((section, idx) => (
  <section
    key={idx}
    style={{
      padding: '60px 20px',
      maxWidth: '1000px',
      margin: '0 auto',
    }}
  >
    <h2
      style={{
        fontSize: '2.5em',
        color: themeStyles.accentColor,
        textAlign: 'center',
        marginBottom: '40px',
      }}
    >
      {section.title}
    </h2>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '25px',
      }}
    >
      {section.items.map((item, i) => {
        const Icon = item.Icon as React.ElementType;

        return (
          <div
            key={i}
            style={{
              background: themeStyles.sectionBg,
              padding: '25px',
              borderRadius: '15px',
              boxShadow: themeStyles.cardShadow,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform =
                'translateY(-5px) scale(1.05)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform =
                'translateY(0) scale(1)')
            }
          >
            <Icon color={item.color} size={40} />

            <span
              style={{
                marginTop: '12px',
                fontWeight: 600,
                fontSize: '1.1em',
              }}
            >
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  </section>
))}
      {/* Certifications */}
      <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5em', color: themeStyles.accentColor, textAlign: 'center', marginBottom: '40px' }}>
          {t('certifications.title')}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {certifications.map((cert, i) => (
            <a key={i} href={cert.link} target="_blank" rel="noopener noreferrer" style={{
              display: 'block',
              textDecoration: 'none',
              color: themeStyles.textColor,
              backgroundColor: themeStyles.sectionBg,
              padding: '20px',
              borderRadius: '15px',
              boxShadow: themeStyles.cardShadow,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px) scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
            >
            <h3
  style={{
    fontSize: '1.2em',
    fontWeight: 600,
    marginBottom: '10px',
  }}
>
  {t(`certifications.${cert.key}.name`)}
</h3>

<p
  style={{
    fontSize: '0.95em',
    lineHeight: '1.3em',
  }}
>
  {t(`certifications.${cert.key}.description`)}
</p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: '80px', padding: '30px', textAlign: 'center', background: darkMode ? 'rgba(0,0,0,0.8)' : '#f9f9f9' }}>
        <p>© {new Date().getFullYear()} Manel Saidane — All rights reserved.</p>
      </footer>

      <style>
        {`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fadeInText { from { opacity: 0; } to { opacity: 1; } }
        `}
      </style>
    </div>
  );
};

export default AboutPage;