/*jshint esversion: 6 */
/*
 * This is the Engine for my card matching game.  Most of the application will reside here.
 */
/* The Engine function serves as a wrapper to  create a new lexical environment which will
 * prevent collision with the global object. The function is immediately invoked and passed
 * the areguement 'this'. By doing so we will retain the ability to access the global object
 * when necessary.
 */
let Engine = (function(global) {
	
	/*First of all, we need to declare variables that will be used throughout Engines' entire scope.*/
	let win = global;
	let doc = global.document;
	let currentDeck = [];
	let winCondition = false;


	function init (winCondition) {
		winCondition = false;
		currentDeck = createDeck();
		starRating  = resetStarRating();
		moveCounter = resetMoveCounter();
	}


    // kick off init when the window is ready
    win.onload = function() {
        init();
    };

})(this);