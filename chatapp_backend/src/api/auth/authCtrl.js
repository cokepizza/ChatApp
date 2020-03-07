import passport from 'passport';

export const check = (req, res, next) => {

    res.status(200).end();
};

export const signIn = (req, res, next) => {
    const { username, password } = req.body;
    console.dir(username);
    console.dir(password);
    
    // passport.authenticate('jwt', { session: false }, (err, payload) => {
    //     console.dir(req);
    //     console.dir('hahahah');

    //     res.status(200).send({
    //         username,
    //         password,
    //     });
    // });

    res.status(200).end();
};

export const signUp = (req, res, next) => {

    res.status(200).end();
};

export const signOut = (req, res, next) => {
    
    res.status(200).end();
};