import { useState } from 'react';
import {  FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import './/styles/ContactForm.css'

const Contact= () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // EmailJS configuration
  const SERVICE_ID = 'service_zld9fwq';
  const TEMPLATE_ID = 'template_f9zqcgd';
  const PUBLIC_KEY = '6RUXOyGH9Oe4r9V0D';

  const validateForm = () => {
    const newErrors = {};
    if (!formData.from_name.trim()) newErrors.from_name = 'Name is required';
    if (!formData.from_email.match(/^\S+@\S+\.\S+$/)) newErrors.from_email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        PUBLIC_KEY,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message
        }
      );
      
      setIsSubmitted(true);
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <div className="contact">
      <div className="contact-container">
        {isSubmitted ? (
          <div className="success-message">
            <h3>🎉 Message Sent Successfully!</h3>
            <p>We'll get back to you within 24 hours.</p>
            <Link to="/">
              <button className="scroll-btn">Go To Home Page</button>
            </Link>

          </div>
        ) : (
          <>
            <div className="social-section">
            <h4 className="social-heading">Get in Touch Below</h4>
            <p className="contact-subtext">
              Have a question or want to work together? Fill out the form below.
            </p>
            <div className="social-links">
              <a href="https://twitter.com/kalyan933" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/sreeramulakalyan/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/kalyan_sreeramula" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                />
                <label>Your Name</label>
                {errors.from_name && <span className="error">{errors.from_name}</span>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                />
                <label>Email Address</label>
                {errors.from_email && <span className="error">{errors.from_email}</span>}
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <label>Your Message</label>
                {errors.message && <span className="error">{errors.message}</span>}
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact; 