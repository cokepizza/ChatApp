import db from '../../models/';

const { User } = db;

export const duplicateCheck = async (req, res, next) => {
    const { username } = req.params;
    const exist = await User.findOne({ where: { username } });
    
    if(exist) {
        console.dir('duplicateCheck Failed');
        return res.status(409).send({
            error: '중복된 이메일입니다',
        });
    }

    return res.status(202).end();
}