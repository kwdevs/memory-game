/*jshint esversion: 6 */

/*This file will contain object literals, function factories to create objects, and their methods*/


// setup gameboard object
const gameBoard = {

    createGameBoard: function(deck) {

        let currentDeck = deck;
        let section = document.createElement('section');

        section.setAttribute('id', 'gameBoard');

        let row = 4;
        let col = 4;

        let newTable = createTable(row, col, currentDeck);

        return newTable;
    },

    //remove table
    removeGameBoard: function() {
        // function to be called when starting a new game
    }
};


// setup cardDeck object.
const iconDeck = {

    // used in update function to store selected cards for comparison
    currentPair: [],

    // used to limit calls to compare function
    checkedLastPair: false,

    // remainingCards is used to check for a win condition when all cards are flipped over
    remainingCards: 16,

    // id that's added to a wrapper div around an icon when it's selected
    firstIconSelected: 'firstIconSelected',

    // id that's added to a wrapper div around an icon when it's selected
    secondIconSelected: 'secondIconSelected',

    // this is the html for fontawesome icons
    fAArr: [
        '<i class="fas fa-bomb fa-3x"></i>',
        '<i class="fas fa-bomb fa-3x"></i>',
        '<i class="fas fa-beer fa-3x"></i>',
        '<i class="fas fa-beer fa-3x"></i>',
        '<i class="fas fa-bug fa-3x"></i>',
        '<i class="fas fa-bug fa-3x"></i>',
        '<i class="fas fa-fighter-jet fa-3x"></i>',
        '<i class="fas fa-fighter-jet fa-3x"></i>',
        '<i class="fas fa-camera-retro fa-3x"></i>',
        '<i class="fas fa-camera-retro fa-3x"></i>',
        '<i class="fas fa-fire fa-3x"></i>',
        '<i class="fas fa-fire fa-3x"></i>',
        '<i class="fas fa-trophy fa-3x"></i>',
        '<i class="fas fa-trophy fa-3x"></i>',
        '<i class="fas fa-space-shuttle fa-3x"></i>',
        '<i class="fas fa-space-shuttle fa-3x"></i>'
    ],

    // this is a fisher yates shuffle implementation
    shuffleIcons: function(array) {

        let index = array.length;

        let temporaryElement = '';

        let randomIndex = 0;

        while (0 !== index) {

            randomIndex = Math.floor(Math.random() * index);

            index -= 1;

            temporaryElement = array[index];

            array[index] = array[randomIndex];

            array[randomIndex] = temporaryElement;
        }

        return array;
    },

    createIconObj: function(singleIcon) {

        let icon = {

            fillColor: '#EF550FFF',

            tileIcon: singleIcon,

        };

        return icon;
    },

    createDeck: function(iconArr) {

        let newDeck = [];

        let shuffledDeck = this.shuffleIcons(iconArr);

        // loop to create icon objects setting tileIcon to iconArr value
        for (var elem of iconArr) {
            let tempIconObj = this.createIconObj(elem);
            newDeck.push(tempIconObj);
        }

        return newDeck;
    }

};

// setup moveCount object
const moveCount = {

    // moveCountHTML: document.createElement('div'),

    currentMoveCount: 0,

    updateMoveCount: function(event) {

        // check that the tile that was clicked is not already clicked. Adding this check
        // will prevent incrementation of the currentMoveCount property being incremented when
        // an already shown icon is clicked again
        let checkIfIconIsShowing = event.target.firstChild.classList.contains('showCard');

        let checkIfIconIsHidden = event.target.firstChild.classList.contains('hideCard');

        if (checkIfIconIsShowing) {
            return;
        }
        if (checkIfIconIsHidden) {
            moveCount.currentMoveCount += 1;
        }
    },

    updateDOM: function(element) {
        element.innerText = moveCount.currentMoveCount;
    }
};

// setup timer object
const timer = {

    startTime: 0,

    currentTime: 0,

    minutes: 0,

    seconds: 0,

    td: 0,

    getStartTime: function() {
        timer.startTime = Date.now();
        // immediately remove listener so startTime isn't overwritten every mouseup.
        removeStartTimeListener();
    },

    getCurrentTime: function() {
        timer.currentTime = Date.now();
    },

    keepTime: function() {
        timer.td = timer.currentTime - timer.startTime;
        timer.convertTime(timer.td);
    },

    convertTime(td) {
        timer.seconds = Math.floor(td / 1000);

        if (timer.seconds === 60) {
            timer.seconds = 0;
            timer.minutes += 1;
            timer.getCurrentTime();
            timer.getStartTime();
        }
    },

    updateDOMTimer: function(element) {
        element.innerText = `${timer.minutes}:${timer.seconds}`;

        if (timer.minutes === 0 && timer.seconds === 0) {
            element.innerText = `00:00`;
        } else if (timer.minutes === 0 && timer.seconds < 10) {
            element.innerText = `00:0${timer.seconds}`;
        } else if (timer.minutes === 0 && timer.seconds >= 10) {
            element.innerText = `00:${timer.seconds}`;
        } else if (timer.minutes >= 1 && timer.seconds < 10) {
        	element.innerText = `0${timer.minutes}:0${timer.seconds}`;
        } else if (timer.minutes >= 1 && timer.minutes < 10) {
            element.innerText = `0${timer.minutes}:${timer.seconds}`;
        } else {
            element.innerText = `${timer.minutes}:${timer.seconds}`;
        }
    }


};

// setup starRating object
const starRating = {

        starRatingHTML: '<i class="rating fas fa-star"></i>',

        currentStarRating: 3,

        checkRating: function() {
            switch (moveCount.currentMoveCount) {
                case 15:
                    {
                        starRating.currentStarRating -= 1;
                        break;
                    }
                case 25:
                    {
                        starRating.currentStarRating -= 1;
                        break;
                    }
                case 35:
                    {
                    	starRating.currentStarRating -= 1;
                    	break;
                    }
                }
            },


            updateDOM: function(element, ratingNumber) {
                switch (ratingNumber) {
                    case 3:
                        {
                            element.innerHTML = starRating.starRatingHTML +
                            starRating.starRatingHTML +
                            starRating.starRatingHTML;
                            break;
                        }
                    case 2:
                        {
                            element.innerHTML = starRating.starRatingHTML +
                            starRating.starRatingHTML;
                            break;
                        }
                    case 1:
                        {
                            element.innerHTML = starRating.starRatingHTML;
                            break;
                        }
                    case 0:
                        {
                            element.innerHTML = '';
                            break;
                        }
                    default:
                        {
                            break;
                        }
                }
            }
        };

        // setup resetButton object
        const resetButton = {

            buttonHTML: '<i class="fas fa-redo"></i>',

            reset: function() {
                // call init() or w/e game engine kicks off new game on button click.
            }
        };