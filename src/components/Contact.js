import React, { useState } from 'react';
import './Contact.css'; 

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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      email: formData.email,
      phone: formData.phone,
      description: formData.description,
    };
  
    console.log('Submitting payload:', payload); // Log the payload
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbz8fyCzlS795xKSbZNCnP-2oZtBLIb56FBXTWr-NK-AzclPTV16KozsaPThM-I--K_w_w/execRL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      console.log('Response status:', response.status); // response status
  
      if (response.ok) {
        alert('Thank you for reaching out! Your message has been submitted.');
        setFormData({ email: '', phone: '', description: '' });
      } else {
        const errorData = await response.json();
        console.error('Error response:', errorData); // error response
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error); // Log the error
      alert('An error occurred. Please try again.');
    }
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

//https://script.google.com/macros/s/AKfycbz8fyCzlS795xKSbZNCnP-2oZtBLIb56FBXTWr-NK-AzclPTV16KozsaPThM-I--K_w_w/exec