/*jshint esversion: 6 */
/*The purpose of this file is to seperate out common use helper functions and hard coded data 
 * from the rest of the script
 */

let frontOfCardSrc = [
    'images/cardClubsA',
    'images/cardClubsJ',
    'images/cardClubsK',
    'images/cardClubsQ',
    'images/cardDiamondsA',
    'images/cardDiamondsJ',
    'images/cardDiamondsK',
    'images/cardDiamondsQ',
    'images/cardHeartsA',
    'images/cardHeartsJ',
    'images/cardHeartsK',
    'images/cardHeartsQ',
    'images/cardSpadesA',
    'images/cardSpadesJ',
    'images/cardSpadesK',
    'images/cardSpadesQ',
];

/* Through some research, I've decided to use the Fisher Yates Algorithm as my shuffling 
 * mechanism.
 */

let shuffleCards = function(array) {

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

// simplify new element creation for readability. Accepts a string as an arguement.
function newElem(elem) {
    return document.createElement(elem);
}

function createDeck() {
    // Shuffle the face card array and store it in a new array
    let currentFaceCardArray = [];
    let cardDeck = [];
    let duplicatedDeck = [];

    currentFaceCardArray = shuffleCards(frontOfCardSrc);

    // Create 8 objects and attach a face card image to the key frontOfCard
    for (i = 0; i < 8; ++i) {
        cardDeck[i] = new Card(currentFaceCardArray[i]);
    }

    duplicatedDeck = createDuplicateCards(cardDeck);
    console.log("duplicatedDeck", duplicatedDeck);
    return duplicatedDeck;
}

/* The function createDuplicateCards is used after 8 random cards have been selected to make
 * a shallow copy of the array and append duplicates back to the array. Without duplicates of randomly
 * selected cards we can't have a matching game.*/

function createDuplicateCards(array) {
    let duplicatedDeck = [];
    let shuffledDuplicatedDeck = [];
    // make a copy of the existing array passed as an argument to the function
    let duplicateArray = array.slice(0);

    duplicatedDeck = array.concat(duplicateArray);
    /*probably not the cleanest way, but we are calling shuffle again to randomize our 
    concatenated deck*/
    shuffledDuplicatedDeck = shuffleCards(duplicatedDeck);

    return shuffledDuplicatedDeck;

}