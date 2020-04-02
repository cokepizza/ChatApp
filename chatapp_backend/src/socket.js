import SocketIo from 'socket.io';
import socketIoRedis from 'socket.io-redis';
import redis from 'redis';
import jwt from 'jsonwebtoken';

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
        console.dir('ws connected // processid : ' + process.pid);

        socket.on('disconnect', () => {
            console.dir('ws disconnected // processid : ' + process.pid);
            console.dir('-------------socketDis(chat)--------------');

        });
    });

    const verify = io.of('/verify');

    verify.on('connect', socket => {
        console.dir('-------------socket(verify)--------------');
        const token = socket.handshake.query['token'];
        let timer;

        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if(error) {
                console.log('유효하지 않은 토큰');
                return;
            }

            const { exp } =  decoded;
            const timeNow = parseInt(new Date().getTime() / 1000);
            let timeLimit = exp - timeNow;
                
            const timeReducer = () => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    socket.emit('message', {
                        type: 'initialize',
                        timeLimit,
                    });
                    
                    timeLimit -= 1;
                    if(timeLimit >= 0) {
                        timeReducer();
                    } else {
                        clearTimeout(timer);
                        socket.disconnect();
                    }
                }, 1000);
            }
    
            if(timeLimit >= 0) {
                timeReducer();
            } else {
                socket.disconnect();
            }    
        });
        
        socket.on('disconnect', () => {
            console.dir('-------------socketDis(verify)--------------');
            clearTimeout(timer);
        });
    });

}