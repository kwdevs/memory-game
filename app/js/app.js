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
        // console.log("array", array);

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

    selectIcon: function() {
        // function that will add an icon after shuffle when creating new game
        return;
    },

    createIconObj: function(singleIcon) {

        let icon = {

            fillColor: '#EF550FFF',

            dimensions: {
                x: 150,
                y: 150
            },

            state: {
                faceUp: false,
                faceDown: true
            },

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

    moveCountHTML: '',

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
            return moveCount.currentMoveCount += 1;
        }  
    },

    updateDOM: function() {
        // update the DOM
    }
};

// setup timer object
const timer = {

    timerHTML: '',

    start: function() {
        // kicks off timer when first icon is clicked.
    },

    stop: function() {
        // called whenever all cards are matched and game is won.
    },
    currentTime: function() {
        return Date.now;
    },

    updateTimer: function() {
        // func to update timer value.
    },

    updateDOM: function() {
        // update the DOM
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

    updateDOM: function() {
        // update the DOM
    }
};

// setup resetButton object
const resetButton = {

    buttonHTML: '<i class="fas fa-redo"></i>',

    reset: function() {
        // call init() or w/e game engine kicks off new game on button click.
    }
};