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
