import express from 'express';
import * as storeCtrl from './storeCtrl';

const store = express.Router();

store.get('/', storeCtrl.purchase);

export default store;