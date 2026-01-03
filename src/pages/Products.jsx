import React from 'react'

const Products = ({ setCurrentPage }) => {
  const handleNavigation = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="animate-fade-in">Our Products</h1>
          <p className="animate-fade-in">Comprehensive digital solutions designed for modern businesses</p>
        </div>
      </section>

      {/* Products Hero */}
      <section className="products-hero">
        <div className="container">
          <div className="products-hero-content">
            <div className="hero-text animate-slide-in-left">
              <h2>Revolutionary Digital Solutions</h2>
              <p>Experience the future of business automation with our cutting-edge product suite designed to accelerate your digital transformation journey.</p>
            </div>
            <div className="hero-visual animate-slide-in-right">
              <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Digital Solutions" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-detailed">
        <div className="container">
          <div className="product-item animate-slide-up">
            <div className="product-content">
              <div className="product-info">
                <div className="product-icon-large rotate-animation">
                  <i className="fas fa-robot"></i>
                </div>
                <h2>AI Automation Platform</h2>
                <p>Transform your business operations with our intelligent automation platform. Leverage machine learning and AI to streamline processes, reduce manual work, and increase efficiency across your organization.</p>
                <ul className="feature-list">
                  <li><i className="fas fa-check"></i> Intelligent Process Automation</li>
                  <li><i className="fas fa-check"></i> Machine Learning Integration</li>
                  <li><i className="fas fa-check"></i> Real-time Analytics</li>
                  <li><i className="fas fa-check"></i> Custom Workflow Builder</li>
                </ul>
                <div className="product-buttons">
                  <button 
                    onClick={() => handleNavigation('contact')} 
                    className="btn-primary pulse-animation"
                  >
                    Request Demo
                  </button>
                  <button 
                    onClick={() => handleNavigation('about')} 
                    className="btn-secondary"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="product-image animate-float">
                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="AI Automation" />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <i className="fas fa-play-circle"></i>
                    <span>Watch Demo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-item reverse animate-slide-up">
            <div className="product-content">
              <div className="product-info">
                <div className="product-icon-large rotate-animation">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h2>Business Intelligence Suite</h2>
                <p>Turn your data into actionable insights with our comprehensive BI platform. Advanced analytics, interactive dashboards, and predictive modeling to drive informed decision-making.</p>
                <ul className="feature-list">
                  <li><i className="fas fa-check"></i> Interactive Dashboards</li>
                  <li><i className="fas fa-check"></i> Predictive Analytics</li>
                  <li><i className="fas fa-check"></i> Data Visualization</li>
                  <li><i className="fas fa-check"></i> Custom Reports</li>
                </ul>
                <div className="product-buttons">
                  <button 
                    onClick={() => handleNavigation('contact')} 
                    className="btn-primary pulse-animation"
                  >
                    Request Demo
                  </button>
                  <button 
                    onClick={() => handleNavigation('about')} 
                    className="btn-secondary"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="product-image animate-float">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Business Intelligence" />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <i className="fas fa-play-circle"></i>
                    <span>Watch Demo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-item animate-slide-up">
            <div className="product-content">
              <div className="product-info">
                <div className="product-icon-large rotate-animation">
                  <i className="fas fa-cloud"></i>
                </div>
                <h2>Cloud Integration Hub</h2>
                <p>Seamlessly connect and manage your cloud infrastructure with our integration platform. Multi-cloud support, API management, and secure data synchronization across all your systems.</p>
                <ul className="feature-list">
                  <li><i className="fas fa-check"></i> Multi-Cloud Support</li>
                  <li><i className="fas fa-check"></i> API Management</li>
                  <li><i className="fas fa-check"></i> Data Synchronization</li>
                  <li><i className="fas fa-check"></i> Security Monitoring</li>
                </ul>
                <div className="product-buttons">
                  <button 
                    onClick={() => handleNavigation('contact')} 
                    className="btn-primary pulse-animation"
                  >
                    Request Demo
                  </button>
                  <button 
                    onClick={() => handleNavigation('about')} 
                    className="btn-secondary"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="product-image animate-float">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" alt="Cloud Integration" />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <i className="fas fa-play-circle"></i>
                    <span>Watch Demo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Gallery */}
      <section className="features-gallery">
        <div className="container">
          <div className="section-header animate-fade-in">
            <h2>Product Features in Action</h2>
            <p>See our products in real-world scenarios</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item animate-scale-in" onClick={() => handleNavigation('contact')}>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dashboard Analytics" />
              <div className="gallery-overlay">
                <h3>Real-time Dashboards</h3>
                <p>Monitor your business metrics in real-time</p>
              </div>
            </div>
            <div className="gallery-item animate-scale-in" onClick={() => handleNavigation('contact')}>
              <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Automation Workflow" />
              <div className="gallery-overlay">
                <h3>Workflow Automation</h3>
                <p>Streamline complex business processes</p>
              </div>
            </div>
            <div className="gallery-item animate-scale-in" onClick={() => handleNavigation('contact')}>
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cloud Infrastructure" />
              <div className="gallery-overlay">
                <h3>Cloud Management</h3>
                <p>Centralized cloud resource management</p>
              </div>
            </div>
            <div className="gallery-item animate-scale-in" onClick={() => handleNavigation('contact')}>
              <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="AI Processing" />
              <div className="gallery-overlay">
                <h3>AI Processing</h3>
                <p>Advanced machine learning capabilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate-fade-in">
            <h2>Ready to Get Started?</h2>
            <p>Contact our team to discuss which products are right for your business</p>
            <div className="cta-buttons">
              <button 
                onClick={() => handleNavigation('contact')} 
                className="btn-primary pulse-animation"
              >
                Contact Sales
              </button>
              <button 
                onClick={() => handleNavigation('solutions')} 
                className="btn-secondary"
              >
                View Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products