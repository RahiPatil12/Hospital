require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import route modules
const authRoutes = require('./routes/authRoutes'); 
const applicationRoutes = require('./routes/applicationRoutes');
const signRoutes = require('./routes/signRoutes'); 
const contactRoutes=require('./routes/contactRoutes');
// const appointmentRoutes = require ('./routes/appointmentRoutes');


const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


// MongoDB connection
mongoose.connect('mongodb+srv://Rahi:8Im2amSFEhAfKywK@cluster0.im4qadt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', 
    { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Appointment schema and model
const appointmentRoutes = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  email: String,
  phoneNumber: String,
  appointmentType: String
});

const Appointment = mongoose.model('Appointment', appointmentRoutes);

// Appointment routes
// Create a new appointment
app.post('/appoint', async (req, res) => {
  const appointment = new Appointment(req.body);
  try {
    const newAppointment = await appointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    console.error('Error creating appointment:', err);
    res.status(400).json({ message: 'Error creating appointment' });
  }
});

// Get all appointments
app.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    console.error('Error fetching appointments:', err);
    res.status(500).json({ message: 'Error fetching appointments' });
  }
});

// Update an appointment by ID
app.put('/appointments/:id', async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAppointment) return res.status(404).json({ message: 'Appointment not found' });
    res.json(updatedAppointment);
  } catch (err) {
    console.error('Error updating appointment:', err);
    res.status(400).json({ message: 'Error updating appointment' });
  }
});

// Delete an appointment by ID
app.delete('/appointments/:id', async (req, res) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!deletedAppointment) return res.status(404).json({ message: 'Appointment not found' });
    res.json({ message: 'Appointment deleted' });
  } catch (err) {
    console.error('Error deleting appointment:', err);
    res.status(500).json({ message: 'Error deleting appointment' });
  }
});

// authentication routes
app.use('/api/register', authRoutes); 

// application routes
app.use('/api', applicationRoutes); 

//sign-in routes 
app.use('/api/signin', signRoutes); 

//contact-us routes
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
  console.log('Server running on port', {PORT});
});
