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

    // Setup access to DOM elements.
    let body = doc.getElementById('body');
    let header = doc.getElementById('header');
    let gameBoardHTML = doc.getElementById('gameboard');
    let moveCounterElem = doc.getElementById('moveCounter');
    let timerElem = doc.getElementById('timer');
    let starRatingElem = doc.getElementById('starRating');


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
        // add the timer's value to DOM
        timer.updateDOM(timerElem);
        // add the moveCounter.currentMoveCount value to DOM
        moveCount.updateDOM(moveCounterElem);
        // add the starRating to DOM
        starRating.updateDOM(starRatingElem);
        // add necessary events to table
        addListener();
        // call gameloop
        gameLoop();
    }

    // The update function handles the manipulation of values that are changed based on user actions
    function update() {
        /*Check for a win condition in variable remainingCards*/
        if (iconDeck.remainingCards === 0) {
            // stop timer
            // trigger modal/break the gameLoop
        }
        // set checkedLastPair to false since array was cleared (only reason to be less than 2)
        if (iconDeck.currentPair.length < 2) {

            iconDeck.checkedLastPair = false;

        }

        // check if cards are a match
        if (iconDeck.checkedLastPair === false && iconDeck.currentPair.length === 2) {

            iconDeck.checkedLastPair = true;

            compareTiles(iconDeck.currentPair);

        }
        // update the displayed number in the counter element.
        moveCount.updateDOM(moveCounterElem);
    }

    // The draw function will change the state of enitities on the screen based on the updated
    // values assigned to different entities in the update function.
    function draw() {
        // update the screen IS THIS NECESSARY?
    }

    // call init() as soon as the window has finished loading
    win.onload = init();

})(this);