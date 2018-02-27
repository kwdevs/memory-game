/*jshint esversion: 6 */

/*This file will contain object literals, function factories to create objects, and their methods*/

// this is the newTile function factory
const newTile = ( {color, tileIcon, matchingId } ) => ({
	
	color,
	tileIcon,
	matchingId,
	
	state: {
		faceUp : false,
		faceDown : true
	},

	dimensions: {
		x : 150,
		y : 150
	}
	
});