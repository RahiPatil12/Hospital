import Appointment, { find, findByIdAndUpdate, findByIdAndDelete } from '../models/appointmentModel';

// Create a new appointment
export async function createAppointment(req, res) {
    try {
        const newAppointment = new Appointment(req.body);
        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Get all appointments
export async function getAllAppointments(req, res) {
    try {
        const appointments = await find();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update an appointment by ID
export async function updateAppointment(req, res) {
    try {
        const appointment = await findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        res.status(200).json(appointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Delete an appointment by ID
export async function deleteAppointment(req, res) {
    try {
        const appointment = await findByIdAndDelete(req.params.id);
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createAppointment,
    getAllAppointments,
    updateAppointment,
    deleteAppointment
  };
