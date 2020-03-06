import express from 'express';
import * as authCtrl from './authCtrl';

const auth = express.Router();

auth.get('/check', authCtrl.check);
auth.post('/signIn', authCtrl.signIn);
auth.post('/signUp', authCtrl.signUp);
auth.post('/signOut', authCtrl.signOut);

export default auth;