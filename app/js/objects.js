/*jshint esversion: 6 */
/* The purpose of this file is to create all the objects we will need for our game. By seperating
* this code into it's own file we maintain readability in the development process.
*/

/*Here we will define a basic Star Rating object*/

let starRating = {
	domNode: '', //declare a helper function that returns a dom node for this value
	lowerStarRating: '', //this method will return true if move threshold is crossed
	updateStarRating: '', //this method will do the work to change the star rating
	resetStarRating: '' //this method will reset the star rating to full on game restart/new game
};

/*Our move counter will be used to store move information and provide values for updating the onscreen move counter*/

let moveCounter = {
	domNode: '', //declare a helper function to setup this dom node.
	currentMoveCount: 0,//this will keep the users current move count as the game progresses.
	resetMoveCount: 0 //this method will reset the move count on new game or game reset.
};

/*Our timer object will contain all the information needed to manage our displayed timer*/

let timer = {
	domNode: '', //helper function will return a value to setup this node
	currentTime: 0,//tracks current time
	updateTimer: 0//method to update display of time
};

let Card = function (frontOfCard, index) {
	
	this.width = 140,
	this.height = 190,
	
	this.faceUp = false,
	this.faceDown = true,
	
	this.backOfCard = 'images/cardBack.png',
	this.frontOfCard = frontOfCard
	
};