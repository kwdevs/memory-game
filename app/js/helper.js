/*jshint esversion: 6 */

/* This file will hold helper functions that do very basic tasks to keep readability of app.js and engine.js
clean
 */

// Get the canvas element
function getCanvas() {
    return document.querySelector('canvas');
}

function setCanvasContext(canvas) {
	return canvas.getContext('2d');
}

// set canvas width
function setCanvasWidth() {
    return window.innerWidth;
}

// set canvas height
function setCanvasHeight() {
    return window.innerHeight;
}

// function to draw 16 tiles in a 4x4 grid
function drawTiles(ctx, arrOfObj) {

	let x = 100;
	let y = 100;

	for (let obj of arrOfObj) {
		  obj.drawRect(ctx, x, y, obj.dimensions.x, obj.dimensions.y);
	    
	    // ctx.drawRect(x, y, arrOfObj.width, arrOfObj.height);

	    x += 200;
	    
	    if (x >= 800) {
	    	x = 100;
	    	y += 200;
	    }
	}
}