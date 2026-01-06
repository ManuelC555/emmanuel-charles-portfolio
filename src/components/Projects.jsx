import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="section reveal" id="projects">
      <h2>{t("projects")}</h2>

      <div className="cards">
        <div className="card project-card">
          <h3>Construction Website</h3>
          <p>{t("project_construction_desc")}</p>

          <a
            href="https://comia-company-site.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="btn small"
          >
            Live
          </a>
        </div>
      </div>
    </section>
  );
}
