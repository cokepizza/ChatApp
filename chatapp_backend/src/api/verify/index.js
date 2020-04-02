import express from 'express';

import * as verifyCtrl from './verifyCtrl';

const verify = express.Router();

verify.post('/', verifyCtrl.createSMS);
verify.post('/token', verifyCtrl.verifyToken);

export default verify;