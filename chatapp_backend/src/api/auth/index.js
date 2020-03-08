import express from 'express';
import * as authCtrl from './authCtrl';
import isAuthenticated from '../../lib/isAuthenticated';

const auth = express.Router();

auth.get('/check', isAuthenticated, authCtrl.check);
auth.post('/signIn', authCtrl.signIn);
auth.post('/signUp', authCtrl.signUp);
auth.post('/signOut', authCtrl.signOut);

export default auth;