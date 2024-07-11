import React, { useState } from 'react';
import axios from 'axios';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    appointmentType: '',
    consent: false
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/book-appointment', formData)
      .then(response => {
        setSuccess('Appointment booked successfully');
        setError('');
        setFormData({
          firstName: '',
          lastName: '',
          dateOfBirth: '',
          email: '',
          phoneNumber: '',
          appointmentType: '',
          consent: false,
        });
      })
      .catch(error => {
        setError('There was an error booking the appointment!');
        console.error('Appointment booking error:', error);
      });
  };

  return (
    <div className="appointment-container">
      <div className="appointment-form">
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Appointment Type</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="appointmentType"
                  value="Initial consultation visit"
                  checked={formData.appointmentType === 'Initial consultation visit'}
                  onChange={handleChange}
                  required
                />
                Initial consultation visit
              </label>
              <label>
                <input
                  type="radio"
                  name="appointmentType"
                  value="Follow-up visit"
                  checked={formData.appointmentType === 'Follow-up visit'}
                  onChange={handleChange}
                  required
                />
                Follow-up visit
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              I agree to the TeleMedicine Terms & Conditions, Telehealth Consent, Privacy Policy, and Notice of Privacy Practices.
            </label>
          </div>
          <button type="submit">Book Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
