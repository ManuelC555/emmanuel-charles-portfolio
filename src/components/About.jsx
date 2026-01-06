import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about">
      <div className="about">
        <div className="about-grid">
          <div className="about-image">
            <img src="/profile.jpg" alt="Emmanuel Charles" />
          </div>

          <div className="about-content">
            <h2>{t("about_title")}</h2>
            <p>{t("about_desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
