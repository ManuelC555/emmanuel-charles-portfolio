import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="/profile.jpg" alt="Logo" />
        <span>Emmanuel</span>
      </div>
      <div className={`nav-links ${open ? "open" : ""}`}>
        <a href="#about" onClick={() => setOpen(false)}>{t("nav_about")}</a>
        <a href="#skills" onClick={() => setOpen(false)}>{t("nav_skills")}</a>
        <a href="#projects" onClick={() => setOpen(false)}>{t("nav_projects")}</a>
        <a href="#services" onClick={() => setOpen(false)}>{t("nav_services")}</a>
        <a href="#contact" onClick={() => setOpen(false)}>{t("nav_contact")}</a>
      </div>

      
      <div className="lang-switch">
        <button
  className={i18n.language === "en" ? "active" : ""}
  onClick={() => i18n.changeLanguage("en")}>EN</button>

<button className={i18n.language === "es" ? "active" : ""}
  onClick={() => i18n.changeLanguage("es")}>ES</button>

      </div>
      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>
    </nav>
  );
}
