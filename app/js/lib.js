/*
* Lib.js contains all the definitions and functions required to run the game
*
*
*
* 
*/
// Get the canvas element define context
let canvas = document.getElementById('canvas');
	ctx    = canvas.getContext('2d'); 


// Create 16 squares for cards on canvas
const cards = [
	{
		x: 25,
		y: 25,
		width: 125,
		height: 150
	},
	{
		x: 200,
		y: 25,
		width: 125,
		height: 150
	},
	{
		x: 375,
		y: 25,
		width: 125,
		height: 150
	},
	{
		x: 550,
		y: 25,
		width: 125,
		height: 150
	},
	{
		x: 25,
		y: 185,
		width: 125,
		height: 150
	},
	{
		x: 200,
		y: 185,
		width: 125,
		height: 150
	},
	{
		x: 375,
		y: 185,
		width: 125,
		height: 150
	},
	{
		x: 550,
		y: 185,
		width: 125,
		height: 150
	},

];

// draw cards
cards.forEach(card => {
	ctx.beginPath();
	ctx.lineWidth = '2';
	ctx.strokeStyle = 'black';
	ctx.rect(card.x, card.y, card.width, card.height);
	ctx.stroke();
})