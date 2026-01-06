import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className="section reveal" id="services">
      <h2>{t("services")}</h2>

      <div className="cards">
        <div className="card">
          <h3>{t("service_web")}</h3>
          <p>{t("service_web_desc")}</p>
        </div>

        <div className="card">
          <h3>{t("service_fullstack")}</h3>
          <p>{t("service_fullstack_desc")}</p>
        </div>

        <div className="card">
          <h3>{t("service_api")}</h3>
          <p>{t("service_api_desc")}</p>
        </div>
      </div>
    </section>
  );
}
