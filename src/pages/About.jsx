import React from 'react'

const About = ({ setCurrentPage }) => {
  const handleNavigation = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Basel DT Solutions</h1>
          <p>Leading the digital transformation revolution with innovative products</p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>Founded with a vision to revolutionize how businesses operate in the digital age, Basel DT Solutions has evolved from a consulting firm to a leading product-based company specializing in digital transformation solutions.</p>
              <p>We believe that every business deserves access to cutting-edge technology that drives growth, efficiency, and innovation. Our team of experts combines deep industry knowledge with technical excellence to deliver products that make a real difference.</p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Our Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Our Mission</h3>
              <p>To empower businesses worldwide with innovative digital transformation products that drive sustainable growth and competitive advantage in the modern economy.</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>To be the global leader in digital transformation products, setting the standard for innovation, quality, and customer success in the technology industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Clients Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Products Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Leadership Team</h2>
            <p>Experienced professionals driving innovation in digital transformation</p>
          </div>
          <div className="team-grid">
            <div className="team-member" onClick={() => handleNavigation('contact')}>
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" alt="CEO" />
              </div>
              <h3>John Anderson</h3>
              <p className="member-role">Chief Executive Officer</p>
              <p className="member-bio">20+ years of experience in digital transformation and enterprise software development.</p>
              <div className="member-social">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>

            <div className="team-member" onClick={() => handleNavigation('contact')}>
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" alt="CTO" />
              </div>
              <h3>Sarah Chen</h3>
              <p className="member-role">Chief Technology Officer</p>
              <p className="member-bio">Expert in AI, machine learning, and cloud architecture with 15+ years of experience.</p>
              <div className="member-social">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>

            <div className="team-member" onClick={() => handleNavigation('contact')}>
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" alt="VP Sales" />
              </div>
              <h3>Michael Rodriguez</h3>
              <p className="member-role">VP of Sales & Marketing</p>
              <p className="member-bio">Strategic leader with proven track record in B2B technology sales and market expansion.</p>
              <div className="member-social">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>We constantly push boundaries to create cutting-edge solutions that solve real business challenges.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Integrity</h3>
              <p>We build trust through transparency, honesty, and ethical business practices in all our relationships.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>Excellence</h3>
              <p>We strive for the highest quality in everything we deliver, exceeding expectations consistently.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Collaboration</h3>
              <p>We work closely with our clients as partners to achieve shared success and mutual growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Journey</h2>
            <p>Ready to transform your business with our innovative solutions?</p>
            <div className="cta-buttons">
              <button 
                onClick={() => handleNavigation('contact')} 
                className="btn-primary pulse-animation"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => handleNavigation('products')} 
                className="btn-secondary"
              >
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About