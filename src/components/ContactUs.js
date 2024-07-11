import React, { useState } from 'react';
import './ContactUs.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFax, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        attachment: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="contact-container">
            <div className="contact-form-section">
                <h2 className='heading'>Contact Us</h2>
                <p className='p'>Reach out to us for any inquiry</p>
                <form onSubmit={handleSubmit} className="contact-form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone number (optional)"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Submit</button>
                </form>
            </div>
            <div className="contact-info-section">
                <div className="contact-details">
                    <div className="contact-detail">
                        <FaMapMarkerAlt size={25} color='red' />
                        <p>Location: Oxycare hospital, Mahakali Caves Road, Andheri (E), Mumbai-400093</p>
                    </div>
                    <div className="contact-detail">
                        <FaPhone size={25} color='blue' />
                        <p>Phone: +1-234-567-8900</p>
                    </div>
                    <div className="contact-detail">
                        <FaEnvelope size={25} color='purple' />
                        <p>Email: oxycareHos@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <FaFax size={25} />
                        <p>Fax: +1-234-567-8901</p>
                    </div>
                </div>

                <div className="social-media-links">
                    <a href="https://facebook.com"><FaFacebook /></a>
                    <a href="https://twitter.com"><FaTwitter /></a>
                    <a href="https://linkedin.com"><FaLinkedin /></a>
                    <a href="https://instagram.com"><FaInstagram /></a>
                </div>
                <div className="office-hours">
                    <p>Business Hours: Mon-Fri 9:00 AM - 6:00 PM</p>
                    <p>Holiday Hours: Closed on public holidays</p>
                </div>
                <div className="support-info">
                    <h3>Support Information</h3>
                    <p>Technical Support: +1-234-567-8920</p>
                    <p>User Guides and FAQs: <a href="/faq">Click here</a></p>
                </div>
                <div className="feedback-form">
                    <h3>Feedback and Suggestions</h3>
                    <form>
                        <textarea
                            name="feedback"
                            placeholder="Your Feedback"
                            value={formData.feedback}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className='contact-button'>Submit Feedback</button>
                    </form>
                </div>
                <div className="accessibility-info">
                    <h3>Accessibility Information</h3>
                    <p>If you need special assistance, please contact us at +1-234-567-8930</p>
                </div>
                <div className="privacy-statement">
                    <h3>Privacy Statement</h3>
                    <p>Read our <a href="/privacy-policy">Privacy Policy</a></p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
