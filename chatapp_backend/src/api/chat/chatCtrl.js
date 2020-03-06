export const createMessage = (req, res, next) => {
    const { message } = req.body;
    const io = req.app.get('io');

    io.of('/chat').emit('message', {
        type: 'change',
        message,
    });
    
    // console.dir(message);
    res.status(200).end();
};