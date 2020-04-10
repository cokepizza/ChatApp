import express from 'express';

import auth from './auth';
import base from './base';
import image from './image';
import verify from './verify';

import card from './card';
import chat from './chat';
import store from './store';

const router = express.Router();

router.use('/auth', auth);
router.use('/base', base);
router.use('/image', image);
router.use('/verify', verify);

router.use('/card', card);
router.use('/chat', chat);
router.use('/store', store);

export default router;