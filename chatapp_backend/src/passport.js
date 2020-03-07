import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';


const passportConfig = () => {
    // passport.use(new LocalStrategy({
    //     usernameField: 'username',
    //     passwordField: 'password',
    //     session: false,
    //     passReqToCallback: true,
    // }, (req, username, password, done) => {

    // }));

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
