import React from 'react';
import './ContactUs.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
            </div>
            <div className="contact-content">
                <div className="contact-info">
                    
                    <div className="contact-details">
                        <div className="contact-item">
                            <i className="fas "></i>
                            <div>
                                <h3>Address</h3>
                                <p><FaMapMarkerAlt />  Oxycare hospital, Mahakali Caves Road, Andheri (E), Mumbai-400093</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="fas "></i>
                            <div>
                                <h3>Phone</h3>
                                <p><FaPhone />  +123 456 7890</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="fas "></i>
                            <div>
                                <h3>Email</h3>
                                <p><FaEnvelope />  oxycareHos@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-map">
                    
                    <iframe
                        title="OxyCare Hospital Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509368!2d144.9537363155043!3d-37.816279742021695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727f1d3c2d4c0a!2s123%20Health%20St%2C%20Wellville%2C%20Healthland!5e0!3m2!1sen!2sau!4v1611815779921!5m2!1sen!2sau"
                        width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
            <div className="contact-feedback">
                <h4>We Value Your Feedback</h4>
                <textarea
                    
                    
                    placeholder="Please leave your feedback here..."
                    required>
                </textarea>
                <button type="submit">Submit Feedback</button>
            </div>
        </div>
    );
};

export default Contact;
