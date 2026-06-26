import { GraduationCap, Calendar, MapPin, BookOpen, Brain, Smartphone, Globe, Map } from 'lucide-react';
import '../../css/About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About & Education</h2>

        <div className="about-grid">
          <div className="about-info-card glass-card">
            <h3 className="card-subtitle"><BookOpen className="card-icon-title" /> My Journey</h3>
            <p className="about-text">
              I am a passionate Computer Science graduate with a specialized focus on <strong>Intelligent Systems</strong>. My academic and hands-on journey centers on designing algorithms, training models, and engineering mobile and web solutions that translate complex data into real-world applications.
            </p>
            <p className="about-text">
              During my studies and internship, I developed a strong foundation in machine learning, computer vision, and frontend/backend integration. I love working at the intersection of visual user experience and backend automation to create highly functional products.
            </p>

            <div className="about-focus-areas">
              <h4 className="focus-title">Areas of Focus:</h4>
              <ul className="focus-list">
                <li>
                  <Brain size={18} className="focus-icon-bullet ml-icon" />
                  <span><strong>Machine Learning</strong> (Deep Learning, Predictive Analytics)</span>
                </li>
                <li>
                  <Smartphone size={18} className="focus-icon-bullet mobile-icon" />
                  <span><strong>Cross-Platform Mobile Applications</strong> (Flutter & Firebase)</span>
                </li>
                <li>
                  <Globe size={18} className="focus-icon-bullet web-icon" />
                  <span><strong>Responsive Full-Stack Web Development</strong> (Python, Flask, JavaScript)</span>
                </li>
                <li>
                  <Map size={18} className="focus-icon-bullet spatial-icon" />
                  <span><strong>Hydrological & Spatial Modeling</strong> (QGIS, SWAT modeling)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="education-timeline">
            <div className="timeline-item glass-card">

              <div className="timeline-title">
                <GraduationCap className="timeline-header-icon" aria-hidden="true" />
                <h3>Academic Background</h3>
              </div>

              <div className="timeline-header">
                <span className="education-tag">Degree</span>
                <span className="timeline-date"><Calendar size={14} /> June 2026</span>
              </div>
              <h4 className="school-name">Laguna State Polytechnic University</h4>
              <p className="school-campus">Los Baños Campus</p>
              <h5 className="degree-name">Bachelor of Science in Computer Science</h5>
              <div className="major-badge">Major in Intelligent System</div>

              <div className="location-info">
                <MapPin size={14} /> Los Baños, Laguna
              </div>

              <p className="timeline-highlights">
                Focused coursework on Artificial Intelligence, Neural Networks, Computer Vision, and Advanced Software Engineering. Completed key research and development projects addressing environmental mapping and image recognition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
