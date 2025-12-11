import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import './config/database.js';
import logger from './config/logger.js';
import verificationRoutes from './routes/verificationRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    service: 'Verification API',
    version: '1.0.0',
    status: 'running',
    time: new Date().toISOString()
  });
});

app.use('/api/verifications', verificationRoutes);

// Global error handler
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Verification API BERHASIL JALAN → http://localhost:${PORT}`);
});
