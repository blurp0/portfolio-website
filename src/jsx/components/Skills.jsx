import { Code2, Languages, Heart, Sparkles, Check } from 'lucide-react';
import '../../css/Skills.css';

export default function Skills() {
  const technicalSkills = [
    { name: "Python", category: "Core Development / ML" },
    { name: "Dart", category: "Mobile Development" },
    { name: "JavaScript", category: "Web Systems" },
    { name: "Flutter", category: "Cross-Platform Framework" },
    { name: "Flask", category: "Backend Microframework" },
    { name: "Firebase", category: "Cloud Database / Auth" },
    { name: "QGIS", category: "Geographic Systems" },
    { name: "Machine Learning", category: "Predictive Analytics / Algorithms" }
  ];

  const languages = [
    { name: "English", level: "Proficient" },
    { name: "Filipino", level: "Native / Bilingual" }
  ];

  const interests = [
    { name: "Mobile App Development", desc: "Building native-feel mobile interfaces using Dart & Flutter" },
    { name: "Machine Learning", desc: "Training regression, classification & neural models in Python" },
    { name: "UI/UX Design", desc: "Designing responsive, user-friendly layouts and wireframes" }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Interests</h2>
        
        <div className="skills-container-grid">
          {/* Technical Skills Card */}
          <div className="skills-block glass-card animate-fade-in">
            <div className="block-header">
              <Code2 className="block-icon tech-icon" aria-hidden="true" />
              <h3>Technical Stack</h3>
            </div>
            <p className="block-description">Tools, frameworks, and programming languages I use to build solutions:</p>
            <div className="tech-skills-grid">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="tech-skill-item">
                  <div className="skill-indicator">
                    <Check size={12} className="check-icon" aria-hidden="true" />
                  </div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-category">{skill.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-side-column">
            {/* Languages Card */}
            <div className="skills-block glass-card animate-fade-in">
              <div className="block-header">
                <Languages className="block-icon lang-icon" aria-hidden="true" />
                <h3>Languages</h3>
              </div>
              <div className="languages-list">
                {languages.map((lang, index) => (
                  <div key={index} className="lang-item">
                    <span className="lang-name">{lang.name}</span>
                    <span className="lang-level badge">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Interests Card */}
            <div className="skills-block glass-card animate-fade-in">
              <div className="block-header">
                <Heart className="block-icon interest-icon" aria-hidden="true" />
                <h3>Interests & Focus</h3>
              </div>
              <div className="interests-list">
                {interests.map((interest, index) => (
                  <div key={index} className="interest-item">
                    <div className="interest-header">
                      <Sparkles size={14} className="sparkle-icon" aria-hidden="true" />
                      <h4>{interest.name}</h4>
                    </div>
                    <p>{interest.desc}</p>
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
