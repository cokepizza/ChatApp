
export const createAuthImage = (req, res, next) => {
    
    console.dir(req.files);
    console.dir(req.body);
    res.status(200).end();
};