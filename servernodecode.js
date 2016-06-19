
var app = require('Index.html')();			//app domain?
var http = require('http').Server(app);				
var io = require('socket.io')(http);
var NumberOfPlayers=0;
var cars; //car entities?
var player1loc=[100,500,0];   //x,y,rotation
var player2loc=[800,500,0];  //x,y,rotation

var room = io.sockets.adapter.rooms['my_room'];
room.length;   // Rooms became actual types with a .length property in 1.4
 function init()
 {
 }
 

 
 app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.sockets.on('connection', function(socket){
  console.log('Player connected');
  NumberOfPlayers++;
  io.write('ID: '+NumberOfPlayers);

        socket.emit('message', 'You are connected as player' +NumberOfPlayers);  

});
io.sockets.on('collision', function(data){});	//clientside for now

io.sockets.on('disconnect', function(data)
{
	NumberOfPlayers--;
});

function assignPlayerDefault()
{
}

io.sockets.on('updated', function (data) //the update serverside function, data contains player x,y values
{
	 data={player1loc,player2loc};
	 io.broadcast.emit('updated', data);
});

io.sockets.on('gameReset', function (data)
{
	//reset the current x and y vars for both
});

function check_collision() //lolno
{
	
}


http.listen(3000, function(){				//listens on port 3000
  console.log('listening on *:3000');
  
  
});