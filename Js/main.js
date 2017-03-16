//declaring card object array
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}

];
var cardsInPlay = [];

//function - first checks array length and if long enough executes code to compare cards
var checkForMatch= function (){
if (cardsInPlay.length === 2 ) {	
		//console.log("enough cards"); - code check for if things were working
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert ("You found a match!");
		} else {
			alert ("Sorry, try again.")
		}

	} else {
	    console.log("Keep flipping!")
	}
}
//function - get data id of card, adds to cards played and checks for match
var flipCard = function (){
		cardId = this.getAttribute('data-id');
		console.log(cardId);
		this.setAttribute("src", cards[cardId].cardImage);
		console.log ("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
		cardsInPlay.push(cards[cardId].rank);
		//run check
		checkForMatch();
	}
//create the board of cards
var createBoard = function (){
	for (i = 0; i < cards.length; i++)
	{
		var cardElement = document.createElement("img");
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
		//a check i put in place to see the board being built
		console.log("Adding Card " + i);
	}
}
//creates the cards
createBoard();