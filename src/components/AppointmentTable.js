// src/components/AppointmentTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentTable = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('/api/appointments')
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the appointments!', error);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Appointment Type</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <tr key={index}>
            <td>{appointment.firstName} {appointment.lastName}</td>
            <td>{appointment.dateOfBirth}</td>
            <td>{appointment.email}</td>
            <td>{appointment.phoneNumber}</td>
            <td>{appointment.appointmentType}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentTable;
