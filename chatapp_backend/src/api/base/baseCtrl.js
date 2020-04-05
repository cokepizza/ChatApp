import db from '../../models/';

const { User } = db;

export const duplicateCheck = (req, res, next) => {
    
    return res.send(202).end();
}