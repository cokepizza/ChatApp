import SocketIo from 'socket.io';
import socketIoRedis from 'socket.io-redis';

export default (server, app) => {
    const io = SocketIo(server);

    io.adapter(socketIoRedis({ host: process.env.REDISHOST, port: process.env.REDISPORT }));
    app.set('io', io);
    
    const chat = io.of('/chat');

    chat.on('connect', socket => {
        console.dir('-------------socket(chat)--------------');
        

        socket.on('disconnect', () => {
            console.dir('-------------socketDis(chat)--------------');

        });
    });

}