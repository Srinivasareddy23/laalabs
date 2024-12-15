import express from 'express';
import multer from 'multer';
import { submitResume } from '../../controllers/resume/resumeController.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

router.post('/submit-resume', upload.single('resume'), submitResume);

export default router;
