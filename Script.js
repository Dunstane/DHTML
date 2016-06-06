var ctx;

var car1 = new Image();
var car2 = new Image();

$(document).ready(function() 
{
	setup();
	loop();
}); 

function setup() 
{
	ctx = $('#canvas')[0].getContext("2d");
}

car1.onload = function()
{
	ctx.drawImage(car1, 0, 0, 96, 80);
}
car1.src = "res/car1.svg"

car2.onload = function()
{
	ctx.rotate(180 * Math.PI / 180);
	ctx.drawImage(car2, -1000, -600, 96, 80);
	ctx.rotate(180 * Math.PI / 180);
}
car2.src = "res/car2.svg"

function loop(timestamp) {
	draw();
	window.requestAnimationFrame(loop); // loop again
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
	ctx.drawImage(car1, 0, 0, 96, 80);
}

function drawCar2()
{
	ctx.rotate(180 * Math.PI / 180);
	ctx.drawImage(car2, -1000, -600, 96, 80);
	ctx.rotate(180 * Math.PI / 180);
}