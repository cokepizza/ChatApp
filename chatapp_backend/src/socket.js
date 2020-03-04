import SocketIo from 'socket.io';

export default (server, app, sessionMiddleware) => {
    const io = SocketIo(server);

    app.set('io', io);

    io.use((socket, next) => {
        sessionMiddleware(socket.request, socket.request.res, next);
    });

    const chat = io.of('/chat');

    chat.on('connect', socket => {
        console.dir('-------------socket(chat)--------------');
        console.dir(socket.request.sessionID);

        console.dir(socket.request.session);
        socket.request.session.username = 'jhoho';
        socket.request.session.save();
        console.dir(socket.request.session);
        
        socket.on('disconnect', () => {
            console.dir('-------------socketDis(chat)--------------');
            console.dir(socket.request.sessionID);
        });
    });

}