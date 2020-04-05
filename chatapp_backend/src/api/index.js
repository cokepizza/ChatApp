import express from 'express';
import auth from './auth';
import base from './base';
import image from './image';
import verify from './verify';

import chat from './chat';

const router = express.Router();

router.use('/auth', auth);
router.use('/base', base);
router.use('/image', image);
router.use('/verify', verify);
router.use('/chat', chat);

export default router;