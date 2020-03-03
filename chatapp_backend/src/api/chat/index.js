import express from 'express';
import * as chatCtrl from './chatCtrl';

const chat = express.Router();

chat.post('/', chatCtrl.createMessage);

export default chat;