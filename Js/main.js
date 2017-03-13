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

//first checks array length and if long enough executes code to compare cards
var checkForMatch= function (){
if (cardsInPlay.length === 2 ) {	
		//console.log("enough cards");
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert ("You found a match!");
		} else {
			alert ("Sorry, try again.")
		}

	} else {
	    console.log("Keep flipping!")
	}
}
//Writes to console card flipped and runs checkForMatch
var flipCard = function (cardId){
	console.log ("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch();
	}

flipCard(0);
flipCard(2);