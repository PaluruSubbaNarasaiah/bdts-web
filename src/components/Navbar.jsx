import React, { useState, useEffect } from 'react'

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (page) => {
    setCurrentPage(page)
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => handleNavClick('home')}>
          <div className="logo-container">
            <div className="logo-icon">
              <i className="fas fa-cube"></i>
            </div>
            <h2>Basel DT Solutions</h2>
          </div>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#" 
              className={currentPage === 'home' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleNavClick('home') }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className={currentPage === 'products' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleNavClick('products') }}
            >
              Products
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className={currentPage === 'solutions' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleNavClick('solutions') }}
            >
              Solutions
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className={currentPage === 'about' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleNavClick('about') }}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className={currentPage === 'contact' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleNavClick('contact') }}
            >
              Contact
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="cta-btn"
              onClick={(e) => { e.preventDefault(); handleNavClick('contact') }}
            >
              Get Started
            </a>
          </li>
        </ul>
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar