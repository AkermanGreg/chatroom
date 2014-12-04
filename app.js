var http = require('http'),
    express = require('express'),
    app = express();

var server = http.Server(app);

var io = require('socket.io')(server);

//sockets are event listenders and handlers for the server side
//socket io library hooked up to server now

app.get('/', function(request, response){
  console.log(__dirname);
response.sendFile(__dirname + '/index.html')
});

server.listen(7000);

io.on('connection', function (){
  console.log('socket connected');
});

console.log("Server is logging");

// var http = require('http');

// var server = http.createServer(
//     function(request, response){
//       response.end('my first server');

//     }
//   );

// server.listen(9999);
