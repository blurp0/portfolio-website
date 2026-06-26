import { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowUp, CheckCircle } from 'lucide-react';
import '../../css/Contact.css';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ name: '', email: '', message: '' });
      }, 4000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-grid">
          {/* Contact Details Column */}
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's build something together</h3>
            <p className="contact-text">
              I am open to internship opportunities, junior developer roles, and collaborative projects. Feel free to reach out via email, call, or by filling out the message form.
            </p>

            <div className="contact-details-list">
              <a href="mailto:realon.jomari99@gmail.com" className="contact-detail-card glass-card">
                <div className="detail-icon-wrapper mail-wrapper">
                  <Mail size={20} aria-hidden="true" />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Email Me</span>
                  <span className="detail-value">realon.jomari99@gmail.com</span>
                </div>
              </a>

              <a href="tel:+639076707222" className="contact-detail-card glass-card">
                <div className="detail-icon-wrapper phone-wrapper">
                  <Phone size={20} aria-hidden="true" />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Call Me</span>
                  <span className="detail-value">+63 907 670 7222</span>
                </div>
              </a>

              <div className="contact-detail-card glass-card">
                <div className="detail-icon-wrapper address-wrapper">
                  <MapPin size={20} aria-hidden="true" />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">Looc, Calamba, Laguna 4027</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/blurp0" target="_blank" rel="noopener noreferrer" className="social-link-btn" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href="https://www.facebook.com/PaLLL3" target="_blank" rel="noopener noreferrer" className="social-link-btn" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="contact-form-container glass-card">
            {isSubmitted ? (
              <div className="form-success-state animate-fade-in">
                <div className="success-checkmark-wrapper">
                  <CheckCircle size={48} className="success-checkmark-icon" aria-hidden="true" />
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out, Jomari will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Describe your project or inquiry..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message <Send size={16} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer info and back to top */}
        <footer className="footer">
          <div className="footer-line"></div>
          <div className="footer-content">
            <span className="footer-copyright">
              © {new Date().getFullYear()} Jomari R. Realon. All rights reserved.
            </span>
            <button className="back-to-top" onClick={handleScrollToTop} aria-label="Back to Top">
              <ArrowUp size={16} aria-hidden="true" />
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}
