import express from 'express';
import * as imageCtrl from './imageCtrl';

const image = express.Router();

image.post('/auth', imageCtrl.createAuthImage);

export default image;