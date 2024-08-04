import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const applicationSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`,
    },
  },
  specialization: {
    type: String,
    required: true,
    trim: true,
  },
  experience: {
    type: Number,
    required: true,
    min: 0,
  },
}, {
  timestamps: true,
});

export default model('Application', applicationSchema);
