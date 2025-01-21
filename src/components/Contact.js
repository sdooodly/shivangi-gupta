import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out!');
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out via email at <a href="mailto:shivangi@example.com">shivangi@example.com</a>.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Email (optional):
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </label>
        <label>
          Description of Issue (optional):
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your issue or query"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;