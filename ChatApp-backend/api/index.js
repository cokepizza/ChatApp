import express from 'express';
import msg from './msg';

const router = express.Router();
router.use('/msg', msg);

export default router;