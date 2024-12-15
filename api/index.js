import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import contactRoutes from './src/routes/contact/contactRoute.js';
import resumeRoutes from './src/routes/resume/resumeRoute.js'
import connectDB from './src/config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000', methods: ['POST'] }));

connectDB();

app.use('/api', contactRoutes);

app.use('/api',resumeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
