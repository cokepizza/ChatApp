import express from 'express';

import * as verifyCtrl from './verifyCtrl';

const verify = express.Router();

verify.post('/', verifyCtrl.createSMS);

export default verify;