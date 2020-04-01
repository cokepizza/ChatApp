import db from '../../models';

const { AuthImage } = db;

export const createAuthImage = async (req, res, next) => {
    const { authInform } = req.body;
    const { authImages } = req.files;
    const parsedInform = JSON.parse(authInform);
    const { userId, imageOrder } = parsedInform;
    
    const promiseArr = [];

    imageOrder.forEach((order, index) => {
        const { key, size } = authImages[index];
        
        promiseArr.push(AuthImage.create({
            imagename: key,
            order,
            size,
            userId,
        }));
    });

    await Promise.all(promiseArr);

    return res.status(200).end();
};