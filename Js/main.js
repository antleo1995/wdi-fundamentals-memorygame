
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped" + " " + cardsInPlay[0]); 
console.log("User flipped" + " " + cardsInPlay[1]); 
console.log(cardsInPlay.length);

if (cardsInPlay.length === 2) {
	console.log("getting there");
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert ("You found a match!");
	} else {
		alert ("Sorry, try again.")
	}
}


//comment to save