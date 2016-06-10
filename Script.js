//canvas variable
var ctx;

//car texture variables
var car1 = new Image();
var car2 = new Image();

//car one coords
var car1X = 100;
var car1Y = 100;
var car1Rotation = 0;
var car1DirectionVector;
var car1Beta = 0;

//car two coords
var car2X = 800;
var car2Y = 500;
var car2Rotation = 270;
var car2DirectionVector;
var car2Beta = 0;

//car length and height variables
var carLength = 53;
var carHeight = 90;

//key events
var up = false;
var down = false;
var right = false;
var left = false;

$(document).ready(function()  
{
	setup();
	loop();
}); 

function setup() 
{
	ctx = $('#canvas')[0].getContext("2d");
	car1.src = "res/car1.svg";
	car2.src = "res/car2.svg";
	$(document).keydown(keydownHandler);
 	$(document).keyup(keyupHandler);
 	car1DirectionVector = [0, 0];
}

function loop(timestamp) {
	move();
	draw();
	window.requestAnimationFrame(loop); // loop again
}

function move()
{
	car1Beta = (Math.PI / 2) - car1Rotation;

	if(up == true && down == false)
	{
		car1DirectionVector[0] = Math.sin(car1Rotation) * 4;
		car1DirectionVector[1] = Math.sin(car1Beta) * 4;
	}

	if(down == true && up == false)
	{
		car1DirectionVector[0] = Math.sin(car1Rotation) * -4;
		car1DirectionVector[1] = Math.sin(car1Beta) * -4;
	}

	if (up == false && down == false)
	{
		car1DirectionVector[0] = 0;
		car1DirectionVector[1] = 0;
	}

	if(left == true && right == false)
	{
		car1Rotation -= 0.05;
	}

	if(right == true && left == false)
	{
		car1Rotation += 0.05;
	}

	if ((car1X + car1DirectionVector[0]) < 950 && (car1X + car1DirectionVector[0]) > 50)
	{
		car1X += car1DirectionVector[0];
		console.log((car1X + car1DirectionVector[0]))
		console.log((1000 + car1DirectionVector[0]))
	}
	
	if ((car1Y - car1DirectionVector[1]) < 550 && (car1Y - car1DirectionVector[1]) > 50)
	{
		car1Y -= car1DirectionVector[1];
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

	ctx.rotate(car2Rotation * Math.PI / 180);

	ctx.drawImage(car2, 0, 0, carLength, carHeight);

	ctx.restore();	
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