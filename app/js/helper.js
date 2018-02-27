/*jshint esversion: 6 */

/* This file contains hard coded data and all the functions we will need to perform tasks in app.js.  'fA' or 
'FA' is short for Font Awesome since we are using Font Awesome icons
 */

const tileColor = '#D68828FF';
const shuffledFAArray = [];
const currentTileDeck = [];

const fAArr = [
	'<i class="far fa-bomb"></i>',
    '<i class="far fa-beer"></i>',
    '<i class="far fa-bug"></i>',
    '<i class="far fa-fighter-jet"></i>',
    '<i class="far fa-camera-retro"></i>',
    '<i class="far fa-fire"></i>',
    '<i class="far fa-jack-o-lantern"></i>',
    '<i class="far fa-space-shuttle"></i>'
];



/* Through some research, I've decided to use the Fisher Yates Algorithm as my shuffling 
 * mechanism.
 */

const shuffleIcons = function(array) {

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
};
