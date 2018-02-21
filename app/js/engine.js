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


    /* Now that a new lexical environment has been created, we can declare or define variables
     * that will be accessible throughout the entire Engine script. Like Dom selections.
     */
    let doc = global.document;
    let win = global.window;
    let canvas = newElem('canvas');
    console.log("canvas", canvas);
    let context = canvas.getContext('2d');
    let currentDeck = [];
    let gameWon = false;

    /* The game loop function will loop continuously using requestanimationframe(). It will also
     * call update and render functions to continuously update the game board based on a users
     * action.
     */

    function gameLoop() {


        update();
        render();

        // check for win condition
        if (gameWon === true) {
        	reset(gameWon);
        }

        win.requestAnimationFrame(gameLoop);
    }

    /* We can now move to the init function. This function is
     * responsible for setting up the initial game when the page is loaded.  At the end, this
     * function will kickoff the gameloop.
     */

    function init() {

        // create a new deck of cards to use.
        currentDeck = createDeck();

        // call function to kick off timer loop.


        gameLoop(gameWon);
    }


    /* Now we need to define our update function. This function will mainpulate all the variables
     * necessary to make the game functional.
     */

    function update() {
        return;
    }

    /* After the necessary data has been manipulated by our update function, we use the render
     * function to update the screen
     */

    function render() {
        return;
    }
    /*This function will be called by init to start a new game or be part of the winner modal*/
    function reset(isWinner) {
        if (isWinner === true) {
            /*Here we will alert the user with a modal they have won
             * and display time, star rating, move count. Also clear out/ reset necessary
             * fields.*/
             return;
        }
        // call init from here when everything is reset and you're ready for a new deck/game state.
    }

    // kick off init when the window is ready
    win.onload = function() {
        init();
    };

})(this);