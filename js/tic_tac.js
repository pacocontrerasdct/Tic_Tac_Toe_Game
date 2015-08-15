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


var newGame = empty_grid;
var movements = winner_combinations;

newGame = [
    "x", "x", "x",
    "r2-c1", "o", "r2-c3",
    "r3-c1", "o", "r3-c3"
];

var movements = {
    ["x", "x", "x"],// Winning Rows
    ["r2-c1", "o", "r2-c3"],
    ["r3-c1", "o", "r3-c3"],
    ["x", "r2-c1", "r3-c1"],// Winning Cols
    ["x", "o", "o"],
    ["x", "r2-c3", "r3-c3"],
    ["x", "o", "r3-c3"],// Winning Crosses
    ["x", "o", "r3-c1"]
};

// New game = copy empty_grip into newGame var
// user1 move = replace r1-c1 for "user1" in newGame and at the same time in movement Object as many time as found
// Check if there is a winnig combination in any of the arrays inside movements Object (if every element is same array are equals)
// if find 3 same user move, finish game and give one point to user. Send to starting again.
// if not continue












