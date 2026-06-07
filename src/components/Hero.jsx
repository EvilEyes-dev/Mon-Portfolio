import React from "react";
import { Link } from "react-scroll";
import { FaArrowDown, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-greeting">Bonjour, je suis</p>

          <h1 className="hero-title">
            <span className="hero-highlight">Alpha Oumar</span>
            <br />
            Développeur Front-End
          </h1>

          <p className="hero-subtitle">
            Étudiant en Génie Logiciel, je conçois des interfaces utilisateur
            modernes et développe des applications web et mobiles, avec un
            intérêt particulier pour la sécurité et l'audit informatique.
            Actuellement à la recherche d'un stage.
          </p>

          <div className="hero-buttons">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="btn btn-primary"
            >
              Voir mes projets <FaArrowDown />
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="btn btn-secondary"
            >
              Me contacter <FaEnvelope />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
