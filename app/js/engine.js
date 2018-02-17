/*
* This is the Engine for my card matching game.  Most of the application will reside here.
*/

/* The Engine function serves as a wrapper to  create a new lexical environment which will
* prevent collision with the global object. The function is immediately invoked and passed
* the areguement 'this'. By doing so we will retain the ability to access the global object
* when necessary.
*/
function Engine (global) {

	/* Now that a new lexical environment has been created, we can declare or define variables
	* that will be accessible throughout the entire Engine script.
	*/

	/* With our vairiables setup, we can now move to the init function. This function is
	* responsible for setting up the initial game when the page is loaded.  At the end, this
	* function will kikoff the gameloop.
	*/

	let init = function () {

		gameLoop();
	}();

	/* The game loop function will loop continuously using requestanimationframe(). It will also
	* call update and render functions to continuously update the game board based on a users
	* action.
	*/

	let gameLoop = function () {
		
		update();
		render();

		requestAnimationFrame(gameLoop);
	};

	/* Now we need to define our update function. This function will mainpulate all the variables
	* necessary to make the game functional.
	*/

	let update = function () {

	};

	/* After the necessary data has been manipulated by our update function, we use the render
	* function to update the screen
	*/

	let render = function () {

	};

}(this);