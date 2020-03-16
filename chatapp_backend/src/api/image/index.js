import express from 'express';

import * as imageCtrl from './imageCtrl';
import { upload } from '../../s3';

const image = express.Router();

image.post('/auth', upload.fields([{ name: 'authImages' }]), imageCtrl.createAuthImage);

export default image;