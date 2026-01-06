import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section className="section reveal" id="skills">
      <h2>{t("skills")}</h2>

      <div className="cards">
        <div className="card">HTML</div>
        <div className="card">CSS</div>
        <div className="card">React</div>
        <div className="card">JavaScript</div>
        <div className="card">Node.js</div>
        <div className="card">Express</div>
        <div className="card">PostgreSQL</div>
        <div className="card">Git / GitHub</div>
      </div>
    </section>
  );
}
