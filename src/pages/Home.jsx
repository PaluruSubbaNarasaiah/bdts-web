import React from 'react'

const Home = ({ setCurrentPage }) => {
  const handleNavigation = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content animate-slide-in-left">
            <h1>Transform Your Business with <span className="highlight">Digital Innovation</span></h1>
            <p>Leading product-based solutions for digital transformation, automation, and business intelligence</p>
            <div className="hero-buttons">
              <button 
                onClick={() => handleNavigation('products')} 
                className="btn-primary pulse-animation"
              >
                Explore Products
              </button>
              <button 
                onClick={() => handleNavigation('contact')} 
                className="btn-secondary"
              >
                Schedule Demo
              </button>
            </div>
          </div>
          <div className="hero-image animate-slide-in-right">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Digital Transformation" />
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="features-overview">
        <div className="container">
          <div className="section-header animate-fade-in">
            <h2>Why Choose Basel DT Solutions?</h2>
            <p>We deliver cutting-edge digital transformation products that drive growth</p>
          </div>
          <div className="features-grid">
            <div className="feature-card animate-card-hover">
              <div className="feature-icon bounce-animation">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Innovation First</h3>
              <p>Latest technology solutions designed for modern business challenges</p>
            </div>
            <div className="feature-card animate-card-hover">
              <div className="feature-icon bounce-animation">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Enterprise Security</h3>
              <p>Bank-level security protocols to protect your business data</p>
            </div>
            <div className="feature-card animate-card-hover">
              <div className="feature-icon bounce-animation">
                <i className="fas fa-users"></i>
              </div>
              <h3>Expert Support</h3>
              <p>24/7 dedicated support from our team of digital transformation experts</p>
            </div>
            <div className="feature-card animate-card-hover">
              <div className="feature-icon bounce-animation">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Proven Results</h3>
              <p>Track record of delivering measurable business outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="tech-showcase">
        <div className="container">
          <div className="section-header animate-fade-in">
            <h2>Powered by Cutting-Edge Technology</h2>
            <p>Our solutions leverage the latest in AI, cloud computing, and data analytics</p>
          </div>
          <div className="tech-grid">
            <div className="tech-item animate-float" onClick={() => handleNavigation('products')}>
              <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="AI Technology" />
              <div className="tech-overlay">
                <h3>Artificial Intelligence</h3>
                <p>Machine learning algorithms that adapt and improve</p>
              </div>
            </div>
            <div className="tech-item animate-float" onClick={() => handleNavigation('products')}>
              <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Cloud Computing" />
              <div className="tech-overlay">
                <h3>Cloud Computing</h3>
                <p>Scalable infrastructure for growing businesses</p>
              </div>
            </div>
            <div className="tech-item animate-float" onClick={() => handleNavigation('products')}>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Data Analytics" />
              <div className="tech-overlay">
                <h3>Data Analytics</h3>
                <p>Transform raw data into actionable insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <div className="container">
          <div className="section-header animate-fade-in">
            <h2>Success Stories</h2>
            <p>See how we've helped businesses transform and grow</p>
          </div>
          <div className="stories-grid">
            <div className="story-card animate-slide-up" onClick={() => handleNavigation('solutions')}>
              <div className="story-image">
                <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Healthcare Success" />
              </div>
              <div className="story-content">
                <h3>Healthcare Revolution</h3>
                <p>Reduced patient wait times by 60% through AI-powered scheduling</p>
                <div className="story-stats">
                  <span className="stat">60% faster</span>
                  <span className="stat">500+ patients</span>
                </div>
              </div>
            </div>
            <div className="story-card animate-slide-up" onClick={() => handleNavigation('solutions')}>
              <div className="story-image">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Retail Success" />
              </div>
              <div className="story-content">
                <h3>Retail Transformation</h3>
                <p>Increased sales by 40% with personalized customer experiences</p>
                <div className="story-stats">
                  <span className="stat">40% growth</span>
                  <span className="stat">10K+ customers</span>
                </div>
              </div>
            </div>
            <div className="story-card animate-slide-up" onClick={() => handleNavigation('solutions')}>
              <div className="story-image">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Manufacturing Success" />
              </div>
              <div className="story-content">
                <h3>Smart Manufacturing</h3>
                <p>Reduced operational costs by 35% through predictive maintenance</p>
                <div className="story-stats">
                  <span className="stat">35% savings</span>
                  <span className="stat">99% uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate-fade-in">
            <h2>Ready to Transform Your Business?</h2>
            <p>Join hundreds of companies that trust Basel DT Solutions for their digital transformation journey</p>
            <div className="cta-buttons">
              <button 
                onClick={() => handleNavigation('products')} 
                className="btn-primary pulse-animation"
              >
                View Products
              </button>
              <button 
                onClick={() => handleNavigation('contact')} 
                className="btn-secondary"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home