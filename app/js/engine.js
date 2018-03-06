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

    // The gameLoop fn will call update to respond to changes in the game state and draw to
    // update entities on the screen.  Request Animation Frame is used to keep the loop going
    // and stay performant.
    function gameLoop() {

        // call update
        update();
        // call draw
        draw();
        // RAF
        requestAnimationFrame(gameLoop);
    }

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
        doc.getElementById('table').addEventListener('click', moveCount.updateMoveCount);
        // this is our listener to expose an icon when clicked.
        doc.getElementById('table').addEventListener('click', flipTile);
        // call gameloop
        gameLoop();
    }

    // The update function handles the manipulation of values that are changed based on user actions
    function update() {
        // update variables
    }

    // The draw function will change the state of enitities on the screen based on the updated
    // values assigned to different entities in the update function.
    function draw() {
        // update the screen
    }


    // call init() as soon as the window has finished loading
    win.onload = init();

})(this);