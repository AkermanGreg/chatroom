// http is provided by node //
var http = require('http');

//express is a framework for node.  We are choosing to require express here.
//Think of express as a function-object. It's provided by the code express library.
var express = require('express');

//here we are executing the global function that is part of the express framework.
var app = express();

// server is variable name. it's going to use http node module, attach .Server, and pass in express framework
//This connects express with server
var server = http.Server(app);

//bring in socket and have it listen to server
//This connects socket with the server
//name this "server" which creates an HTTP server using the "app" express framework
var io = require('socket.io')(server);



//sockets are event listenders and handlers for the server side
//socket io library hooked up to server now
////////////// ROUTING /////////////////////////
app.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html');
});

app.post('/message', function(request, response){
  response.end("create a post");
});

////////////// SOCKET.IO ///////////////////
io.on('connection', function(socket) {
  console.log('socket connected');

  socket.on('message', function(m){
    ///chatroom is the name, m is the message///////
    console.log("message: " + m);
    io.emit('chatroom', m);
  });

});

///////////////// PORT ////////////////////
server.listen(7000);

console.log("Server is running");






// var http = require('http');

// var server = http.createServer(
//     function(request, response){
//       response.end('my first server');

//     }
//   );

// server.listen(9999);