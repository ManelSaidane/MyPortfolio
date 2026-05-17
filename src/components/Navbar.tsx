import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992); // 992px pour tablette aussi

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/projects", label: t("nav.projects") },
    { path: "/resume", label: t("nav.resume") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const accentColor = "#9f67e0";

  // Styles principaux
  const navStyle: React.CSSProperties = {
    position: "fixed", // fixed au lieu de sticky pour un meilleur contrôle
    top: 0,
    left: 0,
    right: 0,
    height: "80px",
    background: darkMode
      ? "rgba(15, 23, 42, 0.75)"   // slate-900 plus sombre
      : "rgba(255, 255, 255, 0.80)",
    backdropFilter: "blur(12px)",    // glassmorphism moderne
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: `1px solid ${darkMode ? "rgba(99, 102, 241, 0.15)" : "rgba(159, 103, 224, 0.12)"}`,
    zIndex: 1000,
    transition: "background 0.4s ease, border-color 0.4s ease",
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "1400px",
    margin: "0 auto",
    height: "100%",
    padding: "0 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const logoStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: 800,
    color: accentColor,
    letterSpacing: "-0.5px",
  };

  const linkBaseStyle: React.CSSProperties = {
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "1.05rem",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    transition: "all 0.25s ease",
  };

  const getLinkStyle = (path: string): React.CSSProperties => ({
    ...linkBaseStyle,
    color: location.pathname === path ? accentColor : darkMode ? "#e2e8f0" : "#1e293b",
    background: location.pathname === path ? `${accentColor}15` : "transparent", // léger fond sur active
  });

  const iconButtonStyle: React.CSSProperties = {
    background: "none",
    border: "none",
    color: darkMode ? "#cbd5e1" : "#475569",
    fontSize: "1.1rem",
    cursor: "pointer",
    padding: "0.6rem",
    borderRadius: "8px",
    transition: "all 0.25s ease",
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <Link to="/" style={logoStyle}>
          Manel Saidane
        </Link>

        {/* Desktop Menu */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* Liens */}
            {links.map((link) => (
              <Link key={link.path} to={link.path} style={getLinkStyle(link.path)}>
                {link.label}
              </Link>
            ))}

            {/* Séparateur fin */}
            <div style={{ width: "1px", height: "24px", background: darkMode ? "#334155" : "#e2e8f0", margin: "0 1rem" }} />

            {/* Langues */}
            <button
              onClick={() => i18n.changeLanguage("en")}
              style={{
                ...iconButtonStyle,
                color: i18n.language === "en" ? accentColor : undefined,
                fontWeight: i18n.language === "en" ? 700 : 400,
              }}
            >
              EN
            </button>
            <button
              onClick={() => i18n.changeLanguage("fr")}
              style={{
                ...iconButtonStyle,
                color: i18n.language === "fr" ? accentColor : undefined,
                fontWeight: i18n.language === "fr" ? 700 : 400,
              }}
            >
              FR
            </button>
            <button
              onClick={() => i18n.changeLanguage("ar")}
              style={{
                ...iconButtonStyle,
                color: i18n.language === "ar" ? accentColor : undefined,
                fontWeight: i18n.language === "ar" ? 700 : 400,
              }}
            >
              AR
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              style={{
                ...iconButtonStyle,
                fontSize: "1.3rem",
              }}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.8rem",
              color: darkMode ? "#e2e8f0" : "#1e293b",
              cursor: "pointer",
              padding: "0.5rem",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: 0,
            right: 0,
            background: darkMode ? "rgba(15, 23, 42, 0.95)" : "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(10px)",
            padding: "1.5rem 2rem",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  ...linkBaseStyle,
                  fontSize: "1.15rem",
                  padding: "0.8rem 1rem",
                  color: location.pathname === link.path ? accentColor : undefined,
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div style={{ height: "1px", background: darkMode ? "#334155" : "#e2e8f0", margin: "0.8rem 0" }} />

            <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
              <button onClick={() => { i18n.changeLanguage("en"); setMenuOpen(false); }} style={{ fontWeight: i18n.language === "en" ? 700 : 500 }}>
                EN
              </button>
              <button onClick={() => { i18n.changeLanguage("fr"); setMenuOpen(false); }} style={{ fontWeight: i18n.language === "fr" ? 700 : 500 }}>
                FR
              </button>
              <button onClick={() => { i18n.changeLanguage("ar"); setMenuOpen(false); }} style={{ fontWeight: i18n.language === "ar" ? 700 : 500 }}>
                AR
              </button>
            </div>

            <button
              onClick={() => { toggleDarkMode(); setMenuOpen(false); }}
              style={{ marginTop: "1rem", fontSize: "1.1rem" }}
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;