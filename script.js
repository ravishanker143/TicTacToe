let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];
let player1 = '';
let player2 = '';

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function startGame() {
    player1 = document.getElementById('player1').value || 'Player 1';
    player2 = document.getElementById('player2').value || 'Player 2';
    document.getElementById('game-status').textContent = `${player1} (X)'s turn`;
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}

function makeMove(index) {
    if (!gameActive || gameState[index] !== '') return;

    gameState[index] = currentPlayer;
    document.getElementById(index).textContent = currentPlayer;

    if (checkWinner()) {
        document.getElementById('game-status').textContent = `${currentPlayer === 'X' ? player1 : player2} wins!`;
        gameActive = false;
    } else if (gameState.every(cell => cell !== '')) {
        document.getElementById('game-status').textContent = 'Draw!';
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('game-status').textContent = `${currentPlayer === 'X' ? player1 : player2} (${currentPlayer})'s turn`;
    }
}

function checkWinner() {
    return winningConditions.some(condition => {
        const [a, b, c] = condition;
        return gameState[a] && gameState[a] === gameState[b] && gameState[b] === gameState[c];
    });
}

function restartGame() {
    document.getElementById('player1').value = '';
    document.getElementById('player2').value = '';
    startGame();
}
