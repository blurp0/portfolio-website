import { useState, useEffect } from 'react';
import { Waves, ShieldAlert, ClipboardList, Image, X } from 'lucide-react';
import '../../css/Projects.css';

// Cover images (card thumbnails)
import coverFlood from '../../assets/cover-flood.png';
import coverHelmet from '../../assets/cover-helmet.png';
import coverEvaluation from '../../assets/cover-evaluation.png';

// Gallery images
import flood1 from '../../assets/Flood 1.png';
import flood2 from '../../assets/Flood 2.png';
import helmet1 from '../../assets/Helmet Detection 1.png';
import helmet2 from '../../assets/Helmet Detection 2.png';
import helmet3 from '../../assets/Helmet Detection 3.png';
import eval1 from '../../assets/Evaluation 1.png';
import eval2 from '../../assets/Evaluation 2.png';
import eval3 from '../../assets/Evaluation 3.png';

export default function Projects() {
  const [activeLightbox, setActiveLightbox] = useState(null);

  const projectList = [
    {
      title: "Flood Vulnerability Assessment",
      subtitle: "Predictive Analytics & Environmental Modeling (Thesis Project)",
      location: "Los Baños, Laguna",
      icon: <Waves size={20} className="proj-icon flood-icon" aria-hidden="true" />,
      cover: coverFlood,
      images: [flood1, flood2],
      // Portrait images: tall/square — display side-by-side
      imageOrientation: "portrait",
      description: "Contributed to an environmental safety project predicting flood vulnerabilities. Integrated SWAT (Soil and Water Assessment Tool) hydrological modeling maps with deep learning and machine learning algorithms for high-accuracy risk analysis.",
      tags: ["Python", "Machine Learning", "QGIS", "LSTM", "XGBoost", "Random Forest", "SVC", "MLP"],
      github: null, // Thesis project - no public code link
      colorClass: "flood"
    },
    {
      title: "Helmet Detection System",
      subtitle: "Computer Vision Web Application",
      location: "Academic Research Project",
      icon: <ShieldAlert size={20} className="proj-icon helmet-icon" aria-hidden="true" />,
      cover: coverHelmet,
      images: [helmet1, helmet2, helmet3],
      // Portrait images: tall/narrow — display side-by-side
      imageOrientation: "portrait",
      description: "Developed a computer vision detection portal that identifies whether riders are wearing safety helmets. Built a Flask-based web dashboard that processes real-time video streams and highlights missing protective gear.",
      tags: ["Flask", "Python", "Computer Vision", "HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/blurp0/Helmet_Detection",
      colorClass: "helmet"
    },
    {
      title: "Evaluation Form System",
      subtitle: "Full-Stack System with Responsive UI",
      location: "Academic Coursework Project",
      icon: <ClipboardList size={20} className="proj-icon evaluation-icon" aria-hidden="true" />,
      cover: coverEvaluation,
      images: [eval1, eval2, eval3],
      // Landscape images: wide — stack vertically
      imageOrientation: "landscape",
      description: "Developed a web-based evaluation system for collecting and managing user feedback. Engineered structured database relations, backend server validation, and a responsive frontend layout for efficient data handling.",
      tags: ["Flask", "Python", "MySQL", "HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/blurp0/Evaluation_Forms",
      colorClass: "evaluation"
    }
  ];

  useEffect(() => {
    if (activeLightbox !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeLightbox]);

  const openLightbox = (projectIndex) => {
    setActiveLightbox(projectIndex);
  };

  const closeLightbox = () => {
    setActiveLightbox(null);
  };

  const activeProject = activeLightbox !== null ? projectList[activeLightbox] : null;

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card glass-card animate-fade-in">
              <div className={`project-header-glow ${project.colorClass}`}></div>

              <div className="project-image-wrapper" onClick={() => openLightbox(index)}>
                <img src={project.cover} alt={project.title} className="project-image" loading="lazy" />
                <div className="project-image-overlay">
                  <Image size={24} className="overlay-gallery-icon" />
                  <span>View Gallery</span>
                </div>
              </div>

              <div className="project-body">
                <div className="project-icon-wrapper">
                  {project.icon}
                </div>

                <span className="project-location">{project.location}</span>
                <h3 className="project-title">{project.title}</h3>
                <h4 className="project-subtitle">{project.subtitle}</h4>

                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-footer">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary project-link">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }} aria-hidden="true">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg> Code
                  </a>
                )}
                <button
                  onClick={() => openLightbox(index)}
                  className="btn btn-primary project-link"
                  aria-label={`View screenshot gallery for ${project.title}`}
                >
                  <Image size={16} aria-hidden="true" /> View Photos
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Gallery Modal */}
      {activeProject !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close Gallery">
            <X size={24} />
          </button>

          <div
            className={`lightbox-content orientation-${activeProject.imageOrientation}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="lightbox-info">
              <h4>{activeProject.title}</h4>
              <span className="lightbox-counter">{activeProject.images.length} screenshots</span>
            </div>

            {/* Gallery Body */}
            <div className={`gallery-body orientation-${activeProject.imageOrientation} count-${activeProject.images.length}`}>
              {activeProject.images.map((img, imgIndex) => (
                <div key={imgIndex} className="gallery-item">
                  <img
                    src={img}
                    alt={`${activeProject.title} screenshot ${imgIndex + 1}`}
                    className="gallery-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
