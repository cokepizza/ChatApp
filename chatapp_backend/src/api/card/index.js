import express from 'express';
import * as cardCtrl from './cardCtrl';

const card = express.Router();

card.get('/', cardCtrl.read);

export default card;