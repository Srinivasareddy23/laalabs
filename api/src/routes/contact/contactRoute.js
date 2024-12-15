import express from 'express';
import { sendContactForm } from '../../controllers/contact/contactController.js';

const router = express.Router();

router.post('/send-email', sendContactForm);

export default router;
