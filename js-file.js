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
            return true
        } else {
            console.log("Player 2 win");
            return true
        }
    } else if (board.gameBoard[0] === marker && board.gameBoard[4] === marker && board.gameBoard[8] === marker) {
        if (marker === "X") {
            console.log("Player 1 win");
            return true
        } else {
            console.log("Player 2 win");
            return true
        }
    } else if (board.gameBoard[0] === marker && board.gameBoard[3] === marker && board.gameBoard[6] === marker) {
        if (marker === "X") {
            console.log("Player 1 win");
            return true
        } else {
            console.log("Player 2 win");
            return true
        }
    } else if (board.gameBoard[2] === marker && board.gameBoard[4] === marker && board.gameBoard[6] === marker) {
        if (marker === "X") {
            console.log("Player 1 win");
            return true
        } else {
            console.log("Player 2 win");
            return true
        }
    } else if (board.gameBoard[2] === marker && board.gameBoard[5] === marker && board.gameBoard[8] === marker) {
        if (marker === "X") {
            console.log("Player 1 win");
            return true
        } else {
            console.log("Player 2 win");
            return true
        }
    } else if (board.gameBoard[6] === marker && board.gameBoard[7] === marker && board.gameBoard[8] === marker) {
        if (marker === "X") {
            console.log("Player 1 win");
            return true
        } else {
            console.log("Player 2 win");
            return true
        }
    } else if (board.gameBoard[3] === marker && board.gameBoard[4] === marker && board.gameBoard[5] === marker) {
        if (marker === "X") {
            console.log("Player 1 win");
            return true
        } else {
            console.log("Player 2 win");
            return true
        }
    } else if (board.gameBoard[1] === marker && board.gameBoard[4] === marker && board.gameBoard[7] === marker) {
        if (marker === "X") {
            console.log("Player 1 win");
            return true
        } else {
            console.log("Player 2 win");
            return true
        }
    } else {
        return false
    }
}

function playRound(player, board, pos) {
    let boardRound = board.gameBoard;
    const playerRun = player;

    putMarker(playerRun, boardRound, pos);

    if (cekWinner(board, playerRun.playerMarker)) {
        return null
    }

    console.log(board.gameBoard);

    return boardRound
}

function gameStart(nameP1, nameP2) {
    let board = makeGameBoard();
    ronde = 1;

    const player1 = createPlayer(nameP1, 1);
    const player2 = createPlayer(nameP2, 2);

    makeScreenGame(board, player1, player2);

    const container = document.querySelector(".gameboard-area");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("infogame");
    infoDiv.textContent = "Player 1 Win!";

    const resetDiv = document.createElement("div");

    resetDiv.classList.add("reset-area");
    resetDiv.textContent = "Reset Game";
    resetDiv.addEventListener("click", () => {
        const container = document.querySelector(".gameboard-area");

        container.textContent = '';
        gameStart("Dummy", "Dummy");
    });

    // container.appendChild(gameBoardDiv);
    container.appendChild(infoDiv);
    container.appendChild(resetDiv);
}

// Start working with the DOM

let ronde;

// const start = document.querySelector(".start");

// start.addEventListener("click", () => {
//     const container = document.querySelector(".start-form");
//     const game = document.querySelector(".game");
//     const player1 = document.querySelector(".player1");
//     const player2 = document.querySelector(".player2");

//     container.textContent = '';
//     container.style.cssText = "width: 0vw; height: 0vh;";
//     game.style.cssText = "opacity: 100; width: 100vw; height: 100vh;";

//     gameStart(player1, player2);
// });

gameStart("Dummy", "Dummy");


function makeScreenGame(board, player1, player2) {
    const container = document.querySelector(".gameboard-area");

    const gameBoardDiv = document.createElement("div");
    gameBoardDiv.classList.add("gameBoard");

    for (let i = 1; i <= 9; i++) {
        const tile = document.createElement("div");

        tile.classList.add(`tileBoard${i}`);
        tile.addEventListener("click", () => {
            if (ronde % 2 === 0) {
                const tileEvent = document.querySelector(`.tileBoard${i}`)

                if (cekWinner(board, player2.playerMarker)) {
                    tileEvent.textContent = "";
                    console.log("Reset game?");
                } else {
                    tileEvent.textContent = "O";
                    board.gameBoard = playRound(player2, board, (i - 1));
                    ronde++;
                }
            } else {
                const tileEvent = document.querySelector(`.tileBoard${i}`)

                if (cekWinner(board, player1.playerMarker)) {
                    tileEvent.textContent = "";
                    console.log("Reset game?");
                } else {
                    tileEvent.textContent = "X";
                    board.gameBoard = playRound(player1, board, (i - 1));
                    ronde++;
                }
            }
        });

        gameBoardDiv.appendChild(tile);
    }

    container.appendChild(gameBoardDiv);

}