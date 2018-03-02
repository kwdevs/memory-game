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

    // use a nested for loop to create cells, gameboard is 4x4

    for (let row = 0; row < 4; ++row) {

        let newRow = table.insertRow(row);

        for (let cell = 0; cell < 4; ++cell) {

        	let i = 0;

            let newCell = newRow.insertCell(cell);
            	newCell.innerHTML = currentDeck[i].tileIcon;
        	
        	// console.log("currentDeck[i].tileIcon", currentDeck);
            ++i;
        }
    }

    return table;
}
