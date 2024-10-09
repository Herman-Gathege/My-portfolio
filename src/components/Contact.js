// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert('Message sent!');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };


  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
      <button type="submit">Send</button>
    </form>
    </section>
  );
};

export default Contact;
