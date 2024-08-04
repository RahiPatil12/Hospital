import { Schema, model } from 'mongoose';

// Define the schema
const ContactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default model('Contact', ContactSchema);
