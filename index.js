import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import applicationRoutes from './routes/applicationRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import userRoutes from './routes/userRoute.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://Rahi:8Im2amSFEhAfKywK@cluster0.im4qadt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

import appointmentRoutes from './models/appointmentModel.js';

app.use('/appoint', appointmentRoutes);

app.use('/api', applicationRoutes);

app.use('/api/contact', contactRoutes);

app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
