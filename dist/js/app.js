const gameBoard={createGameBoard:function(deck){let currentDeck=deck;let section=document.createElement('section');section.setAttribute('id','gameBoard');let row=4;let col=4;let newTable=createTable(row,col,currentDeck);return newTable;},};const iconDeck={currentPair:[],checkedLastPair:false,remainingCards:16,firstIconSelected:'first-icon-selected',secondIconSelected:'second-icon-selected',fAArr:['<i class="fas fa-bomb fa-3x"></i>','<i class="fas fa-bomb fa-3x"></i>','<i class="fas fa-beer fa-3x"></i>','<i class="fas fa-beer fa-3x"></i>','<i class="fas fa-bug fa-3x"></i>','<i class="fas fa-bug fa-3x"></i>','<i class="fas fa-fighter-jet fa-3x"></i>','<i class="fas fa-fighter-jet fa-3x"></i>','<i class="fas fa-camera-retro fa-3x"></i>','<i class="fas fa-camera-retro fa-3x"></i>','<i class="fas fa-fire fa-3x"></i>','<i class="fas fa-fire fa-3x"></i>','<i class="fas fa-trophy fa-3x"></i>','<i class="fas fa-trophy fa-3x"></i>','<i class="fas fa-space-shuttle fa-3x"></i>','<i class="fas fa-space-shuttle fa-3x"></i>'],shuffleIcons:function(array){let index=array.length;let temporaryElement='';let randomIndex=0;while(0!==index){randomIndex=Math.floor(Math.random()*index);index-=1;temporaryElement=array[index];array[index]=array[randomIndex];array[randomIndex]=temporaryElement;}
return array;},createIconObj:function(singleIcon){let icon={fillColor:'#EF550FFF',tileIcon:singleIcon,};return icon;},createDeck:function(iconArr){let newDeck=[];let shuffledDeck=this.shuffleIcons(iconArr);for(var elem of iconArr){let tempIconObj=this.createIconObj(elem);newDeck.push(tempIconObj);}
return newDeck;}};const moveCount={currentMoveCount:0,updateMoveCount:function(event){let checkIfIconIsShowing=event.target.firstChild.classList.contains('show-card');let checkIfIconIsHidden=event.target.firstChild.classList.contains('hide-card');if(checkIfIconIsShowing){return;}
if(checkIfIconIsHidden){moveCount.currentMoveCount+=1;}},updateDOM:function(element){element.innerText=moveCount.currentMoveCount;}};const timer={startTime:0,currentTime:0,minutes:0,seconds:0,td:0,getStartTime:function(){timer.startTime=Date.now();removeStartTimeListener();},getCurrentTime:function(){timer.currentTime=Date.now();},keepTime:function(){timer.td=timer.currentTime-timer.startTime;timer.convertTime(timer.td);},convertTime(td){timer.seconds=Math.floor(td / 1000);if(timer.seconds===60){timer.seconds=0;timer.minutes+=1;timer.getCurrentTime();timer.getStartTime();}},updateDOMTimer:function(element){element.innerText=`${timer.minutes}:${timer.seconds}`;if(timer.minutes===0&&timer.seconds===0){element.innerText=`00:00`;}else if(timer.minutes===0&&timer.seconds<10){element.innerText=`00:0${timer.seconds}`;}else if(timer.minutes===0&&timer.seconds>=10){element.innerText=`00:${timer.seconds}`;}else if(timer.minutes>=1&&timer.seconds<10){element.innerText=`0${timer.minutes}:0${timer.seconds}`;}else if(timer.minutes>=1&&timer.minutes<10){element.innerText=`0${timer.minutes}:${timer.seconds}`;}else{element.innerText=`${timer.minutes}:${timer.seconds}`;}}};const starRating={checkedStarRating:false,tempMoveCount:0,prevMoveCount:0,starRatingHTML:'<i class="rating fas fa-star"></i>',currentStarRating:3,updateDOM:function(element,ratingNumber){switch(ratingNumber){case 3:{element.innerHTML=starRating.starRatingHTML+
starRating.starRatingHTML+
starRating.starRatingHTML;break;}
case 2:{element.innerHTML=starRating.starRatingHTML+
starRating.starRatingHTML;break;}
case 1:{element.innerHTML=starRating.starRatingHTML;break;}
case 0:{element.innerHTML='';break;}
default:{break;}}}};const resetButton={restartGame:false,buttonHTML:'<i class="fas fa-redo"></i>',updateDOM:function(element){element.innerHTML=resetButton.buttonHTML;},resetGame:function(event){resetButton.restartGame=true;},clearGameData:function(moveCounterElem,timerElem,starRatingElem){moveCount.currentMoveCount=0;timer.minutes=0;timer.seconds=0;starRating.currentStarRating=3;starRating.checkedStarRating=false;starRating.tempMoveCount=0;iconDeck.currentPair=[];iconDeck.remainingCards=16;}};const winnerModal={finalMoveCount:0,finalTime:0,finalStarRating:'',saveWinningData:function(moveCountElem,timerElem,starRatingElem){winnerModal.finalMoveCount=moveCountElem.innerText;winnerModal.finalTime=timerElem.innerText;winnerModal.finalStarRating=starRatingElem.innerHTML;},resetWinningData:function(){winnerModal.finalMoveCount=0;winnerModal.finalTime=0;winnerModal.finalStarRating='';},updateModalContent:function(moveCount,time,starRating){let moveCountElem=document.getElementById('winning-move-count');let timerElem=document.getElementById('winning-time');let ratingElem=document.getElementById('winning-star-rating');moveCountElem.innerText=`${moveCount}Moves`;timerElem.innerText=time;ratingElem.innerHTML=starRating;},displayModal:function(){document.getElementById('winner-modal').classList.add('show-modal');},closeModal:function(){console.log(document.getElementById('winner-modal').classList);document.getElementById('winner-modal').classList.remove('show-modal');}};