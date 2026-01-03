import React from 'react'

const Solutions = ({ setCurrentPage }) => {
  const handleNavigation = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Industry Solutions</h1>
          <p>Tailored digital transformation solutions for every industry</p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="solutions-grid">
        <div className="container">
          <div className="solutions-cards">
            <div className="solution-card" onClick={() => handleNavigation('contact')}>
              <div className="solution-icon">
                <i className="fas fa-hospital"></i>
              </div>
              <h3>Healthcare</h3>
              <p>Digital transformation solutions for healthcare providers, including patient management systems, telemedicine platforms, and data analytics.</p>
              <ul>
                <li>Electronic Health Records</li>
                <li>Telemedicine Integration</li>
                <li>Patient Analytics</li>
              </ul>
              <button className="solution-btn" onClick={(e) => { e.stopPropagation(); handleNavigation('contact') }}>Learn More</button>
            </div>

            <div className="solution-card" onClick={() => handleNavigation('contact')}>
              <div className="solution-icon">
                <i className="fas fa-university"></i>
              </div>
              <h3>Financial Services</h3>
              <p>Secure and compliant digital solutions for banks, insurance companies, and fintech organizations.</p>
              <ul>
                <li>Digital Banking Platforms</li>
                <li>Risk Management Systems</li>
                <li>Compliance Automation</li>
              </ul>
              <button className="solution-btn" onClick={(e) => { e.stopPropagation(); handleNavigation('contact') }}>Learn More</button>
            </div>

            <div className="solution-card" onClick={() => handleNavigation('contact')}>
              <div className="solution-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <h3>Retail & E-commerce</h3>
              <p>Omnichannel retail solutions, inventory management, and customer experience optimization.</p>
              <ul>
                <li>E-commerce Platforms</li>
                <li>Inventory Management</li>
                <li>Customer Analytics</li>
              </ul>
              <button className="solution-btn" onClick={(e) => { e.stopPropagation(); handleNavigation('contact') }}>Learn More</button>
            </div>

            <div className="solution-card" onClick={() => handleNavigation('contact')}>
              <div className="solution-icon">
                <i className="fas fa-industry"></i>
              </div>
              <h3>Manufacturing</h3>
              <p>Smart manufacturing solutions with IoT integration, predictive maintenance, and supply chain optimization.</p>
              <ul>
                <li>IoT Integration</li>
                <li>Predictive Maintenance</li>
                <li>Supply Chain Optimization</li>
              </ul>
              <button className="solution-btn" onClick={(e) => { e.stopPropagation(); handleNavigation('contact') }}>Learn More</button>
            </div>

            <div className="solution-card" onClick={() => handleNavigation('contact')}>
              <div className="solution-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Education</h3>
              <p>Digital learning platforms, student management systems, and educational analytics solutions.</p>
              <ul>
                <li>Learning Management Systems</li>
                <li>Student Analytics</li>
                <li>Virtual Classrooms</li>
              </ul>
              <button className="solution-btn" onClick={(e) => { e.stopPropagation(); handleNavigation('contact') }}>Learn More</button>
            </div>

            <div className="solution-card" onClick={() => handleNavigation('contact')}>
              <div className="solution-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>Real Estate</h3>
              <p>Property management systems, virtual tours, and real estate analytics platforms.</p>
              <ul>
                <li>Property Management</li>
                <li>Virtual Tours</li>
                <li>Market Analytics</li>
              </ul>
              <button className="solution-btn" onClick={(e) => { e.stopPropagation(); handleNavigation('contact') }}>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Implementation Process</h2>
            <p>A proven methodology to ensure successful digital transformation</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discovery & Analysis</h3>
              <p>We analyze your current systems and identify transformation opportunities</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Strategy & Planning</h3>
              <p>Develop a comprehensive digital transformation roadmap</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Implementation</h3>
              <p>Deploy solutions with minimal disruption to your operations</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Training & Support</h3>
              <p>Comprehensive training and ongoing support for your team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Industry?</h2>
            <p>Let's discuss how our solutions can address your specific industry challenges</p>
            <div className="cta-buttons">
              <button 
                onClick={() => handleNavigation('contact')} 
                className="btn-primary pulse-animation"
              >
                Schedule Consultation
              </button>
              <button 
                onClick={() => handleNavigation('products')} 
                className="btn-secondary"
              >
                View Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Solutions