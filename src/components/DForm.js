import React, { useState } from 'react';
import axios from 'axios';
import './DForm.css';

function DForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    specialization: '',
    experience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/applications', formData);
      if (response.status === 201) {
        alert('Application submitted successfully!');
      } else {
        alert('Failed to submit application!');
      }
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      alert('There was an error submitting the form!');
    }
  };

  return (
    <div className='main'>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Doctor Application Form</h1>
          <div className="formgroup">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formgroup">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formgroup">
            <label htmlFor="specialization">Specialization:</label>
            <input
              type="text"
              id="specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formgroup">
            <label htmlFor="experience">Years of Experience:</label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </div>
          <button className='DB' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default DForm;
