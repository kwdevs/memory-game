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
    // capture RAF id so we can stop the game on win
    let requestAnimationId = 0;

    // Setup access to DOM elements.
    let body = doc.getElementById('body');
    let header = doc.getElementById('header');
    let gameBoardHTML = doc.getElementById('gameboard');
    let moveCounterElem = doc.getElementById('move-counter');
    let timerElem = doc.getElementById('timer');
    let starRatingElem = doc.getElementById('star-rating');
    let resetIcon = doc.getElementById('reset-button');
    let modalCloseIcon = doc.getElementById('close-button');


    // this variable hold are array of objs that handle everything to do with the deck.
    let newDeck = [];
    let newGameBoard = '';

    // The gameLoop fn will call update to respond to changes in the game state and draw to
    // update entities on the screen.  Request Animation Frame is used to keep the loop going
    // and stay performant.
    function gameLoop() {
        // call update
        update();
        // RAF
        requestAnimationId = requestAnimationFrame(gameLoop);
        /*Check for a win condition in variable remainingCards*/
        if (iconDeck.remainingCards === 0) {
        	// stop the gameLoop
        	win.cancelAnimationFrame(requestAnimationId);
        	// remove interaction with the table listener
        	removeListener();	
            // Get the data necessary for display on modal
            winnerModal.saveWinningData(moveCounterElem, timerElem, starRatingElem);
            // Update the modal with game state data
            winnerModal.updateModalContent(winnerModal.finalMoveCount, 
            							   winnerModal.finalTime,
            							   winnerModal.finalStarRating);
            // show modal
            winnerModal.displayModal();
            // attach event listener to close button, call init
            modalCloseIcon.addEventListener('click', function() {
                // restart the game
                init();
            }, false);
        }
    }

    // init is a function used to set the game up
    function init() {
        console.log('worked');
        // close the modal
        winnerModal.closeModal();
    	// clear previous winner data
    	winnerModal.resetWinningData();
        // clear previous gameBoard
        gameBoardHTML.innerHTML = '';
        // here we set the newDeck variable to a freshly shuffled arr of icon objs
        newDeck = iconDeck.createDeck(iconDeck.fAArr);
        //this call builds the table with innerhtml of cells set to a shuffled icon
        newGameBoard = gameBoard.createGameBoard(newDeck);
        // add the table to the section element
        gameBoardHTML.append(newGameBoard);
        // add the initial star rating to DOM
        starRating.updateDOM(starRatingElem, starRating.currentStarRating);
        // add the moveCounter.currentMoveCount value to DOM
        moveCount.updateDOM(moveCounterElem);
        // add reset button to the DOM
        resetButton.updateDOM(resetIcon);
        // add necessary events to table
        addListener();
        addTimerListener();
        addResetButton();
        // call gameloop
        gameLoop();
    }

    // The update function handles the manipulation of values that are changed based on user actions
    function update() {
    	// if reset button is clicked call init
    	if (resetButton.restartGame === true) {
    		resetButton.restartGame = false;
    		resetButton.clearGameData(moveCounterElem, timerElem, starRatingElem, gameBoardHTML);
    		init();
    	}
        //  keep setting current time of timer obj on every loop
        timer.getCurrentTime();
        // kick off the timer after mouseup of the first move.
        if (moveCount.currentMoveCount >= 1) {
            timer.keepTime();
        }
        // update the timer
        timer.updateDOMTimer(timerElem);

        // set checkedLastPair to false since array was cleared (only reason to be less than 2)
        if (iconDeck.currentPair.length < 2) {

            iconDeck.checkedLastPair = false;

        }

        // check if cards are a match
        if (iconDeck.checkedLastPair === false && iconDeck.currentPair.length === 2) {

            iconDeck.checkedLastPair = true;

            compareTiles(iconDeck.currentPair);
            // update the displayed number in the counter element.

        }

        if (moveCount.currentMoveCount > starRating.tempMoveCount) {
            starRating.tempMoveCount = moveCount.currentMoveCount;
            starRating.checkedStarRating = false;
        }

        // encapsulate condition to prevent multiple runs
        if (starRating.checkedStarRating === false && starRating.currentStarRating != 1) {
            starRating.checkedStarRating = true;
            // will a simple switch get the job done
            switch (moveCount.currentMoveCount) {
                case 20:
                    {
                        starRating.currentStarRating -= 1;
                        starRating.updateDOM(starRatingElem, starRating.currentStarRating);
                        // starRating.checkedStarRating = true;
                        break;
                    }
                case 30:
                    {
                        starRating.currentStarRating -= 1;
                        starRating.updateDOM(starRatingElem, starRating.currentStarRating);
                        // starRating.checkedStarRating = true;
                        break;
                    }
                default:
                    {
                        break;
                    }

            }

        }
        // update the displayed number in the counter element.
        moveCount.updateDOM(moveCounterElem);
    }

    // call init() as soon as the window has finished loading
    win.onload = init();

})(this);