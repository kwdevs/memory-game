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

let shuffleCards = function (array) {
	
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
}

/*This helper function is used during the creation of Card objects to pick a random card from
a shuffled array which will be the frontOfCard value of the Card object.*/
// function selectRandomCard () {
// 	let randomCardFace = ;
// }