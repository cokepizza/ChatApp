import db from '../../models';

const { AuthImage, User } = db;

export const createAuthImage = async (req, res, next) => {
    const { authInform } = req.body;
    const { authImages } = req.files;
    const parsedInform = JSON.parse(authInform);
    const { username, imageOrder } = parsedInform;
    
    const user = await User.findOne({ where: { username } });

    const promiseArr = [];
    imageOrder.forEach((order, index) => {
        const { key, size } = authImages[index];
        promiseArr.push(AuthImage.create({
            imagename: key,
            order,
            size,
            userId: user.id,
        }));
    });

    await Promise.all(promiseArr);
    res.status(200).end();
};