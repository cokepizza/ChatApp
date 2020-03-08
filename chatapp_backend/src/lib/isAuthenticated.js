import passport from 'passport';

const isAuthenticated = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if(err || info) {
            console.dir(err || info);
            return res.status(400).send(err || info);
        }

        return req.login(user, { session: false }, err => {
            if(err) {
                console.dir(err);
                return res.status(400).send(err);
            }

            next();
        });

    })(req, res, next);
};

export default isAuthenticated;