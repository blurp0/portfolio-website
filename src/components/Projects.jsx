import { ExternalLink, Waves, ShieldAlert, BookOpen } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const projectList = [
    {
      title: "Flood Vulnerability Assessment",
      subtitle: "Predictive Analytics & Environmental Modeling",
      location: "Los Baños, Laguna",
      icon: <Waves size={24} className="proj-icon flood-icon" />,
      description: "Contributed to an environmental safety project predicting flood vulnerabilities. Integrated SWAT (Soil and Water Assessment Tool) hydrological modeling maps with deep learning and machine learning algorithms for high-accuracy risk analysis.",
      tags: ["Python", "Machine Learning", "QGIS", "LSTM", "XGBoost", "Random Forest", "SVC", "MLP"],
      github: "https://github.com",
      demo: "https://example.com",
      colorClass: "flood"
    },
    {
      title: "Helmet Detection System",
      subtitle: "Computer Vision Web Application",
      location: "Academic Research Project",
      icon: <ShieldAlert size={24} className="proj-icon helmet-icon" />,
      description: "Developed a computer vision detection portal that identifies whether riders are wearing safety helmets. Built a Flask-based web dashboard that processes real-time video streams and highlights missing protective gear.",
      tags: ["Flask", "Python", "Computer Vision", "HTML5", "CSS3", "JavaScript"],
      github: "https://github.com",
      demo: "https://example.com",
      colorClass: "helmet"
    },
    {
      title: "Library Management Website",
      subtitle: "Full-Stack System with Responsive UI",
      location: "Database Management Coursework",
      icon: <BookOpen size={24} className="proj-icon library-icon" />,
      description: "Designed and built a database-backed web application for catalog tracking, loan auditing, and user access control. Engineered structured backend relations and a highly responsive front-end for seamless operations.",
      tags: ["Flask", "Python", "SQLite", "HTML5", "CSS3", "Responsive UI"],
      github: "https://github.com/blurp0/LibraryManagement",
      demo: "https://example.com",
      colorClass: "library"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card glass-card animate-fade-in">
              <div className={`project-header-glow ${project.colorClass}`}></div>

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
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary project-link">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg> Code
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-link">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
