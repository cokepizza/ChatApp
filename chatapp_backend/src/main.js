import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import path from 'path';

import api from './api';
import socket from './socket';
import passportConfig from './passport';
import sequelizeConfig from './models';

dotenv.config();

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use("/tableEditor", express.static(__dirname + '../../../spa/TableEditor/build'));
app.use("/layoutEditor", express.static(__dirname + '../../../spa/LayoutEditor_Boilerplate/layout_frontend/build'));
app.use(express.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(passport.initialize());

app.use('/api', api);
app.set('port', process.env.PORT || 4000);

passportConfig();
sequelizeConfig.sequelize.sync();

app.get("/tableEditor", (req, res) => {
    res.sendFile(path.join(__dirname, '../../../spa/TableEditor/build', 'index.html'));
});

app.get("/layoutEditor", (req, res) => {
    res.sendFile(path.join(__dirname, '../../../spa/LayoutEditor_Boilerplate/layout_frontend/build', 'index.html'));
});

const server = app.listen(app.get('port'), () => {
    console.dir(`Port ${app.get('port')} => listening`);
});

socket(server, app);