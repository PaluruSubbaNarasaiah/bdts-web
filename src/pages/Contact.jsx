import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    newsletter: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      alert(`Thank you ${formData.firstName}! Your message has been sent successfully. We will get back to you soon.`)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        newsletter: false
      })
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Ready to transform your business? Let's start the conversation</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>We're here to help you with your digital transformation journey. Reach out to us through any of the following channels.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="method-info">
                    <h3>Visit Our Office</h3>
                    <p>123 Innovation Drive<br />Tech City, TC 12345<br />United States</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="method-info">
                    <h3>Call Us</h3>
                    <p>Main: +1 (555) 123-4567<br />Sales: +1 (555) 123-4568<br />Support: +1 (555) 123-4569</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="method-info">
                    <h3>Email Us</h3>
                    <p>General: info@baseldtsolutions.com<br />Sales: sales@baseldtsolutions.com<br />Support: support@baseldtsolutions.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="method-info">
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="support">Technical Support</option>
                    <option value="demo">Request Demo</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="6" 
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project or how we can help you..."
                    required
                  ></textarea>
                </div>

                <div className="form-group checkbox-group">
                  <input 
                    type="checkbox" 
                    id="newsletter" 
                    name="newsletter" 
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="newsletter">I would like to receive updates and newsletters from Basel DT Solutions</label>
                </div>

                <button type="submit" className="btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us on the Map</h2>
          <div className="map-container">
            <div id="map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e5b7c5d%3A0x123456789abcdef0!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" 
                width="100%" 
                height="400" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Basel DT Solutions Location"
              />
            </div>
            <div className="map-info">
              <h3>Our Location</h3>
              <p>Located in the heart of the tech district, our office is easily accessible by public transportation and offers convenient parking for visitors.</p>
              <div className="location-details">
                <div className="detail-item">
                  <i className="fas fa-subway"></i>
                  <span>Metro Station: Tech Center (5 min walk)</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-car"></i>
                  <span>Parking: Available on-site</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-plane"></i>
                  <span>Airport: 30 minutes by car</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about our services</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How quickly can you implement a solution?</h3>
              <p>Implementation timelines vary based on project complexity, but most solutions can be deployed within 4-12 weeks.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide ongoing support?</h3>
              <p>Yes, we offer 24/7 technical support and maintenance services for all our products.</p>
            </div>
            <div className="faq-item">
              <h3>Can your solutions integrate with existing systems?</h3>
              <p>Absolutely. Our products are designed to seamlessly integrate with most existing business systems and platforms.</p>
            </div>
            <div className="faq-item">
              <h3>What industries do you serve?</h3>
              <p>We serve various industries including healthcare, finance, retail, manufacturing, education, and real estate.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact