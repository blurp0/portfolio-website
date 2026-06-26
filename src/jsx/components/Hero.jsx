import { Mail, ArrowRight, Brain, Smartphone, Code, Sparkles } from 'lucide-react';
import '../../css/Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <div className="hero-greeting badge">
            <Sparkles size={14} className="badge-icon" /> Welcome to my portfolio
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight-text">Jomari R. Realon</span>
          </h1>
          <h2 className="hero-subtitle">
            Computer Science Graduate | Intelligent Systems Major
          </h2>
          <p className="hero-description">
            I specialize in developing intelligent, high-performance applications. With hands-on experience in <strong>Mobile App Development</strong> (Flutter) and <strong>Machine Learning</strong> model integration, I enjoy building seamless, data-driven user experiences.
          </p>

          <div className="hero-tags">
            <span className="hero-tag-badge">
              <Smartphone size={16} /> Mobile Dev
            </span>
            <span className="hero-tag-badge">
              <Brain size={16} /> Machine Learning
            </span>
            <span className="hero-tag-badge">
              <Code size={16} /> Web Systems
            </span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Connect
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/blurp0" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a href="https://www.facebook.com/PaLLL3" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="mailto:realon.jomari99@gmail.com" className="social-icon" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual animate-float">
          <div className="visual-card glass-card">
            <div className="card-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="card-title">intelligent-system.py</span>
            </div>
            <div className="card-body">
              <pre>
                <code>
                  <span className="token-keyword">import</span> intelligent_systems <span className="token-keyword">as</span> is{"\n"}
                  <span className="token-keyword">import</span> machine_learning <span className="token-keyword">as</span> ml{"\n"}{"\n"}

                  <span className="token-comment"># Initialize developer</span>{"\n"}
                  developer = is.<span className="token-class">Developer</span>({"\n"}
                  &nbsp;&nbsp;&nbsp;&nbsp;name=<span className="token-string">"Jomari R. Realon"</span>,{"\n"}
                  &nbsp;&nbsp;&nbsp;&nbsp;role=<span className="token-string">"Intelligent Systems Major"</span>,{"\n"}
                  &nbsp;&nbsp;&nbsp;&nbsp;status=<span className="token-string">"Ready to Build"</span>{"\n"}
                  ){"\n"}{"\n"}

                  <span className="token-comment"># Core stack load</span>{"\n"}
                  developer.<span className="token-function">load_skills</span>([{"\n"}
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="token-string">"Flutter"</span>, <span className="token-string">"Firebase"</span>,{"\n"}
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="token-string">"Python"</span>, <span className="token-string">"Flask"</span>,{"\n"}
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="token-string">"Machine Learning"</span>{"\n"}
                  ]){"\n"}{"\n"}

                  <span className="token-comment"># Deploying solutions</span>{"\n"}
                  developer.<span className="token-function">build_innovations</span>({"\n"}
                  &nbsp;&nbsp;&nbsp;&nbsp;helmet_detection=<span className="token-boolean">True</span>,{"\n"}
                  &nbsp;&nbsp;&nbsp;&nbsp;flood_assessment=<span className="token-boolean">True</span>,{"\n"}
                  &nbsp;&nbsp;&nbsp;&nbsp;library_management=<span className="token-boolean">True</span>{"\n"}
                  ){"\n"}{"\n"}

                  developer.<span className="token-function">print_status</span>(){"\n"}
                  <span className="token-comment"># Output: "Creating impactful code..."</span>
                </code>
              </pre>
            </div>
          </div>
          <div className="glowing-circle"></div>
          <div className="glowing-circle-cyan"></div>
        </div>
      </div>
    </section>
  );
}
