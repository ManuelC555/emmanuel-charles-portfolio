import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p> © {new Date().getFullYear()} Emmanuel Charles. {t("footer_rights")} </p>
      <div className="social-card">
        <a href="https://www.linkedin.com/in/emmanuelcharles555" target="_blank"
        rel="noreferrer">
        <img src="/linkedin.png" alt="LinkedIn" /></a>

        <a href="https://github.com/ManuelC555" target="_blank" rel="noreferrer">
        <img src="/github.png" alt="GitHub" /></a>

        <a href="https://twitter.com/emmacharlie555" target="_blank" rel="noreferrer">
        <img src="/twitter.png" alt="Twitter" /></a>
        <a href="https://www.facebook.com/profile.php?id=100003348000370" target="_blank"
        rel="noreferrer">
        <img src="/facebook.png" alt="Facebook" /></a>
      </div>
    </footer>
  );
}
