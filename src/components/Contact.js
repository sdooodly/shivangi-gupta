import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file for this component

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out!');
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-description">
        Feel free to reach out via email at{' '}
        <a href="mailto:shivangi@example.com" className="contact-email">
          shivangi@example.com
        </a>
        .
      </p>
      <form onSubmit={handleSubmit} className="contact-form">
        <label className="form-label">
          Email (optional):
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="form-input"
          />
        </label>
        <label className="form-label">
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="form-input"
          />
        </label>
        <label className="form-label">
          Description of Issue (optional):
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your issue or query"
            className="form-textarea"
          />
        </label>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;