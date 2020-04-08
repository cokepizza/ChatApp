import db from '../../models/';

const { User } = db;

export const read = async (req, res, next) => {
    console.dir(req.user);
    const username = '';
    //  dailyPick, dailySwipe 구분
    //  기본적인 유저 정보는 TOKEN단에서 처리
    const { gender, score } = await User.findOne({ username });

    const requiredGender = 1 - gender;
    try {
        const selected = await User.findOne({ gender: requiredGender });

    } catch(e) {

    }

    // User.findone({ });
    return res.status(202).end();
}