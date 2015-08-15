/* Empty Grid to reset game when user win or tie happens
var empty_grid = {
    "r1-c1", "r1-c2", "r1-c3",
    "r2-c1", "r2-c2", "r2-c3",
    "r3-c1", "r3-c2", "r3-c3"
};
// Grid with all possible combinations
var winner_combinations = {
    ["r1-c1", "r1-c2", "r1-c3"],// Winning Rows
    ["r2-c1", "r2-c2", "r2-c3"],
    ["r3-c1", "r3-c2", "r3-c3"],
    ["r1-c1", "r2-c1", "r3-c1"],// Winning Cols
    ["r1-c2", "r2-c2", "r3-c2"],
    ["r1-c3", "r2-c3", "r3-c3"],
    ["r1-c1", "r2-c2", "r3-c3"],// Winning Crosses
    ["r1-c3", "r2-c2", "r3-c1"]
};
*/



var empty_grid = [
    "r1-c1", "r1-c2", "r1-c3",
    "r2-c1", "r2-c2", "r2-c3",
    "r3-c1", "r3-c2", "r3-c3"
];
// Grid with all possible combinations
var winner_combinations = [
    ["r1-c1", "r1-c2", "r1-c3"],// Winning Rows
    ["r2-c1", "r2-c2", "r2-c3"],
    ["r3-c1", "r3-c2", "r3-c3"],
    ["r1-c1", "r2-c1", "r3-c1"],// Winning Cols
    ["r1-c2", "r2-c2", "r3-c2"],
    ["r1-c3", "r2-c3", "r3-c3"],
    ["r1-c1", "r2-c2", "r3-c3"],// Winning Crosses
    ["r1-c3", "r2-c2", "r3-c1"]
];


var newGameBoard = empty_grid;
var winningMovementBoard = winner_combinations;

newGameBoard = [
    "x", "x", "x",
    "r2-c1", "o", "r2-c3",
    "r3-c1", "o", "r3-c3"
];

var winningMovementBoard = [
    ["x", "x", "r1-c3"],// Winning Rows
    ["r2-c1", "o", "r2-c3"],
    ["r3-c1", "o", "r3-c3"],
    ["x", "r2-c1", "r3-c1"],// Winning Cols
    ["x", "o", "o"],
    ["x", "r2-c3", "r3-c3"],
    ["x", "o", "r3-c3"],// Winning Crosses
    ["x", "o", "r3-c1"]
];

// New game = copy empty_grip into newGameBoard var && copy winner_combinations into movements var
// user1 move = replace r1-c1 for "user1" in newGameBoard and at the same time in movement Object as many time as found
// Check if there is a winnig combination in any of the arrays inside movements Object (if every element is same array are equals)
// if find 3 same user move, finish game and give one point to user. Send to starting again.
// if not continue
console.log(empty_grid.length);
function getMovement()
{
  for(i = 0 ; i < empty_grid.length; i++)
  {
    squareId = empty_grid[i];
    var inputMove = document.getElementById(squareId);
    
    inputMove.addEventListener("click", function()
    {
        var square = document.getElementById(squareId).value;
        console.log(square);
    });
  }

}


// Recording player selection
function saveMove(squareId, square){ 
  // Firstly update move into newGameBoard
  for(i = 0; i < newGameBoard.length; i++){
    (newGameBoard[i] === squareId)? newGameBoard[i] = square : newGameBoard[i] = newGameBoard[i];
  };
  // Secondly update move into winningMovementBoard
  for(i = 0; i < winningMovementBoard.length; i++){
    var element = winningMovementBoard[i];
    for(e = 0; e < element.length; e++){
      (element[e] === squareId)? element[e] = square : element[e] = element[e];
    };
  };
};

// Checking if a player won
function checkingForWinner(){
  var player;
  for(i = 0; i < winningMovementBoard.length; i++){
    var element = winningMovementBoard[i];
    ((element[0] === element[1]) &&  (element[0] === element[2]))? player = "won" : player = "next";
    if(player === "won"){ return player; };
  };
  return player;
};
checkingForWinner();

// Checking for end of game
function checkingForEndGame(){
  var endOfGame;   
  for(i = 0; i < newGameBoard.length; i++){  
    result = newGameBoard[i];
    if((result === "x") || (result === "o")){
      // If board is full It's the end of the game
      var endOfGame = 1;
    }
    else{ // If not continue
      return endOfGame = 0;
    }
  };
  return endOfGame;
};
checkingForEndGame();

getMovement();












