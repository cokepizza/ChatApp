export const createMessage = (req, res, next) => {
    const { message } = req.body;
    const io = req.app.get('io');

    console.log(`This process is pid ${process.pid}`);
    io.of('/chat').emit('message', {
        type: 'change',
        message,
    });
    
    // console.dir(message);
    res.status(200).end();
};