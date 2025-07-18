import express from 'express';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact';
import { sequelize } from './db';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/', contactRoutes);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // You can use { force: true } if first time

    console.log('Connected to DB');

    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  } catch (err) {
    console.error('Failed to connect to DB', err);
  }
};

start();
