import SocketIo from 'socket.io';
import socketIoRedis from 'socket.io-redis';
import redis from 'redis';

const client = redis.createClient();

export default (server, app) => {
    const io = SocketIo(server);

    io.adapter(socketIoRedis({ host: process.env.REDISHOST, port: process.env.REDISPORT }));
    app.set('io', io);
    
    const chat = io.of('/chat');

    chat.on('connect', socket => {
        console.dir('-------------socket(chat)--------------');        
        //  인증 후 username에 맞는 방 list 불러오기
        // const list = await client.lrange(username, 0, -1);
        
        socket.on('disconnect', () => {
            console.dir('-------------socketDis(chat)--------------');

        });
    });

}