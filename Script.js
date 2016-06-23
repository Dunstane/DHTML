var socket = io.connect("http://pigmanrocker.work:3000");
//canvas variable
var ctx;

//car texture variables
var car1 = new Image();
var car2 = new Image();
//car1 veriables
var car1X = 100; //xCoord 
var car1Y = 100; //yCoord
var car1Rotation = 0; //rotation in degrees
var car1DirectionVector; //direction the car is moving in
var car1Beta = 0;

//car two coords
var car2X = 800; //xCoord
var car2Y = 500; //yCoord
var car2Rotation = 270; //rotation in degrees
var car2DirectionVector; //direction the car is moving in
var car2Beta = 0;

//car length and height variables
var carLength = 53; //car length in pixels
var carHeight = 90; //car height in pixels

//key events
var up = false; //set to true when W is pressed
var down = false; //set to true when S is pressed
var right = false; //set to true when D is pressed
var left = false; //set to true when A is pressed





///TODO
//Clean up the client server interaction code
//a lot of movement data is handled by the server, may just need to say that a move event occured and send it to the server.

//runs when page is fully loaded
$(document).ready(function()  
{
	setup(); //setting up the initial
	loop(); //starting the game loop
}); 

//setting up the original game should only be run ones per game
function setup() 
{
	//put io connect here, also assign both car variables from a emit on the server
	//assign can maybe be the update?
	
	
	ctx = $('#canvas')[0].getContext("2d"); //assigning the canvas to a veriable
	car1.src = "res/car1.svg"; //setting the source file for the car1 image
	car2.src = "res/car2.svg"; //setting the source file for the car2 image
	$(document).keydown(keydownHandler); //setting up keydown handler
 	$(document).keyup(keyupHandler); //setting up keyup handler
 	car1DirectionVector = [0, 0]; //setting the car1 direction vector to 0
 	car2DirectionVector = [0, 0]; //setting the car2 direction vector to 0
}


function loop(timestamp) //check if the car is colliding with the walls or the other car
{
	//put io update here
	//get id from socket beforehand?
	if(socket.id="1");
	{
		socket.emit('updated',[car1X,car1Y,car1Rotation],[car2X,car2Y,car2Rotation]);
		car1_collisiondetect();
	}
	else
	{
		socket.emit('updated',[car1X,car1Y,car1Rotation],[car2X,car2Y,car2Rotation]);
		car2_collisiondetect();
	}
	


	
	walldetect();
	move(); //move the car
	draw(); //draw out everything to the screen
	//call socketupdate
	window.requestAnimationFrame(loop); // loop again
}


function walldetect()
{
		if ((car1X + car1DirectionVector[0]) < 950 && (car1X + car1DirectionVector[0]) > 50)
		{
			car1X += car1DirectionVector[0];
			
		}
		else{console.log("Wall hit!");}
			
		if ((car1Y - car1DirectionVector[1]) < 550 && (car1Y - car1DirectionVector[1]) > 50)
		{
			car1Y -= car1DirectionVector[1];
			
		}
		else{console.log("Wall hit!");}
		
		if ((car2X + car2DirectionVector[0]) < 950 && (car2X + car2DirectionVector[0]) > 50)
		{
			car2X += car2DirectionVector[0];
			
		}
		else{console.log("Wall hit!");}
			
		if ((car2Y - car2DirectionVector[1]) < 550 && (car2Y - car2DirectionVector[1]) > 50)
		{
			car2Y -= car2DirectionVector[1];
			
		}
		else{console.log("Wall hit!");}
	
}

function car1_collisiondetect()		//only works for car 1
{
	var carDiagonalDistance = Math.sqrt((Math.pow((car2X - car1X), 2)) + Math.pow((car2Y - car1Y), 2))

	//car to car collision check for car 1
	if(carDiagonalDistance <= carHeight)
	{
		
		console.log("collision car 1 called");
	    if(car1X	<	car2X)			//x checks
		{
			car1X-=5;
			car2X+=5;
			if(car1Y<car2Y)
			{
				car2Y+=2;
				
			}
			else(car1Y>car2Y)
			{
				car2Y-=2;
			}
		}
		else
		{
			car2X-=5;
			car1X+=5;
				if(car1Y<car2Y)
			{
				car2Y+=2;
				
			}
			else(car1Y>car2Y)
			{
				car2Y-=2;
			}
		}
	}
	else
	{
	
	}
}

function car2_collisiondetect()		//only works for car 1
{
	var carDiagonalDistance = Math.sqrt((Math.pow((car2X - car1X), 2)) + Math.pow((car2Y - car1Y), 2))

	//car to car collision check for car 1
	if(carDiagonalDistance <= carHeight)
	{
		
		console.log("collision car 2 called");
	    if(car2X	<	car1X)			//x checks
		{
			car2X-=5;
			car1X+=5;
			if(car2Y<car1Y)
			{
				car1Y+=2;
				
			}
			else(car2Y>car1Y)
			{
				car1Y-=2;
			}
		}
		else
		{
			car1X-=5;
			car2X+=5;
				if(car2Y<car1Y)
			{
				car1Y+=2;
				
			}
			else(car2Y>car1Y)
			{
				car1Y-=2;
			}
		}
	}
	else
	{
	
	}
}

function pushback()
{
	//push both cars away from eachother
	
}

function move()
{
	car1Beta = (Math.PI / 2) - car1Rotation;
	car2Beta = (Math.PI / 2) - car2Rotation;
	car2DirectionVector[0] = Math.sin(car2Rotation);
	car2DirectionVector[1] = Math.sin(car2Rotation);

	if(socket.id="1")
	{
	if(up == true && down == false)
	{
		car1DirectionVector[0] = Math.sin(car1Rotation) * 7;
		car1DirectionVector[1] = Math.sin(car1Beta) * 7;
	}

	if(down == true && up == false)
	{
		car1DirectionVector[0] = Math.sin(car1Rotation) * -7;
		car1DirectionVector[1] = Math.sin(car1Beta) * -7;
	}

	if (up == false && down == false)
	{
		car1DirectionVector[0] = 0;
		car1DirectionVector[1] = 0;
	}

	if (up == true && down == true)
	{
		car1DirectionVector[0] = 0;
		car1DirectionVector[1] = 0;
	}

	if(left == true && right == false)
	{
		car1Rotation -= 0.07;
	}

	if(right == true && left == false)
	{
		car1Rotation += 0.07;
	}
	}
	else
	{
		if(up == true && down == false)
	{
		car2DirectionVector[0] = Math.sin(car2Rotation) * 7;
		car2DirectionVector[1] = Math.sin(car2Beta) * 7;
	}

	if(down == true && up == false)
	{
		car2DirectionVector[0] = Math.sin(car2Rotation) * -7;
		car2DirectionVector[1] = Math.sin(car2Beta) * -7;
	}

	if (up == false && down == false)
	{
		car2DirectionVector[0] = 0;
		car2DirectionVector[1] = 0;
	}

	if (up == true && down == true)
	{
		car2DirectionVector[0] = 0;
		car2DirectionVector[1] = 0;
	}

	if(left == true && right == false)
	{
		car2Rotation -= 0.07;
	}

	if(right == true && left == false)
	{
		car2Rotation += 0.07;
	}
	}

}

function draw() 
{
	// clear the canvas first
	ctx.clearRect(0,0,1000,600);
	drawCar1();
	drawCar2();
}

function drawCar1()
{
	ctx.save();
	
	ctx.translate(car1X, car1Y);

	ctx.rotate(car1Rotation);

	ctx.translate(-27, -45)

	ctx.drawImage(car1, 0, 0, carLength, carHeight);

	ctx.restore();
}

function drawCar2()
{
	ctx.save();
	
	ctx.translate(car2X, car2Y);

	ctx.rotate(car2Rotation);

	ctx.translate(-27, -45)

	ctx.drawImage(car2, 0, 0, carLength, carHeight);

	ctx.restore();
}

function reset()
{
	
	this.car1X=100;
	this.car1Y=500;
	this.car2X=800;
	this.car2Y=500;
	//socket update here
}

//movement keys down
function keydownHandler(event) {
    event = event || window.event;
	switch (event.keyCode) 
	{
	    case 65:		// A
	        left = true;
	        break;
		case 87:		// W
			up = true;
			break;	
	    case 68:		// D
	        right = true;
	        break;
		case 83:		// S
			down = true;
			break;
	}
	event.preventDefault();
}

//movement keys up
function keyupHandler(event) {
  event = event || window.event;
  switch (event.keyCode) {
     case 65:		// A
      	left = false;
      	break;
	case 87:		// W
		up = false;
		break;	
    case 68:		// D
      right = false;
      break;
	case 83:		// S
		down = false;
		break;	
	}
	event.preventDefault();
}
