import React, { useState, useEffect } from "react";
import myPhoto from "./sansback.png";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
interface PortfolioProps {
  darkMode: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ darkMode }) => {
  const { t } = useTranslation();
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

const roles = useMemo(() => [
  t("roles.softwareEngineer"),
  t("roles.fullStackDeveloper"),
  t("roles.aiEnthusiast"),
], [t]);
useEffect(() => {
  let timer: NodeJS.Timeout;

  const tick = () => {
    const current = roles[roleIndex];

    if (!isDeleting && typedText.length < current.length) {
      setTypedText(current.slice(0, typedText.length + 1));
      timer = setTimeout(tick, 90);
    } else if (isDeleting && typedText.length > 0) {
      setTypedText(current.slice(0, typedText.length - 1));
      timer = setTimeout(tick, 50);
    } else if (!isDeleting && typedText.length === current.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
        tick();
      }, 2400);
    } else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      timer = setTimeout(tick, 500);
    }
  };

  tick();
  return () => clearTimeout(timer);
}, [typedText, isDeleting, roleIndex, roles, t]);

  const theme = {
    background: darkMode ? "#0b1320" : "#f2efe8",
    sectionBg: darkMode ? "#1f2a44" : "#c7b8a6",
    textColor: darkMode ? "#f2efe8" : "#0b1320",
    accent: "#b46a55",
    muted: darkMode ? "#c7b8a6" : "#444",
    cardShadow: darkMode ? "0 8px 32px rgba(0,0,0,0.35)" : "0 8px 32px rgba(0,0,0,0.12)",
  };

  return (
    <div
      style={{
        fontFamily: "Roboto, system-ui, sans-serif",
        background: theme.background,
        color: theme.textColor,
        minHeight: "100vh",
        transition: "all 0.5s ease",
      }}
    >
      {/* HERO */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(100px, 12vw, 140px) 5% 80px",
          minHeight: "90vh",
          gap: "clamp(40px, 8vw, 80px)",
          background: `linear-gradient(135deg, ${darkMode ? "#1f2a44" : "#f2efe8"}, ${darkMode ? "#0b1320" : "#c7b8a6"})`,
        }}
      >
        <div style={{ flex: 1, minWidth: "320px", maxWidth: "560px", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "clamp(2.8rem, 7vw, 4.2rem)",
              marginBottom: "20px",
              fontWeight: 800,
              color: theme.accent,
              lineHeight: 1.1,
            }}
          >
            {t("hero.greeting", { name: "Manel" })}
          </h1>

          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.1rem)",
              minHeight: "60px",
              color: theme.muted,
              fontWeight: 500,
            }}
          >
            <span
              style={{
                borderRight: `3px solid ${theme.accent}`,
                paddingRight: "6px",
                whiteSpace: "pre",
                animation: "blink 1.2s step-end infinite",
              }}
            >
              {typedText}
            </span>
          </h2>

          <a
            href="#contact"
            style={{
              marginTop: "32px",
              display: "inline-block",
              padding: "16px 36px",
              borderRadius: "12px",
              background: theme.accent,
              color: "#fff",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: `0 8px 24px rgba(180,106,85,0.35)`,
              transition: "all 0.35s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            {t("hero.contactButton")}
          </a>
        </div>

        <div style={{ flex: 1, minWidth: "300px", maxWidth: "420px", textAlign: "center" }}>
          <img
            src={myPhoto}
            alt={t("hello") || "Manel Saidane"}
            style={{
              width: "100%",
              borderRadius: "50%",
              border: `5px solid ${theme.accent}`,
              boxShadow: theme.cardShadow,
              transition: "transform 0.5s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
      </section>

      {/* ABOUT */}
      <section
        style={{
          maxWidth: "920px",
          margin: "clamp(60px, 10vw, 100px) auto",
          padding: "40px 20px",
          textAlign: "center",
          background: theme.sectionBg,
          borderRadius: "16px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2.2rem, 5vw, 2.6rem)",
            marginBottom: "40px",
            color: theme.accent,
            fontWeight: 700,
          }}
        >
          {t("about.title")}
        </h2>

        <div style={{ fontSize: "1.18rem", lineHeight: 1.9, maxWidth: "780px", margin: "0 auto", textAlign: "left" }}>
          <p style={{ marginBottom: "1.8rem" }}>{t("about.paragraph1")}</p>
          <p style={{ marginBottom: "1.8rem" }}>{t("about.paragraph2")}</p>
          <p style={{ marginBottom: "1.8rem" }}>{t("about.paragraph3")}</p>
          <p>{t("about.paragraph4")}</p>
        </div>
      </section>

      {/* NOUVELLE PARTIE 1 : Quick Stats (Points forts) */}
      <section style={{ padding: "80px 5%", maxWidth: "1100px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(2.2rem, 5vw, 2.6rem)",
            textAlign: "center",
            marginBottom: "3rem",
            color: theme.accent,
            fontWeight: 700,
          }}
        >
          {t("about.title") ? "Points forts" : "Quick Highlights"} {/* fallback si pas de clé */}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2rem",
          }}
        >
          <div
            style={{
              padding: "2rem",
              background: theme.sectionBg,
              borderRadius: "16px",
              boxShadow: theme.cardShadow,
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "2.2rem", color: theme.accent, marginBottom: "0.6rem" }}>5+</h3>
            <p style={{ color: theme.muted }}>
  {t("portfolio.stats.experience")}
</p>
          </div>

          <div
            style={{
              padding: "2rem",
              background: theme.sectionBg,
              borderRadius: "16px",
              boxShadow: theme.cardShadow,
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "2.2rem", color: theme.accent, marginBottom: "0.6rem" }}>20+</h3>
           <p style={{ color: theme.muted }}>
  {t("portfolio.stats.projects")}
</p>
          </div>

          <div
            style={{
              padding: "2rem",
              background: theme.sectionBg,
              borderRadius: "16px",
              boxShadow: theme.cardShadow,
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "2.2rem", color: theme.accent, marginBottom: "0.6rem" }}>Full-Stack + IA</h3>
           <p style={{ color: theme.muted }}>
  {t("portfolio.stats.specialization")}
</p>
          </div>
        </div>
      </section>

      {/* NOUVELLE PARTIE 2 : Ce que je peux faire pour toi */}
     {/* NOUVELLE PARTIE 2 : Ce que je peux faire pour toi */}
<section
  style={{
    padding: "80px 5%",
    background: theme.sectionBg,
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "clamp(2.2rem, 5vw, 2.6rem)",
      marginBottom: "3rem",
      color: theme.accent,
      fontWeight: 700,
    }}
  >
    {t("portfolio.services.title")}
  </h2>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "2rem",
      justifyContent: "center",
      maxWidth: "1100px",
      margin: "0 auto",
    }}
  >
    {/* Full Stack */}
    <div
      style={{
        flex: "1 1 300px",
        maxWidth: "360px",
        padding: "2rem",
        background: theme.background,
        borderRadius: "16px",
        boxShadow: theme.cardShadow,
      }}
    >
      <h3
        style={{
          fontSize: "1.5rem",
          marginBottom: "1rem",
          color: theme.accent,
        }}
      >
        {t("portfolio.services.fullstack.title")}
      </h3>

      <p style={{ color: theme.muted }}>
        {t("portfolio.services.fullstack.description")}
      </p>
    </div>

    {/* AI */}
    <div
      style={{
        flex: "1 1 300px",
        maxWidth: "360px",
        padding: "2rem",
        background: theme.background,
        borderRadius: "16px",
        boxShadow: theme.cardShadow,
      }}
    >
      <h3
        style={{
          fontSize: "1.5rem",
          marginBottom: "1rem",
          color: theme.accent,
        }}
      >
        {t("portfolio.services.ai.title")}
      </h3>

      <p style={{ color: theme.muted }}>
        {t("portfolio.services.ai.description")}
      </p>
    </div>

    {/* Optimization */}
    <div
      style={{
        flex: "1 1 300px",
        maxWidth: "360px",
        padding: "2rem",
        background: theme.background,
        borderRadius: "16px",
        boxShadow: theme.cardShadow,
      }}
    >
      <h3
        style={{
          fontSize: "1.5rem",
          marginBottom: "1rem",
          color: theme.accent,
        }}
      >
        {t("portfolio.services.optimization.title")}
      </h3>

      <p style={{ color: theme.muted }}>
        {t("portfolio.services.optimization.description")}
      </p>
    </div>
  </div>
</section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          maxWidth: "920px",
          margin: "clamp(80px, 12vw, 120px) auto",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 2.4rem)",
            marginBottom: "32px",
            color: theme.accent,
            fontWeight: 700,
          }}
        >
          {t("contactPage.title")}
        </h2>

        <p style={{ fontSize: "1.15rem", marginBottom: "48px", color: theme.muted }}>
          {t("contactPage.subtitle")}
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "clamp(20px, 4vw, 32px)", flexWrap: "wrap" }}>
          <a
            href="mailto:saidaneemanel@gmail.com"
            style={{
              padding: "14px 32px",
              borderRadius: "10px",
              background: theme.accent,
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
              boxShadow: `0 4px 12px rgba(180,106,85,0.25)`,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            {t("contactPage.email")}
          </a>

          <a
            href="https://www.linkedin.com/in/manel-saidane-07897b25b"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "14px 32px",
              borderRadius: "10px",
              border: `2px solid ${theme.accent}`,
              color: theme.accent,
              textDecoration: "none",
              fontWeight: 600,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = theme.accent;
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = theme.accent;
            }}
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/ManelSaidane"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "14px 32px",
              borderRadius: "10px",
              border: `2px solid ${theme.textColor}`,
              color: theme.textColor,
              textDecoration: "none",
              fontWeight: 600,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = theme.textColor;
              e.currentTarget.style.color = theme.background;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = theme.textColor;
            }}
          >
            GitHub
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: "clamp(60px, 10vw, 100px)",
          padding: "30px 20px",
          textAlign: "center",
          background: theme.sectionBg,
          color: theme.textColor,
          fontSize: "0.98rem",
        }}
      >
        <p>{t("footer.rights", { year: new Date().getFullYear() })}</p>
      </footer>

      <style>{`
        @keyframes blink {
          0%, 55%, 100% { border-color: ${theme.accent}; }
          25%, 75%      { border-color: transparent; }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;