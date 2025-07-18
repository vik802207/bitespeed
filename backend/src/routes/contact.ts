import express from 'express';
import { identifyUser } from '../controllers/contactController';

const router = express.Router();

router.post('/identify', identifyUser);

export default router;
