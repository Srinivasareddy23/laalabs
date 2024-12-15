import Resume from '../../schemas/resumeSchema.js';

export const submitResume = async (req, res) => {
  try {
    const { fullname, email, message } = req.body;
    const resumePath = req.file?.path;

    if (!resumePath) {
      return res.status(400).json({ error: 'Resume file is required.' });
    }

    const existingRecord = await Resume.findOne({
      $or: [{ email }, { resume: resumePath }],
    });

    if (existingRecord) {
      if (existingRecord.email === email) {
        return res
          .status(400)
          .json({ message: 'You have already submitted your resume.' });
      }
      if (existingRecord.resume === resumePath) {
        return res
          .status(400)
          .json({ message: 'This resume file has already been submitted.' });
      }
    }

    const newResume = new Resume({
      fullname,
      email,
      message,
      resume: resumePath,
    });

    await newResume.save();

    res.status(201).json({
      message: 'Resume submitted successfully!',
      resumeId: newResume._id,
    });
  } catch (error) {
    console.error('Error submitting resume:', error);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
};
