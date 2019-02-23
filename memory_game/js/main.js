var cards = ["queen", "queen", "king", "king"]; // the four cards that we have named
var cardsInPlay = []; //this will hold the cards that are in play

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	} else {alert("Sorry, try again")
}}
}

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}

flipCard(0);
flipCard(2);


// got stuck for ages on the 1st function

