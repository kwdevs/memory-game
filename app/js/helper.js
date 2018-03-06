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
            wrapperDiv.classList.add('hideCard', 'default');
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
    console.log("tileDiv", tileDiv);
    // stores the class name of the tile icon that was clicked, ie 'fa-bug'
    let selectedTile = tileDiv.firstChild.classList[1];
   	// push the selectedTile on to the currentPair array to be used in other logic.
    iconDeck.currentPair.push(selectedTile);

    // if the icon is hidden, then show it.
    if (tileDiv.classList.contains('hideCard')) {

        tileDiv.classList.replace('hideCard', 'showCard');
    }

    // store the tile in currentPair for comparison in engine.js update fn
    
}

// function to hide icons if determined not to match
function hideIcon(){


}



// this function compares the tiles and returns true or false
function compareTiles(array) {
	
	if (array[0] == array[1]) {
		return true;
	} else {
		return false;
	}
}

// store the click event for use in other fn's
function currentClickEvent(event) {

}