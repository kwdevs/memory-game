/*jshint esversion: 6 */

/* This file will hold helper functions that do very basic tasks to keep readability of app.js and engine.js
clean
 */


// This fn will create a table accepting row and column
function createTable(row, col, deck) {

    let currentDeck = deck;

    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');

    table.setAttribute('id', 'table');
    tableBody.setAttribute('id', 'tableBody');

    // use a nested for loop to create cells, gameboard is 4x4.
    // index is declared outside the for loop to prevent it's value being reset
    // so the arrOfObjs 'currentDeck' is fully cycled through.
    let index = 0;

    //The wrapper div encapsulates the icon html to give us quick access to toggle off/on the icon 
    //display


    for (let row = 0; row < 4; ++row) {

        let newRow = table.insertRow(row);

        for (let cell = 0; cell < 4; ++cell) {

            // I wanted this outside the for loop but it would only append to last td created.
            let wrapperDiv = document.createElement('div');
            wrapperDiv.innerHTML = currentDeck[index].tileIcon;
            // add id
            wrapperDiv.id = index;
            // add display none by default
            wrapperDiv.classList.add('hideCard');
            // create a new cell and append wrapper div containing FA icon.
            let newCell = newRow.insertCell(cell);
            newCell.appendChild(wrapperDiv);

            ++index;
        }
    }

    return table;
}

// this function will listen for clicks on the able and set the correct td's parent div to display the icon
function showIcon(event) {

    // get the div to toggle display style on
    let tileDiv = event.target.firstChild;

    // if the icon is hidden, then show it.
    if (tileDiv.classList.contains('hideCard')) {

        tileDiv.classList.replace('hideCard', 'showCard');
    }

}

// function to hide icons if determined not to match
function hideIcons(firstClass, secondClass) {

	// find elem's with class matching iconDeck.currentPair position 0 and 1
	let firstIcon = document.getElementsByClassName(firstClass);
	let	firstParent = firstIcon.parentElement;
	console.log("firstp", firstParent);
	let secondIcon = document.getElementsByClassName(secondClass);
	console.log("secondIcon", secondIcon);

	
}

// store the selected icons in an array that can only have 2 elements
function storeSelectedIconInfo(event) {
	    // get the class of the selected icon and push it to iconDeck.currentPair
	    let tempIconClass = event.target.firstChild.firstChild.classList[1];
	    	iconDeck.currentPair.push(tempIconClass);

	    //get the div and push it to currentPairHTML
	    let tempIconHTML = event.target.firstChild;
	    	iconDeck.currentPairHTML.push(tempIconHTML);
}


// this function compares the tiles and returns true or false
function compareTiles(array) {
    console.log("array", array);

    if (array[0] == array[1]) {
    	decrementRemainingCards();
    	// clear out our matching array.
    	clearCurrentPair();
        return;
    } else if (array[0] !== array[1]) {
    	console.log('you guessed wrong');
    	// flips tiles back over, pass in class name of selected icons
    	hideIcons(array[0], array[1]);
    	// clear currentPair array
    	clearCurrentPair();
    }
}
/*Below this line are what I believe at the moment to be true helper fn's. Above this line
* refactoring is probably necessary*/


// this helper fn decreases number of cards in deck
function decrementRemainingCards() {
	return iconDeck.remainingCards - 2;
}

// helper fn to clear currentPair array
function clearCurrentPair() {
	iconDeck.currentPair = [];
	return;
}