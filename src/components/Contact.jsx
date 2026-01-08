import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="section reveal" id="contacto">
      <h2>{t("contact")}</h2>

      <div className="cards">
        <div className="contact-card">
          <div className="contact-actions">
          <a href="mailto:emmanuelcharlesw555@gmail.com" className="btn outline"
          target="_blank" rel="noreferrer"> Email me </a>
          <a href="https://wa.me/34643006445" className="btn primary"> WhatsApp </a>
          </div>
        </div>
      </div>
    </section>
  );
}

