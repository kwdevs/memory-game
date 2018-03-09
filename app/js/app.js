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

	dt: 0,

	getStartTime: function () {
		timer.startTime = Date.now();
		// immediately remove listener so startTime isn't overwritten every mouseup.
		removeStartTimeListener();
	},

	getCurrentTime: function () {
		timer.currentTime = Date.now();
	},

	keepTime: function () {
		timer.dt = timer.currentTime - timer.startTime;
	},

	updateDOMTimer: function (element) {
		element.innerText = `${timer.dt}`;
	}


};

// setup starRating object
const starRating = {

    starRatingHTML: '<i class="fas fa-star"></i>',

    defaultRating: function() {
        // set stars to full
    },

    lowerRating: function() {
        // logic to remove a star
    },

    updateDOM: function(element) {
        element.innerHTML = starRating.starRatingHTML;
    }
};

// setup resetButton object
const resetButton = {

    buttonHTML: '<i class="fas fa-redo"></i>',

    reset: function() {
        // call init() or w/e game engine kicks off new game on button click.
    }
};