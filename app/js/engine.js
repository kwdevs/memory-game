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

	let body = doc.getElementById('body');
	let header = doc.getElementById('header');
	let gameBoardHTML = doc.getElementById('gameboard');
	
	// this variable hold are array of objs that handle everything to do with the deck.
	let newDeck = [];
	let newGameBoard = '';

	// init is a function used to set the game up
	function init() {
		// here we set the newDeck variable to a freshly shuffled arr of icon objs
		newDeck = iconDeck.createDeck(iconDeck.fAArr);
		//this call builds the table with innerhtml of cells set to a shuffled icon
		newGameBoard = gameBoard.createGameBoard(newDeck);
		// add the table to the section element
		gameBoardHTML.append(newGameBoard);
		// add the timer to DOM
		// add the moveCounter to DOM
		// add the starRating to DOM
		
		// add event listeners
		// this listener keeps a running move count and updates MoveCount.currentMoveCount as a number
		doc.getElementById('table').addEventListener('click', incrementMoveCount);
		// this is our listener to expose an icon when clicked.
		doc.getElementById('table').addEventListener('click', flipTile);
		// call gameloop
	}



	// call init() as soon as the window has finished loading
	win.onload = init();

})(this);