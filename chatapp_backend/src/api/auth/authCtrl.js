import passport from 'passport';
import db from '../../models/';
import jwt from 'jsonwebtoken';

const { User } = db;

export const check = (req, res, next) => {
    res.status(200).send({
        user: req.user,
        expiryDate: req.user.exp,
    });
};

export const signIn = (req, res, next) => {
    const { username, password } = req.body;
    console.dir(username);
    console.dir(password);

    passport.authenticate('local', { session: false }, (err, user, info) => {
        if(err || info) {
            console.dir(err || info);
            return res.status(400).send(err || info);
        };

        //  req.login()은 req.user에 user정보를 담아주는 역할
        return req.login(user, { session: false }, err => {
            if(err) {
                console.dir(err);
                return res.status(400).send(err);
            }
            
            // const tokenTimeLimit = Number(60 * 60 * 12 * 1 * 1000);
            const tokenTimeLimit = Number(10);
            const expiryDate = new Date().getTime() + tokenTimeLimit;
            const token = jwt.sign(user, process.env.JWT_SECRET, {
                issuer: 'cokepizza',
                expiresIn: tokenTimeLimit,
            });

            return res.status(200).send({
                user,
                token,
                expiryDate,
            });
        });
    })(req, res, next);
};

export const signUp = async (req, res, next) => {
    const { username, password, nickname, gender } = req.body;

    try {
        const exist = await User.findOne({ where: { username } });
        if(exist) {
            console.dir('Registered user');
            return res.status(409).send('Registered user');
        }
        
        const user = await User.build({
            username,
            nickname,
            gender,
        });

        await user.setPassword(password);
        await user.save();

        const serializedUser = user.serialize();
        return req.login(serializedUser, { session: false }, err => {
            if(err) {
                console.dir(err);
                return res.status(400).send(err);
            }
            
            const tokenTimeLimit = Number(60 * 60 * 12 * 1 * 1000);
            const expiryDate = new Date().getTime() + tokenTimeLimit;
            const token = jwt.sign(serializedUser, process.env.JWT_SECRET, {
                issuer: 'cokepizza',
                expiresIn: tokenTimeLimit / 1000,
            });

            return res.status(200).send({
                user: serializedUser,
                token,
                expiryDate,
            });
        });
        
    } catch(e) {
        console.dir(e);
        return res.status(400).send(e);
    };

    
};

export const signOut = (req, res, next) => {
    
    res.status(200).end();
};