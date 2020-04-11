import express from 'express';
import * as profileCtrl from './profileCtrl';

const profile = express.Router();

profile.get('/:nickname', profileCtrl.duplicateCheck);

export default profile;