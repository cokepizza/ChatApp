import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';

import db from './models/index';
const { User } = db;

const passportConfig = () => {
    //  session: false 상태에서 serializeUser, deserializeUser는 필요하지 않은듯. 

    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        session: false,
        passReqToCallback: true,
    }, async (req, username, password, done) => {
        if(!username || !password) {
            const message = {};
            const mention = 'Required field';

            if(!username) {
                message = {
                    ...message,
                    username: mention,
                }
            }
            if(!password) {
                message = {
                    ...message,
                    password: mention,
                }
            }

            return done(null, false, message);
        }

        try {
            const user = await User.findOne({ where: { username } });
            if(!user) {
                return done(null, false, { username: 'Unknown user' });
            }
    
            const pwCheck = await user.checkPassword(password);
    
            if(!pwCheck) {
                return done(null, false, { username: 'Invalid password' });
            }
    
            return done(null, user.serialize());
        } catch(e) {
            return done(e);
        }
    }));

    passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
    }, (payload, done) => {
        console.dir('passport-jwt~');
        console.dir(payload);
        return done(null, payload);
    }));
}

export default passportConfig;
