//var cardOne = "queen";
//var cardTwo = "king";
//var cardThree = "king";
//var cardFour = "queen";

/*if (cardOne === cardFour) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
}
*/

var board = document.getElementById('game-board');
function createBoard() {
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    board.appendChild(cardElement);
  }
}