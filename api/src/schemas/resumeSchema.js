import mongoose from 'mongoose';

const ResumeSchema = new mongoose.Schema({
  fullname: {
    type: String,
    default: '',
    trim: true,
  },
  email: {
    type: String,
    default: '',
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
    trim: true,
  },
  message: {
    type: String,
    default: '',
    trim: true,
  },
  resume: {
    type: String,
    required: [true, 'Resume file is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Resume = mongoose.model('Resume', ResumeSchema);

export default Resume;
