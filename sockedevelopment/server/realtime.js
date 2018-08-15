module.exports = (io) =>{
    
    io.on('connection', function(socket){
        console.log('a user connected');
        socketObject = socket;
        socket.emit('CONNECTION_NOTIFICATION',{"data" : "connected"});
        
        socket.on('USER_MESSAGE',function(data){
        console.log("USER_MESSAGE ",data)
        });
        
        socket.on('disconnect', function(){
        console.log('user disconnected');
        });
    });
}