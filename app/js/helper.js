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
function hideIcons() {
    let firstIcon = document.getElementById('firstIconSelected');

    let secondIcon = document.getElementById('secondIconSelected');

    setTimeout(function() {
        firstIcon.classList.replace('showCard', 'hideCard');
        secondIcon.classList.replace('showCard', 'hideCard');
        firstIcon.id = '';
        secondIcon.id = '';
        addListener();
    }, 2000);
}

// store the selected icons in an array that can only have 2 elements
function storeSelectedIconInfo(event) {

    // get the class of the selected icon and push it to iconDeck.currentPair
    let tempIconClass = event.target.firstChild.firstChild.classList[1];
    iconDeck.currentPair.push(tempIconClass);
}

// fn to add an id to an icon's div
function addIdToIconContainer(event) {

    let selectedIcon = event.target.firstChild;

    if (iconDeck.currentPair.length === 0) {
        selectedIcon.id = iconDeck.firstIconSelected;
    } else if (iconDeck.currentPair.length === 1) {
        selectedIcon.id = iconDeck.secondIconSelected;
    }
}

// fn to remove an id from an icon's div

// this function compares the tiles and returns true or false
function compareTiles(array) {

    if (array[0] == array[1]) {
        // clear out our matching array.
        clearCurrentPair();
        removeSelectedIconsId();
        return;
    } else if (array[0] !== array[1]) {
        // this will limit the users ability to rapidly click more cards
        // reattached in hideIcon()
        removeListener();
        // flips tiles back over, pass in class name of selected icons
        hideIcons();
        // clear currentPair array
        clearCurrentPair();
    }
}

// called by compare tiles to remove id's after a successful match of icons
function removeSelectedIconsId() {

    let firstIcon = document.getElementById('firstIconSelected');
    let secondIcon = document.getElementById('secondIconSelected');

    firstIcon.id = '';
    secondIcon.id = '';
}

// this helper fn decreases number of cards in deck
function decrementRemainingCards(num) {
    return num - 2;

}

// helper fn to clear currentPair array
function clearCurrentPair() {
    iconDeck.currentPair = [];
    return;
}

// fn to call to apply batch of listeners
function addListener() {
    document.getElementById('table').addEventListener('click', eventResponses);
}

// fn to call when removing batch of listener during time delays or animation
function removeListener() {
    document.getElementById('table').removeEventListener('click', eventResponses);
}

// fn to call when adding timer listener
function addTimerListener() {
    document.getElementById('table').addEventListener('mouseup', timer.getStartTime);
}

// fn remove timer listener
function removeStartTimeListener() {
    document.getElementById('table').removeEventListener('mouseup', timer.getStartTime);
}

// using named function inside listener so I can remove it later easily
let eventResponses =
    function(event) {
        moveCount.updateMoveCount(event);
        addIdToIconContainer(event);
        storeSelectedIconInfo(event);
        showIcon(event);
    };