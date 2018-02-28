/*jshint esversion: 6 */

/* The Engine function serves as a wrapper to  create a new lexical environment which will
 * prevent collision with the global object. The function is immediately invoked and passed
 * the areguement 'this'. By doing so we will retain the ability to access the global object
 * when necessary.
 */
let Engine = (function(global) {

	// Variables to be used throughout Engines entire scope
	const canvas = getCanvas();
	// make canvas full screen to any device
	canvas.width = setCanvasWidth();
	canvas.height = setCanvasHeight();

	let ctx = setCanvasContext(canvas);
	// newDeck[0].drawRect(ctx)
})(this);