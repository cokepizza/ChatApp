import express from 'express';
import * as baseCtrl from './baseCtrl';

const base = express.Router();

base.get('/', baseCtrl.duplicateCheck);