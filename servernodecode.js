
var app = require('express')();			//express
var http = require('http').Server(app);				
var io = require('socket.io')(http);
var NumberOfPlayers=0;
var cars; //car entities?
var player1loc={100,500};   //id,x,y
var player2loc={800,500};  
var room = io.sockets.adapter.rooms['my_room'];
room.length;   // Rooms became actual types with a .length property in 1.4
 function init()
 {
 }
 

 
 app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('Player connected');
  NumberOfPlayers++;
  io.write('ID: '+NumberOfPlayers);
});
io.on('collision', function(data){}

function assignPlayerDefault()
{
}

io.on('updated', function (data) //the update serverside function, data contains player x,y values
{
	 data={player1loc,player2loc};
	 io.broadcast.emit('updated', data);
}

function check_collision()
{
	
}
http.listen(3000, function(){				//listens on port 3000
  console.log('listening on *:3000');
  
  
});