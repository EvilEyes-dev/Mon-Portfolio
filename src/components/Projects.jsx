import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Mes Projets</h2>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              {/* Image/Icon du projet */}
              <div
                className="project-image"
                style={{ background: project.gradient }}
              >
                <span>{project.icon}</span>
              </div>

              {/* Contenu du projet */}
              <div className="project-content">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <span className={`project-badge ${project.badgeType}`}>
                      {project.badge}
                    </span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                {/* Technologies */}
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Note pédagogique (si présente) */}
                {project.note && (
                  <div className="project-note">{project.note}</div>
                )}

                {/* Liens */}
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-github"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-demo"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
