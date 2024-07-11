const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    appointmentType: { type: String, required: true },
    consent: { type: Boolean, required: true }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
