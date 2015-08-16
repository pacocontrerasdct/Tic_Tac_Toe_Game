// Empty Grid to reset game when user win or tie happens
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

// New game = copy empty_grip into newGameBoard var && copy winner_combinations into movements var
// user1 move = replace r1-c1 for "user1" in newGameBoard and at the same time in movement Object as many time as found
// Check if there is a winnig combination in any of the arrays inside movements Object (if every element is same array are equals)
// if find 3 same user move, finish game and give one point to user. Send to starting again.
// if not continue

function newGame(){
  // Declare new variables to deal in every new game
  var newGameBoard = empty_grid;
  var winningMovementBoard = winner_combinations;
  var turnXorO = 'X';
  var squareId;

  placingListeners(newGameBoard, winningMovementBoard, turnXorO);


};

// PLacing Listeners events in every div tag class .square
function placingListeners(newGameBoard, winningMovementBoard, turnXorO){

    squareId0 = newGameBoard[0];
    var listener = function() {
        Id = squareId0;
        turnXorO === "O"? turnXorO = 'X' : turnXorO = 'O';
        Id = document.getElementById(Id);
        Id.innerHTML = '<div class="square">' + turnXorO + '</div>';
        
        var sqr = squareId0;
        saveMove(sqr, turnXorO, newGameBoard, winningMovementBoard);
        player = checkingForWinner(winningMovementBoard);
        endOfGame = checkingForEndGame(newGameBoard);
        if(player === 'won'){
          // Updating score

          alert('Player ' + turnXorO + ' won');
          return;
        }
        if(endOfGame === 1){
          // Updating score

          alert('Nobody won this game');
          return;
        }

    };
    document.getElementById(squareId0).addEventListener('click', listener, false);
    document.getElementById(squareId0).removeEventListener('click', listener, true);

    squareId1 = newGameBoard[1];
    var listener = function() {
        Id = squareId1;
        turnXorO === "O"? turnXorO = 'X' : turnXorO = 'O';
        Id = document.getElementById(Id);
        Id.innerHTML = '<div class="square">' + turnXorO + '</div>';
        
        var sqr = squareId1;
        saveMove(sqr, turnXorO, newGameBoard, winningMovementBoard);
        player = checkingForWinner(winningMovementBoard);
        endOfGame = checkingForEndGame(newGameBoard);
        if(player === 'won'){
          // Updating score

          alert('Player ' + turnXorO + ' won');
          return;
        }
        else if(endOfGame === 1){
          // Updating score

          alert('Nobody won this game');
          return;
        }
        else{}
    };
    document.getElementById(squareId1).addEventListener('click', listener, false);
    document.getElementById(squareId1).removeEventListener('click', listener, true);

    squareId2 = newGameBoard[2];
    var listener = function() {
        Id = squareId2;
        turnXorO === "O"? turnXorO = 'X' : turnXorO = 'O';
        Id = document.getElementById(Id);
        Id.innerHTML = '<div class="square">' + turnXorO + '</div>';
        
        var sqr = squareId2;
        saveMove(sqr, turnXorO, newGameBoard, winningMovementBoard);
        player = checkingForWinner(winningMovementBoard);
        endOfGame = checkingForEndGame(newGameBoard);
        if(player === 'won'){
          // Updating score

          alert('Player ' + turnXorO + ' won');
          return;
        }
        else if(endOfGame === 1){
          // Updating score

          alert('Nobody won this game');
          return;
        }
        else{}
    };
    document.getElementById(squareId2).addEventListener('click', listener, false);
    document.getElementById(squareId2).removeEventListener('click', listener, true);

    squareId3 = newGameBoard[3];
    var listener = function() {
        Id = squareId3;
        turnXorO === "O"? turnXorO = 'X' : turnXorO = 'O';
        Id = document.getElementById(Id);
        Id.innerHTML = '<div class="square">' + turnXorO + '</div>';
        
        var sqr = squareId3;
        saveMove(sqr, turnXorO, newGameBoard, winningMovementBoard);
        player = checkingForWinner(winningMovementBoard);
        endOfGame = checkingForEndGame(newGameBoard);
        if(player === 'won'){
          // Updating score

          alert('Player ' + turnXorO + ' won');
          return;
        }
        else if(endOfGame === 1){
          // Updating score

          alert('Nobody won this game');
          return;
        }
        else{}
    };
    document.getElementById(squareId3).addEventListener('click', listener, false);
    document.getElementById(squareId3).removeEventListener('click', listener, true);

    squareId4 = newGameBoard[4];
    var listener = function() {
        Id = squareId4;
        turnXorO === "O"? turnXorO = 'X' : turnXorO = 'O';
        Id = document.getElementById(Id);
        Id.innerHTML = '<div class="square">' + turnXorO + '</div>';
        
        var sqr = squareId4;
        saveMove(sqr, turnXorO, newGameBoard, winningMovementBoard);
        player = checkingForWinner(winningMovementBoard);
        endOfGame = checkingForEndGame(newGameBoard);
        if(player === 'won'){
          // Updating score

          alert('Player ' + turnXorO + ' won');
          return;
        }
        else if(endOfGame === 1){
          // Updating score

          alert('Nobody won this game');
          return;
        }
        else{}
    };
    document.getElementById(squareId4).addEventListener('click', listener, false);
    document.getElementById(squareId4).removeEventListener('click', listener, true);

    squareId5 = newGameBoard[5];
    var listener = function() {
        Id = squareId5;
        turnXorO === "O"? turnXorO = 'X' : turnXorO = 'O';
        Id = document.getElementById(Id);
        Id.innerHTML = '<div class="square">' + turnXorO + '</div>';
        
        var sqr = squareId5;
        saveMove(sqr, turnXorO, newGameBoard, winningMovementBoard);
        player = checkingForWinner(winningMovementBoard);
        endOfGame = checkingForEndGame(newGameBoard);
        if(player === 'won'){
          // Updating score

          alert('Player ' + turnXorO + ' won');
          return;
        }
        else if(endOfGame === 1){
          // Updating score

          alert('Nobody won this game');
          return;
        }
        else{}
    };
    document.getElementById(squareId5).addEventListener('click', listener, false);
    document.getElementById(squareId5).removeEventListener('click', listener, true);    

    squareId6 = newGameBoard[6];
    var listener = function() {
        Id = squareId6;
        turnXorO === "O"? turnXorO = 'X' : turnXorO = 'O';
        Id = document.getElementById(Id);
        Id.innerHTML = '<div class="square">' + turnXorO + '</div>';
        
        var sqr = squareId6;
        saveMove(sqr, turnXorO, newGameBoard, winningMovementBoard);
        player = checkingForWinner(winningMovementBoard);
        endOfGame = checkingForEndGame(newGameBoard);
        if(player === 'won'){
          // Updating score

          alert('Player ' + turnXorO + ' won');
          return;
        }
        else if(endOfGame === 1){
          // Updating score

          alert('Nobody won this game');
          return;
        }
        else{}
    };
    document.getElementById(squareId6).addEventListener('click', listener, false);
    document.getElementById(squareId6).removeEventListener('click', listener, true);

    squareId7 = newGameBoard[7];
    var listener = function() {
        Id = squareId7;
        turnXorO === "O"? turnXorO = 'X' : turnXorO = 'O';
        Id = document.getElementById(Id);
        Id.innerHTML = '<div class="square">' + turnXorO + '</div>';
        
        var sqr = squareId7;
        saveMove(sqr, turnXorO, newGameBoard, winningMovementBoard);
        player = checkingForWinner(winningMovementBoard);
        endOfGame = checkingForEndGame(newGameBoard);
        if(player === 'won'){
          // Updating score

          alert('Player ' + turnXorO + ' won');
          return;
        }
        else if(endOfGame === 1){
          // Updating score

          alert('Nobody won this game');
          return;
        }
        else{}
    };
    document.getElementById(squareId7).addEventListener('click', listener, false);
    document.getElementById(squareId7).removeEventListener('click', listener, true);

    squareId8 = newGameBoard[8];
    var listener = function() {
        Id = squareId8;
        turnXorO === "O"? turnXorO = 'X' : turnXorO = 'O';
        Id = document.getElementById(Id);
        Id.innerHTML = '<div class="square">' + turnXorO + '</div>';
        
        var sqr = squareId8;
        saveMove(sqr, turnXorO, newGameBoard, winningMovementBoard);
        player = checkingForWinner(winningMovementBoard);
        endOfGame = checkingForEndGame(newGameBoard);
        if(player === 'won'){
          // Updating score

          alert('Player ' + turnXorO + ' won');
          return;
        }
        else if(endOfGame === 1){
          // Updating score

          alert('Nobody won this game');
          return;
        }
        else{}
    };
    document.getElementById(squareId8).addEventListener('click', listener, false);
    document.getElementById(squareId8).removeEventListener('click', listener, true);
};

newGame();



/*************************************************
function checkInputId(inputId){
  var Id = document.getElementById(inputId);
  var inputMove = document.getElementsByName(Id)[0];
  return parent.innerHTML = '<div class="noInput">' + inputMove + '</div>';
}
*/
// Result of using this function
//checkInputId("r1-c1");
//console  ->>>    "<div class="noInput">r1-c1</div>"

    /*
function getMovement()
{
  var square = "square";
  var parent = document.getElementsByClassName(square)[4];
  var inputTag = document.getElementsByTagName("input");

  parent.addEventListener("click", function() {
        alert(parent);

    squareId = empty_grid[4];
    var inputMove = document.getElementsByName(squareId)[0];
    console.log(inputMove);

    // Change content inside a parent
     parent.innerHTML = '<div class="noInput">' + square + '</div>';

    alert(inputMove.value);

    inputMove[0].addEventListener("click", function()
    {
        var square = inputMove.value;   
        console.log(square);
        square.innerHTML = '<p>ES UNA X</p>';
    });
    //var square = this.elements[squareId].value;
    console.log(square);

  });
}
    */

// Saving player selection
function saveMove(sqr, turnXorO, newGameBoard, winningMovementBoard){
  var squareId = sqr; 
  var square = turnXorO; 
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
  console.log(newGameBoard);
  console.log(winningMovementBoard);
};

// Checking if a player won
function checkingForWinner(winningMovementBoard){
  var player;
  for(i = 0; i < winningMovementBoard.length; i++){
    var element = winningMovementBoard[i];
    ((element[0] === element[1]) &&  (element[0] === element[2]))? player = "won" : player = "next";
    if(player === "won"){ return player; };
  };
  return player;
};


// Checking for end of game
function checkingForEndGame(newGameBoard){
  var endOfGame;
  for(i = 0; i < newGameBoard.length; i++){  
    result = newGameBoard[i];
    if(result !== 'X' && result !== 'O'){
      endOfGame = 0;
    }else{
      endOfGame = 1;
    }  
  };
  return endOfGame;
};













