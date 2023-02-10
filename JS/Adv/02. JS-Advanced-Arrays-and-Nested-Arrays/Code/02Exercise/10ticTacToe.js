function ticTacToe(input) {
    // create initial array
    let field = [];
    let player = 'X'; // starting with player 'X'

    for (let i = 0; i < 3; i++) {
        let row = [];

        for (let z = 0; z < 3; z++) {
            row.push('false');
        }

        field.push(row);
    }

    // upon each move, modify matrix:
    for (let move of input) {
        // parse the move
        let [row, column] = move.split(' ').map((el) => Number(el));
        let currentPlace = field[row][column];
        // console.log(row, column); // SERVICE print

        // - check if a place is taken:
        if (currentPlace !== 'false') {
            // -- if yes -> print message and make next move for the same player, e.g. don't change it
            console.log(`This place is already taken. Please choose another!`);
        } else {
            // -- if no:
            // --- take that cell of the field for current player
            field[row][column] = player;
            // --- and change the player
            player === 'X' ? (player = 'O') : (player = 'X');
        }

        // - check if a player wins (which player ?!?):
        let rowResult = rowWin(field);
        let columnResult = columnWin(field);
        let diagonalResult = diagonalWin(field);
        let winner = '';

        if (rowResult !== false) {
            winner = rowResult;
        }

        if (columnResult !== false) {
            winner = columnResult;
        }

        if (diagonalResult !== false) {
            winner = diagonalResult;
        }

        // -- if YES -> print "Player {x} wins!" with current field and END the game
        let shouldEnd = false;
        if (winner !== '') {
            console.log(`Player ${winner} wins!`);
            shouldEnd = true;
        } else {
            // -- if NO -> check if free spaces left in the field, e.g. there are elements == 'false'
            let canContinue = false;
            for (let row of field) {
                for (let element of row) {
                    if (element === 'false') {
                        // -- if yes -> continue with next move
                        canContinue = true;
                        break;
                    }
                }
            }

            // -- if no -> print "The game ended! Nobody wins :(" and END the game
            if (canContinue === false) {
                console.log('The game ended! Nobody wins :(');
                shouldEnd = true;
            }
        }

        if (shouldEnd) {
            field.forEach((row) => console.log(row.join('\t')));
            return;
        }
    }

    // -- check all rows function
    function rowWin(matrix) {
        for (let row of matrix) {
            let result = row.reduce((acc, value) => {
                if (acc === value) {
                    return acc;
                }
            });

            if (result !== undefined && result !== 'false') {
                return result;
            }
        }

        return false;
    }

    // -- check all columns function
    function columnWin(matrix) {
        let arr = [];

        for (let column = 0; column < matrix.length; column++) {
            for (let row = 0; row < matrix.length; row++) {
                // create array from a column(transponse row to column)
                arr.push(matrix[row][column]);
            }

            let result = arr.reduce((acc, element) => {
                if (acc === element) {
                    return acc;
                }
            });

            if (result !== undefined && result !== 'false') {
                return result;
            }

            arr = []; // empty arr for next cycle
        }

        return false;
    }

    // -- check two diagonals
    function diagonalWin(matrix) {
        let diagonalToBottom = [matrix[0][0], matrix[1][1], matrix[2][2]];
        let diagonalToTop = [matrix[0][2], matrix[1][1], matrix[2][0]];

        let resultToBottom = diagonalToBottom.reduce((acc, el) => {
            if (acc === el) {
                return acc;
            }
        });

        let resultToTop = diagonalToTop.reduce((acc, el) => {
            if (acc === el) {
                return acc;
            }
        });

        if (resultToBottom !== undefined && resultToBottom !== 'false') {
            return resultToBottom;
        }

        if (resultToTop !== undefined && resultToTop !== 'false') {
            return resultToTop;
        }

        return false;
    }
}

/* // TESTS
// DIAGONAL test
ticTacToe([
    '0 2', // X takes it, change to O
    '0 1', // O takes it, change to X
    '0 1', // change to O
    '1 1', // O takes it, change to X
    '1 1', // change to O
    '2 1', // O takes it, change to X
]);
// COLUMN test
ticTacToe([
    '0 2', // X takes it, change to O
    '0 2', // change to X
    '1 2', // X takes it, change to O
    '1 2', // change to X
    '2 2', // X takes it, change to O
]);
console.log('--------');
// ROW test
ticTacToe([
    '1 0', // X takes it, change to O
    '1 0', // change to X
    '1 1', // X takes it, change to O
    '1 1', // change to X
    '1 2', // X takes it, change to O
]);
 */

ticTacToe([
    '0 1',
    '0 0',
    '0 2',
    '2 0',
    '1 0',
    '1 1',
    '1 2',
    '2 2',
    '2 1',
    '0 0',
]);
// Player O wins!
// O	X	    X
// X	O	    X
// O	false	O
console.log('----------------------------------');
ticTacToe([
    '0 0',
    '0 0',
    '1 1',
    '0 1',
    '1 2',
    '0 2',
    '2 2',
    '1 2',
    '2 2',
    '2 1',
]);
// This place is already taken. Please choose another!
// Player X wins!
// X	    X	    X
// false	O	    O
// false	false	false
console.log('----------------------------------');
ticTacToe([
    '0 1',
    '0 0',
    '0 2',
    '2 0',
    '1 0',
    '1 2',
    '1 1',
    '2 1',
    '2 2',
    '0 0',
]);
// The game ended! Nobody wins :(
// O   X   X
// X   X   O
// O   O   X
