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
    const info = document.querySelector(".infogame")

    if (board.gameBoard[0] === marker && board.gameBoard[1] === marker && board.gameBoard[2] === marker) {
        if (marker === "X") {
            info.textContent = "Player 1 Win!";
            return true
        } else {
            info.textContent = "Player 2 Win!";
            return true
        }
    } else if (board.gameBoard[0] === marker && board.gameBoard[4] === marker && board.gameBoard[8] === marker) {
        if (marker === "X") {
            info.textContent = "Player 1 Win!";
            return true
        } else {
            info.textContent = "Player 2 Win!";
            return true
        }
    } else if (board.gameBoard[0] === marker && board.gameBoard[3] === marker && board.gameBoard[6] === marker) {
        if (marker === "X") {
            info.textContent = "Player 1 Win!";
            return true
        } else {
            info.textContent = "Player 2 Win!";
            return true
        }
    } else if (board.gameBoard[2] === marker && board.gameBoard[4] === marker && board.gameBoard[6] === marker) {
        if (marker === "X") {
            info.textContent = "Player 1 Win!";
            return true
        } else {
            info.textContent = "Player 2 Win!";
            return true
        }
    } else if (board.gameBoard[2] === marker && board.gameBoard[5] === marker && board.gameBoard[8] === marker) {
        if (marker === "X") {
            info.textContent = "Player 1 Win!";
            return true
        } else {
            info.textContent = "Player 2 Win!";
            return true
        }
    } else if (board.gameBoard[6] === marker && board.gameBoard[7] === marker && board.gameBoard[8] === marker) {
        if (marker === "X") {
            info.textContent = "Player 1 Win!";
            return true
        } else {
            info.textContent = "Player 2 Win!";
            return true
        }
    } else if (board.gameBoard[3] === marker && board.gameBoard[4] === marker && board.gameBoard[5] === marker) {
        if (marker === "X") {
            info.textContent = "Player 1 Win!";
            return true
        } else {
            info.textContent = "Player 2 Win!";
            return true
        }
    } else if (board.gameBoard[1] === marker && board.gameBoard[4] === marker && board.gameBoard[7] === marker) {
        if (marker === "X") {
            info.textContent = "Player 1 Win!";
            return true
        } else {
            info.textContent = "Player 2 Win!";
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
    return boardRound
}

function gameStart(nameP1, nameP2) {
    let board = makeGameBoard();
    ronde = 1;

    const player1 = createPlayer(nameP1, 1);
    const player2 = createPlayer(nameP2, 2);

    makeScreenGame(board, player1, player2);
}

// Start working with the DOM

let ronde;

const start = document.querySelector(".start");

start.addEventListener("click", () => {
    const container = document.querySelector(".start-form");
    const game = document.querySelector(".game");
    const player1 = document.querySelector(".player1");
    const player2 = document.querySelector(".player2");

    container.textContent = '';
    container.style.cssText = "width: 0vw; height: 0vh;";
    game.style.cssText = "opacity: 100; width: 100vw; height: 100vh;";

    gameStart(player1.value, player2.value);
});

// gameStart("Dummy", "Dummy");


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

                if (tileEvent.textContent !== "") {

                } else {
                    if (cekWinner(board, player2.playerMarker)) {
                        tileEvent.textContent = "";
                        console.log("Reset game?");
                    } else {
                        tileEvent.textContent = "O";
                        board.gameBoard = playRound(player2, board, (i - 1));
                        ronde++;
                    }
                }
            } else {
                const tileEvent = document.querySelector(`.tileBoard${i}`)

                if (tileEvent.textContent !== "") {

                } else {
                    if (cekWinner(board, player1.playerMarker)) {
                        tileEvent.textContent = "";
                        console.log("Reset game?");
                    } else {
                        tileEvent.textContent = "X";
                        board.gameBoard = playRound(player1, board, (i - 1));
                        ronde++;
                    }
                }
            }
        });

        gameBoardDiv.appendChild(tile);
    }

    const resetDiv = document.createElement("div");
    const infoDiv = document.createElement("div");
    const playerArea1 = document.querySelector(".player-name1");
    const playerArea2 = document.querySelector(".player-name2");

    playerArea1.textContent = player1.playerName;
    playerArea2.textContent = player2.playerName;

    infoDiv.classList.add("infogame");
    infoDiv.textContent = "";

    resetDiv.classList.add("reset-area");
    resetDiv.textContent = "Reset Game";
    resetDiv.addEventListener("click", () => {
        const container = document.querySelector(".gameboard-area");

        container.textContent = '';
        gameStart(player1.playerName, player2.playerName);
    });

    container.appendChild(gameBoardDiv);
    container.appendChild(infoDiv);
    container.appendChild(resetDiv);
}