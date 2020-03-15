import express from 'express';
import chat from './chat';
import auth from './auth';
import image from './image';

const router = express.Router();

router.use('/chat', chat);
router.use('/auth', auth);
router.use('/image', image);

export default router;