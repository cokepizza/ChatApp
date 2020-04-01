import express from 'express';
import chat from './chat';
import auth from './auth';
import image from './image';
import verify from './verify';

const router = express.Router();

router.use('/chat', chat);
router.use('/auth', auth);
router.use('/image', image);
router.use('/verify', verify);

export default router;