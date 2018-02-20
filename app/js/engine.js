/*
 * This is the Engine for my card matching game.  Most of the application will reside here.
 */

/* The Engine function serves as a wrapper to  create a new lexical environment which will
 * prevent collision with the global object. The function is immediately invoked and passed
 * the areguement 'this'. By doing so we will retain the ability to access the global object
 * when necessary.
 */
let Engine = (function(global) {


    /* Now that a new lexical environment has been created, we can declare or define variables
     * that will be accessible throughout the entire Engine script. Like Dom selections.
     */
    let cardDeck = new Array,
        doc = global.document,
        win = global.window,
        canvas = newElem('canvas'),
        context = doc.getContext('2d'),

        

    /* The game loop function will loop continuously using requestanimationframe(). It will also
     * call update and render functions to continuously update the game board based on a users
     * action.
     */

    function gameLoop () {

        update();
        render();


        win.requestAnimationFrame(gameLoop);
    }

    /* With our variables setup, we can now move to the init function. This function is
     * responsible for setting up the initial game when the page is loaded.  At the end, this
     * function will kickoff the gameloop.
     */

    function init() {

        // Shuffle the face card array and store it in a new array
        let currentFaceCardArray = new Array;
        currentFaceCardArray = shuffleCards(frontOfCardSrc);
        // Create 8 objects and attach a face card image to the key frontOfCard
        for (i = 0; i < 8; ++i) {
            cardDeck[i] = new Card(currentFaceCardArray[i]);
            console.log('ran');
        }


        gameLoop();
    }


    /* Now we need to define our update function. This function will mainpulate all the variables
     * necessary to make the game functional.
     */

    function update() {
    	return
    }

    /* After the necessary data has been manipulated by our update function, we use the render
     * function to update the screen
     */

    function render() {
    	return
    }



})(this);