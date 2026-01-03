import React from 'react'

const Footer = ({ setCurrentPage }) => {
  const handleNavClick = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Basel DT Solutions</h3>
            <p>Transforming businesses through innovative digital products and solutions.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('products') }}>AI Automation</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('products') }}>Business Intelligence</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('products') }}>Cloud Integration</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('about') }}>About Us</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('contact') }}>Contact</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('solutions') }}>Solutions</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Basel DT Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer