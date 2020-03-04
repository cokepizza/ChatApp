import SocketIo from 'socket.io';

export default (server, app, sessionMiddleware) => {
    const io = SocketIo(server);

    app.set('io', io);
    
    const chat = io.of('/chat');

    chat.on('connect', socket => {
        console.dir('-------------socket(chat)--------------');
        

        socket.on('disconnect', () => {
            console.dir('-------------socketDis(chat)--------------');

        });
    });

}