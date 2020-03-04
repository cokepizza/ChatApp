import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';

import api from './api';
import socket from './socket';

dotenv.config();

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use('/api', api);
app.set('port', process.env.PORT || 4000);

const server = app.listen(app.get('port'), () => {
    console.dir(`Port ${app.get('port')} => listening`);
});

socket(server, app);