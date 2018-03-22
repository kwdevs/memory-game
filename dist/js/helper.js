function createTable(row,col,deck){let currentDeck=deck;let table=document.createElement('table');let tableBody=document.createElement('tbody');table.setAttribute('id','table');tableBody.setAttribute('id','table-body');let index=0;for(let row=0;row<4;++row){let newRow=table.insertRow(row);for(let cell=0;cell<4;++cell){let wrapperDiv=document.createElement('div');wrapperDiv.innerHTML=currentDeck[index].tileIcon;wrapperDiv.classList.add('hide-card');let newCell=newRow.insertCell(cell);newCell.appendChild(wrapperDiv);++index;}}
return table;}
function showIcon(event){let tileDiv=event.target.firstChild;if(tileDiv.classList.contains('hide-card')){tileDiv.classList.replace('hide-card','show-card');}}
function hideIcons(){let firstIcon=document.getElementById('first-icon-selected');let secondIcon=document.getElementById('second-icon-selected');setTimeout(function(){firstIcon.classList.replace('show-card','hide-card');secondIcon.classList.replace('show-card','hide-card');firstIcon.id='';secondIcon.id='';addListener();},1200);}
function storeSelectedIconInfo(event){let tempIconClass=event.target.firstChild.firstChild.classList[1];iconDeck.currentPair.push(tempIconClass);}
function addIdToIconContainer(event){let selectedIcon=event.target.firstChild;if(iconDeck.currentPair.length===0){selectedIcon.id=iconDeck.firstIconSelected;}else if(iconDeck.currentPair.length===1){selectedIcon.id=iconDeck.secondIconSelected;}}
function compareTiles(array){if(array[0]==array[1]){clearCurrentPair();removeSelectedIconsId();iconDeck.remainingCards-=2;return;}else if(array[0]!==array[1]){removeListener();hideIcons();clearCurrentPair();}}
function removeSelectedIconsId(){let firstIcon=document.getElementById('first-icon-selected');let secondIcon=document.getElementById('second-icon-selected');firstIcon.id='';secondIcon.id='';}
function decrementRemainingCards(num){return num-2;}
function clearCurrentPair(){iconDeck.currentPair=[];return;}
function addListener(){document.getElementById('table').addEventListener('click',eventResponses);}
function removeListener(){document.getElementById('table').removeEventListener('click',eventResponses);}
function addTimerListener(){document.getElementById('table').addEventListener('mouseup',timer.getStartTime);}
function removeStartTimeListener(){document.getElementById('table').removeEventListener('mouseup',timer.getStartTime);}
function addResetButton(){document.getElementById('reset-button').addEventListener('click',resetButton.resetGame)}
let eventResponses=function(event){moveCount.updateMoveCount(event);addIdToIconContainer(event);storeSelectedIconInfo(event);showIcon(event);};