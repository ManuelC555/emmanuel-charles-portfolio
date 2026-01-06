import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-name">Emmanuel Charles</span>

        <div className="hero-location">
          <i className="fa-solid fa-location-dot location-icon"></i>
          <span>Spain</span>
        </div>

        <h1>{t("hero_title")}</h1>
        <p>{t("hero_subtitle")}</p>

        <div className="hero-actions">
          <a href="#contact" className="btn primary">
            {t("contact")}
          </a>

          <a
            href="https://wa.me/34643006445"
            target="_blank"
            rel="noreferrer"
            className="btn outline"
          >
            WhatsApp
          </a>

          <img
            src="/profile.jpg"
            alt="Emmanuel Charles"
            className="hero-profile"
          />
        </div>
      </div>
    </section>
  );
}
