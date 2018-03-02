/*jshint esversion: 6 */

/* The Engine function serves as a wrapper to  create a new lexical environment which will
 * prevent collision with the global object. The function is immediately invoked and passed
 * the areguement 'this'. By doing so we will retain the ability to access the global object
 * when necessary.
 */
let Engine = (function(global) {

	// Variables to be used throughout Engines entire scope
	const win = global;
	const doc = global.document;
	
	// this variable hold are array of objs that handle everything to do with the deck.
	let newDeck = [];

	// init is a function used to set the game up
	function init() {
		// here we set the newDeck variable to a freshly shuffled arr of icon objs
		newDeck = iconDeck.createDeck(iconDeck.fAArr);
		

		//call function create tiles to draw 4x4 tiles on screen
		
	}



	// call init() as soon as the window has finished loading
	win.onload = init();

})(this);