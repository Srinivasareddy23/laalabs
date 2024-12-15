import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error('Error authenticating with email service:', error);
  } else {
    console.log('Email transporter is configured successfully.');
  }
});

export const sendContactForm = async (req, res) => {
  const { firstName, lastName, email, phone, businessNeeds } = req.body;

  if (!firstName || !lastName || !email || !phone || !businessNeeds) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    html: `
      <h1>Contact Form Submission</h1>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Business Needs:</strong> ${businessNeeds}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: 'Message sent successfully!' });
  } catch (error) {
    console.log('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
};
