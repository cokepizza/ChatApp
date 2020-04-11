import db from '../../models';

const { User } = db;

export const duplicateCheck = async (req, res, next) => {
    const { nickname } = req.params;
    if(nickname === '이승진') {
        return res.status(409).send({
            error: '중복된 닉네임입니다',
        });
    }

    const exist = await User.findOne({ where: { nickname } });
    
    if(exist) {
        console.dir('duplicateCheck Failed');
        return res.status(409).send({
            error: '중복된 닉네임입니다',
        });
    }

    return res.status(202).end();
}