import { Briefcase, Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import '../../css/Experience.css';

export default function Experience() {
  const contributions = [
    {
      title: "Ride-Hailing Mobile Application",
      description: "Contributed to the development of a ride-hailing mobile application using Flutter and Firebase. Utilized AI-assisted development tools to implement state management systems, resolve critical bugs, and refine UI/UX flows."
    },
    {
      title: "Backend & Data Integration",
      description: "Diagnosed and resolved complex offline data persistence issues. Seamlessly integrated frontend UI screens with cloud-based backend services, resulting in a substantial increase in overall application stability."
    },
    {
      title: "Rental Timer Application",
      description: "Optimized a rental timer application. Redesigned core UI/UX screens for better usability and resolved backend API connection issues to maximize timer tracking reliability."
    },
    {
      title: "Testing & Performance Quality",
      description: "Supported automated and manual unit testing processes. Assisted in diagnosing CPU bottlenecks and resolving UI rendering delays, improving performance metrics."
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="experience-timeline-container">
          <div className="experience-card glass-card animate-fade-in">
            <div className="experience-left">
              <div className="icon-wrapper">
                <Briefcase size={24} aria-hidden="true" />
              </div>
              <span className="internship-hours"><Clock size={14} aria-hidden="true" /> 500 Hours Intern</span>
            </div>
            
            <div className="experience-right">
              <div className="experience-header">
                <div>
                  <h3 className="job-title">Junior Developer Intern</h3>
                  <h4 className="company-name">MORE Ventures</h4>
                </div>
                <div className="experience-meta">
                  <span className="meta-item"><Calendar size={14} aria-hidden="true" /> June 2026 (Completed)</span>
                  <span className="meta-item"><MapPin size={14} aria-hidden="true" /> Los Baños, Laguna</span>
                </div>
              </div>
              
              <div className="role-specialization">
                <span className="badge">Flutter Development</span>
                <span className="badge">Firebase Integration</span>
                <span className="badge">UI/UX Optimization</span>
              </div>
              
              <p className="experience-intro">
                Engaged in 500 hours of intensive, hands-on mobile application engineering. Worked with cross-functional teams to debug, refine, and release mobile applications, utilizing state-of-the-art developer tooling.
              </p>
              
              <div className="contributions-grid">
                {contributions.map((item, index) => (
                  <div key={index} className="contribution-card">
                    <div className="contribution-header">
                      <CheckCircle2 size={18} className="success-icon" aria-hidden="true" />
                      <h5>{item.title}</h5>
                    </div>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
