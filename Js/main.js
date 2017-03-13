var cards = ["queen", "queen", "king", "king"];
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
	console.log ("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
	}

flipCard(0);
flipCard(2);