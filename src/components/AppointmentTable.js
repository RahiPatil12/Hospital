import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AppointmentTable.css';

const AppointmentTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => { 
    fetchAppointments();
  }, []);

  const fetchAppointments = () => {
    axios.get('http://localhost:5000/api/appointments') // Full URL to the backend API
      .then(response => {
        setAppointments(response.data);
        setError(null);
      })
      .catch(error => {
        console.error('There was an error fetching the appointments!', error);
        setError('There was an error fetching the appointments!');
      });
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
  };

  const handleSaveClick = (index) => {
    const updatedAppointment = appointments[index];
    axios.put(`http://localhost:5000/api/appointments/${updatedAppointment._id}`, updatedAppointment)
      .then(response => {
        setAppointments(prevAppointments =>
          prevAppointments.map((appointment, i) => i === index ? response.data : appointment)
        );
        setEditIndex(null);
        setError(null);
      })
      .catch(error => {
        console.error('There was an error updating the appointment!', error);
        setError('There was an error updating the appointment!');
      });
  };

  const handleDeleteClick = (index) => {
    const appointmentId = appointments[index]._id;
    axios.delete(`http://localhost:5000/api/appointments/${appointmentId}`)
      .then(() => {
        setAppointments(prevAppointments =>
          prevAppointments.filter((_, i) => i !== index)
        );
        setError(null);
      })
      .catch(error => {
        console.error('There was an error deleting the appointment!', error);
        setError('There was an error deleting the appointment!');
      });
  };

  const handleChange = (index, field, value) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index][field] = value;
    setAppointments(updatedAppointments);
  };

  return (
    <>
      {error && <div className="error">{error}</div>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Appointment Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={appointment._id}>
              <td>
                {editIndex === index ? (
                  <>
                    <input 
                      type="text" 
                      value={appointment.firstName} 
                      onChange={(e) => handleChange(index, 'firstName', e.target.value)} 
                    />
                    <input 
                      type="text" 
                      value={appointment.lastName} 
                      onChange={(e) => handleChange(index, 'lastName', e.target.value)} 
                    />
                  </>
                ) : (
                  `${appointment.firstName} ${appointment.lastName}`
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input 
                    type="date" 
                    value={appointment.dateOfBirth} 
                    onChange={(e) => handleChange(index, 'dateOfBirth', e.target.value)} 
                  />
                ) : (
                  appointment.dateOfBirth
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input 
                    type="email" 
                    value={appointment.email} 
                    onChange={(e) => handleChange(index, 'email', e.target.value)} 
                  />
                ) : (
                  appointment.email
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input 
                    type="text" 
                    value={appointment.phoneNumber} 
                    onChange={(e) => handleChange(index, 'phoneNumber', e.target.value)} 
                  />
                ) : (
                  appointment.phoneNumber
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input 
                    type="text" 
                    value={appointment.appointmentType} 
                    onChange={(e) => handleChange(index, 'appointmentType', e.target.value)} 
                  />
                ) : (
                  appointment.appointmentType
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <>
                    <button onClick={() => handleSaveClick(index)}>Save</button>
                    <button onClick={() => setEditIndex(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditClick(index)}>Edit</button>
                    <button onClick={() => handleDeleteClick(index)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AppointmentTable;
