// Empty Array (grid) to reset game when one user win or tie happens
///////////////////////////////////////
var empty_grid = [
    "r1-c1", "r1-c2", "r1-c3",
    "r2-c1", "r2-c2", "r2-c3",
    "r3-c1", "r3-c2", "r3-c3"
];

// Grid with all possible combinations
/////////////////////////////////////////
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
//  Array for score results: Xs, Os, Ts
/////////////////////////////////////
var scoring = [ 0, 0, 0];

// Saving player selection: Save at both arrays (newGameBoard copy of empty_grid,
// and in winningMovementBoard copy of winner_combinations)
////////////////////////////////////////////////
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
};

// Checking if a player won: going to winningMovementBoard and
// looking for an array with 3 same characters (X or O)
/////////////////////////////////////////
function checkingForWinner(winningMovementBoard){
  var player;
  for(i = 0; i < winningMovementBoard.length; i++){
    var element = winningMovementBoard[i];
    // checking if all elements are the same in my winning board
    ((element[0] === element[1]) &&  (element[0] === element[2]))? player = "won" : player = "next";
    if(player === "won"){ return player; };
  };
  return player;
};

// Checking for end of game: if newGameBoard is full of X or O, it's the end
////////////////////////////////////////////////
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



// Reseting game
//////////////////////////////////////////////
function buttonReset(){
  var buttonResetting = document.getElementById("reseting");
  clickButton.addEventListener("click", function()
  {
    // Control Variables
    /////////////////////////////
    var scoreX = 0;
    var scoreO = 0;
    var scoreT = 0;
    // Declare new variables to deal in every new game
      var newGameBoard = empty_grid;
      var winningMovementBoard = winner_combinations;
    // By default always 'O' player is going to start:
    // I'm going to compare against var 'X'   
      var turnXorO = 'X';
      var squareId;

      newGame(scoreX, scoreO, scoreT, newGameBoard, winningMovementBoard, turnXorO, squareId);
  });
};

// Updating Score function
////////////////////////////////////////////////
function updateScore(turnXorO){
  switch(turnXorO){
    case 'X':
      scorer = 'scoreX'; // who
      scoring[0] =+ 1; // Update array
      winner = scoring[0]; // Update in HTML
      break;
    case 'O':
      score = 'scoreO';
      scoring[1] =+ 1;
      winner = scoring[1];
      break;
    case 'T':
      score = 'scoreT';
      scoring[2] =+ 1;
      winner = scoring[2];
      break;
  }
  update = document.getElementById(score); // Update in HTML
  update.innerHTML = winner;
};

function newGame(){  

  // Control Variables
  /////////////////////////////
  var scoreX = 0;
  var scoreO = 0;
  var scoreT = 0;
  // Declare new variables to deal in every new game
    var newGameBoard = empty_grid;
    var winningMovementBoard = winner_combinations;
  // By default always 'O' player is going to start:
  // I'm going to compare against var 'X'   
    var turnXorO = 'X';
    var squareId;

  // Place listeners inside of Divs, or Squares
  placingListeners(newGameBoard, winningMovementBoard, turnXorO);
};

// PLacing Listeners events in every div's tag class type
function placingListeners(newGameBoard, winningMovementBoard, turnXorO){
var empty_grid = [
    "r1-c1", "r1-c2", "r1-c3",
    "r2-c1", "r2-c2", "r2-c3",
    "r3-c1", "r3-c2", "r3-c3"
];
    var squareId0 = newGameBoard[0];
    var listener = function() {
        Id = squareId0;
        turnXorO === "O"? turnXorO = 'X' : turnXorO = 'O';
        Id = document.getElementById(Id);
        Id.innerHTML = '<div class="square" id="' + squareId0 + '" name="' + squareId0 + '">' + turnXorO + '</div>';
        
        var sqr = squareId0;
        saveMove(sqr, turnXorO, newGameBoard, winningMovementBoard);
        player = checkingForWinner(winningMovementBoard);
        endOfGame = checkingForEndGame(newGameBoard);
        if(player === 'won'){
          // Updating score
          updateScore(turnXorO);
          alert('Player ' + turnXorO + ' won');
          newGame();
        }
        else if(endOfGame === 1){
          // Updating score
          updateScore(turnXorO);
          alert('Nobody won this game');
          newGame();
        }
        else{}
    };
    squareId0 = empty_grid[0];
    document.getElementById(squareId0).addEventListener('click', listener, false);
    document.getElementById(squareId0).removeEventListener('click', listener, true);

    squareId1 = newGameBoard[1];
    var listener = function() {
        Id = squareId1;
        turnXorO === "O"? turnXorO = 'X' : turnXorO = 'O';
        Id = document.getElementById(Id);
        Id.innerHTML = '<div class="square" id="' + squareId1 + '" name="' + squareId1 +'">' + turnXorO + '</div>';
        
        var sqr = squareId1;
        saveMove(sqr, turnXorO, newGameBoard, winningMovementBoard);
        player = checkingForWinner(winningMovementBoard);
        endOfGame = checkingForEndGame(newGameBoard);
        if(player === 'won'){
          // Updating score
          updateScore(turnXorO);
          alert('Player ' + turnXorO + ' won');
          newGame();
        }
        else if(endOfGame === 1){
          // Updating score
          updateScore(turnXorO);
          alert('Nobody won this game');
          newGame();
        }
        else{}
    };
    squareId1 = empty_grid[1];
    document.getElementById(squareId1).addEventListener('click', listener, false);
    document.getElementById(squareId1).removeEventListener('click', listener, true);

    squareId2 = newGameBoard[2];
    var listener = function() {
        Id = squareId2;
        turnXorO === "O"? turnXorO = 'X' : turnXorO = 'O';
        Id = document.getElementById(Id);
        Id.innerHTML = '<div class="square" id="' + squareId2 + '" name="' + squareId2 +'">' + turnXorO + '</div>';
        
        var sqr = squareId2;
        saveMove(sqr, turnXorO, newGameBoard, winningMovementBoard);
        player = checkingForWinner(winningMovementBoard);
        endOfGame = checkingForEndGame(newGameBoard);
        if(player === 'won'){
          // Updating score
          updateScore(turnXorO);
          alert('Player ' + turnXorO + ' won');
          newGame();
        }
        else if(endOfGame === 1){
          // Updating score
          updateScore(turnXorO);
          alert('Nobody won this game');
          newGame();
        }
        else{}
    };
    squareId2 = empty_grid[2];
    document.getElementById(squareId2).addEventListener('click', listener, false);
    document.getElementById(squareId2).removeEventListener('click', listener, true);

    squareId3 = newGameBoard[3];
    var listener = function() {
        Id = squareId3;
        turnXorO === "O"? turnXorO = 'X' : turnXorO = 'O';
        Id = document.getElementById(Id);
        Id.innerHTML = '<div class="square" id="' + squareId3 + '" name="' + squareId3 +'">' + turnXorO + '</div>';
        
        var sqr = squareId3;
        saveMove(sqr, turnXorO, newGameBoard, winningMovementBoard);
        player = checkingForWinner(winningMovementBoard);
        endOfGame = checkingForEndGame(newGameBoard);
        if(player === 'won'){
          // Updating score
          updateScore(turnXorO);
          alert('Player ' + turnXorO + ' won');
          newGame();
        }
        else if(endOfGame === 1){
          // Updating score
          updateScore(turnXorO);
          alert('Nobody won this game');
          newGame();
        }
        else{}
    };
    squareId3 = empty_grid[3];
    document.getElementById(squareId3).addEventListener('click', listener, false);
    document.getElementById(squareId3).removeEventListener('click', listener, true);

    squareId4 = newGameBoard[4];
    var listener = function() {
        Id = squareId4;
        turnXorO === "O"? turnXorO = 'X' : turnXorO = 'O';
        Id = document.getElementById(Id);
        Id.innerHTML = '<div class="square" id="' + squareId4 + '" name="' + squareId4 +'">' + turnXorO + '</div>';
        
        var sqr = squareId4;
        saveMove(sqr, turnXorO, newGameBoard, winningMovementBoard);
        player = checkingForWinner(winningMovementBoard);
        endOfGame = checkingForEndGame(newGameBoard);
        if(player === 'won'){
          // Updating score
          updateScore(turnXorO);
          alert('Player ' + turnXorO + ' won');
          newGame();
        }
        else if(endOfGame === 1){
          // Updating score
          updateScore(turnXorO);
          alert('Nobody won this game');
          newGame();
        }
        else{}
    };
    squareId4 = empty_grid[4];
    document.getElementById(squareId4).addEventListener('click', listener, false);
    document.getElementById(squareId4).removeEventListener('click', listener, true);

    squareId5 = newGameBoard[5];
    var listener = function() {
        Id = squareId5;
        turnXorO === "O"? turnXorO = 'X' : turnXorO = 'O';
        Id = document.getElementById(Id);
        Id.innerHTML = '<div class="square" id="' + squareId5 + '" name="' + squareId5 +'">' + turnXorO + '</div>';
        
        var sqr = squareId5;
        saveMove(sqr, turnXorO, newGameBoard, winningMovementBoard);
        player = checkingForWinner(winningMovementBoard);
        endOfGame = checkingForEndGame(newGameBoard);
        if(player === 'won'){
          // Updating score
          updateScore(turnXorO);
          alert('Player ' + turnXorO + ' won');
          newGame();
        }
        else if(endOfGame === 1){
          // Updating score
          updateScore(turnXorO);
          alert('Nobody won this game');
          newGame();
        }
        else{}
    };
    squareId5 = empty_grid[5];
    document.getElementById(squareId5).addEventListener('click', listener, false);
    document.getElementById(squareId5).removeEventListener('click', listener, true);    

    squareId6 = newGameBoard[6];
    var listener = function() {
        Id = squareId6;
        turnXorO === "O"? turnXorO = 'X' : turnXorO = 'O';
        Id = document.getElementById(Id);
        Id.innerHTML = '<div class="square" id="' + squareId6 + '" name="' + squareId6 +'">' + turnXorO + '</div>';
        
        var sqr = squareId6;
        saveMove(sqr, turnXorO, newGameBoard, winningMovementBoard);
        player = checkingForWinner(winningMovementBoard);
        endOfGame = checkingForEndGame(newGameBoard);
        if(player === 'won'){
          // Updating score
          updateScore(turnXorO);
          alert('Player ' + turnXorO + ' won');
          newGame();
        }
        else if(endOfGame === 1){
          // Updating score
          updateScore(turnXorO);
          alert('Nobody won this game');
          newGame();
        }
        else{}
    };
    squareId6 = empty_grid[6];
    document.getElementById(squareId6).addEventListener('click', listener, false);
    document.getElementById(squareId6).removeEventListener('click', listener, true);

    squareId7 = newGameBoard[7];
    var listener = function() {
        Id = squareId7;
        turnXorO === "O"? turnXorO = 'X' : turnXorO = 'O';
        Id = document.getElementById(Id);
        Id.innerHTML = '<div class="square" id="' + squareId7 + '" name="' + squareId7 +'">' + turnXorO + '</div>';
        
        var sqr = squareId7;
        saveMove(sqr, turnXorO, newGameBoard, winningMovementBoard);
        player = checkingForWinner(winningMovementBoard);
        endOfGame = checkingForEndGame(newGameBoard);
        if(player === 'won'){
          // Updating score
          updateScore(turnXorO);
          alert('Player ' + turnXorO + ' won');
          newGame();
        }
        else if(endOfGame === 1){
          // Updating score
          updateScore(turnXorO);
          alert('Nobody won this game');
          newGame();
        }
        else{}
    };
    squareId7 = empty_grid[7];
    document.getElementById(squareId7).addEventListener('click', listener, false);
    document.getElementById(squareId7).removeEventListener('click', listener, true);

    squareId8 = newGameBoard[8];
    var listener = function() {
        Id = squareId8;
        turnXorO === "O"? turnXorO = 'X' : turnXorO = 'O';
        Id = document.getElementById(Id);
        Id.innerHTML = '<div class="square" id="' + squareId8 + '" name="' + squareId8 +'">' + turnXorO + '</div>';
        
        var sqr = squareId8;
        saveMove(sqr, turnXorO, newGameBoard, winningMovementBoard);
        player = checkingForWinner(winningMovementBoard);
        endOfGame = checkingForEndGame(newGameBoard);
        if(player === 'won'){
          // Updating score
          updateScore(turnXorO);
          alert('Player ' + turnXorO + ' won');
          newGame();
        }
        else if(endOfGame === 1){
          // Updating score
          updateScore(turnXorO);
          alert('Nobody won this game');
          newGame();
        }
        else{}
    };
    squareId8 = empty_grid[8];
    document.getElementById(squareId8).addEventListener('click', listener, false);
    document.getElementById(squareId8).removeEventListener('click', listener, true);
};

newGame();















