var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = []; //this will hold the cards that are in play

var cardOne = cards[0]; //represents the first card that the user flipped
cardsInPlay.push(cardOne);

var cardTwo = cards[3];
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	} else {alert("Sorry, try again")
}};

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);