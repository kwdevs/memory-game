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
    
    //The wrapper div encapsulates the icon html to give us quick access to toggle off/on the icon display
    // let wrapperDiv = document.createElement('div');

    for (let row = 0; row < 4; ++row) {

        let newRow = table.insertRow(row);

        for (let cell = 0; cell < 4; ++cell) {

        	// I wanted this outside the for loop but it would only append to last td created.
        	let wrapperDiv = document.createElement('div');
        	wrapperDiv.innerHTML = currentDeck[index].tileIcon;
        	// add id
        	wrapperDiv.id = index;
            // add display none by default
            wrapperDiv.style.display = 'none';
            let newCell = newRow.insertCell(cell);
            newCell.appendChild(wrapperDiv);
            
            // newCell.innerHTML = currentDeck[index].tileIcon;
            console.log("newCell", newCell);
            
          	++index;
            // console.log("currentDeck[i].tileIcon", currentDeck);
        }
    }


    return table;
}