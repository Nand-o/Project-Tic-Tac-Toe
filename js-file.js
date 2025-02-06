function makeGameBoard() {
    const board = {
        gameBoard: [
            "", "", "",
            "", "", "",
            "", "", "",
        ]
    }

    return board
}

function createUser(name, number) {
    const userName = name;
    let userMarker;

    if (number === 1) {
        userMarker = "X";
    } else if (number === 2) {
        userMarker = "O";
    }

    return { userName, userMarker };
}

function createPlayer(name, playerNum) {
    const user = createUser(name, playerNum);

    const playerName = user.userName;
    const playerMarker = user.userMarker;

    // const putMarker = function (pos) {
    //     board.gameBoard[pos] = playerMarker;
    // }

    return { playerName, playerMarker };
}

function putMarker(player, board, pos) {
    const marker = player.playerMarker;

    board[pos] = marker;

    return board
}

function cekWinner(board, marker) {
    if (board.gameBoard[0] === marker && board.gameBoard[1] === marker && board.gameBoard[2] === marker) {
        if (marker === "X") {
            console.log("Player 1 win");
        } else {
        console.log("Player 2 win");
        }
    } else if (board.gameBoard[0] === marker && board.gameBoard[4] === marker && board.gameBoard[8] === marker) {
        if (marker === "X") {
            console.log("Player 1 win");
        } else {
        console.log("Player 2 win");
        }
    } else if (board.gameBoard[0] === marker && board.gameBoard[3] === marker && board.gameBoard[6] === marker) {
        if (marker === "X") {
            console.log("Player 1 win");
        } else {
        console.log("Player 2 win");
        }
    } else if (board.gameBoard[2] === marker && board.gameBoard[4] === marker && board.gameBoard[6] === marker) {
        if (marker === "X") {
            console.log("Player 1 win");
        } else {
        console.log("Player 2 win");
        }
    } else if (board.gameBoard[2] === marker && board.gameBoard[5] === marker && board.gameBoard[8] === marker) {
        if (marker === "X") {
            console.log("Player 1 win");
        } else {
        console.log("Player 2 win");
        }
    } else if (board.gameBoard[6] === marker && board.gameBoard[7] === marker && board.gameBoard[8] === marker) {
        if (marker === "X") {
            console.log("Player 1 win");
        } else {
        console.log("Player 2 win");
        }
    } else if (board.gameBoard[3] === marker && board.gameBoard[4] === marker && board.gameBoard[5] === marker) {
        if (marker === "X") {
            console.log("Player 1 win");
        } else {
        console.log("Player 2 win");
        }
    } else if (board.gameBoard[1] === marker && board.gameBoard[4] === marker && board.gameBoard[7] === marker) {
        if (marker === "X") {
            console.log("Player 1 win");
        } else {
        console.log("Player 2 win");
        }
    }
}

function playRound(player, board, pos) {
    let boardRound = board.gameBoard;
    const playerRun = player;

    putMarker(playerRun, boardRound, pos);

    if (cekWinner(board, playerRun.playerMarker)) {
        exit
    }

    return boardRound
}

function gameStart(player1, player2) {
    let gameBoard = makeGameBoard();


    

}

function testGame() {
    let testBoard = makeGameBoard();
    console.log(testBoard)

    const udin = createPlayer("udin", 1);
    const hamim = createPlayer("hamim", 2);

    console.log(testBoard.gameBoard);

    testBoard.gameBoard = playRound(udin, testBoard, 0);

    console.log(testBoard.gameBoard);

    testBoard.gameBoard = playRound(hamim, testBoard, 4);

    console.log(testBoard.gameBoard);

    testBoard.gameBoard = playRound(udin, testBoard, 1);

    console.log(testBoard.gameBoard);

    testBoard.gameBoard = playRound(hamim, testBoard, 7);
    
    console.log(testBoard.gameBoard);

    testBoard.gameBoard = playRound(udin, testBoard, 2);

    console.log(testBoard.gameBoard);
}

// Start working with the DOM

const start = document.querySelector(".start");

start.addEventListener("click", () => {
    const container = document.querySelector(".container");
    const player1 = document.querySelector(".player1");
    const player2 = document.querySelector(".player2");

    container.textContent = '';

    gameStart(player1, player2);
});