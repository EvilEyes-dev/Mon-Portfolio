import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Prêt à contribuer à vos projets</h2>

        <div className="contact-container">
          <p className="contact-intro">
            Je recherche un stage développeur full-stack de{" "}
            <strong>3 à 6 mois</strong> à partir de <strong>Mai 2026</strong>.
            Disponible pour un entretien ou un échange technique.
          </p>

          {/* Informations de contact */}
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-item-icon" />
              <p className="contact-item-label">Email</p>
              <a
                href="mailto:alphaoumaruchiwa@gmail.com"
                className="contact-item-value"
              >
                alphaoumaruchiwa@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <FaPhone className="contact-item-icon" />
              <p className="contact-item-label">Téléphone</p>
              <a href="tel:+224621859540" className="contact-item-value">
                +224 621 85 95 40
              </a>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-item-icon" />
              <p className="contact-item-label">Localisation</p>
              <p className="contact-item-value">Conakry, Guinée</p>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="contact-social">
            <a
              href="https://github.com/EvilEyes-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/alpha-oumar-diallo-09b8bb341/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://twitter.com/votre-username"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
