function generateNumber() {
    return Math.floor(Math.random() * 9000) + 1000; // Generates a 4-digit number
}

function checkGuess(generatedNumber, userGuess) {
    let correctPosition = 0;
    let wrongPosition = 0;

    const genArr = String(generatedNumber).split('');
    const guessArr = String(userGuess).split('');

    for (let i = 0; i < 4; i++) {
        if (genArr[i] === guessArr[i]) correctPosition++;
        else if (genArr.includes(guessArr[i])) wrongPosition++;
    }

    return `${'+'.repeat(correctPosition)}${'-'.repeat(wrongPosition)}`;
}

function startGame() {
    const playerName = prompt("Enter your name:");
    if (!playerName) return;

    document.getElementById('welcome-message').innerText = `Welcome, ${playerName}!`;
    const generatedNumber = generateNumber();

    document.getElementById('game-area').innerHTML = `
        <input type="text" id="guess" placeholder="Enter 4 digits" maxlength="4">
        <button onclick="submitGuess(${generatedNumber})">Submit</button>
    `;
}

function submitGuess(generatedNumber) {
    const userGuess = document.getElementById('guess').value;
    if (/^\d{4}$/.test(userGuess) && new Set(userGuess).size === 4) {
        const feedback = checkGuess(generatedNumber, userGuess);
        document.getElementById('feedback').innerText = feedback;
    } else {
        alert("Enter a valid 4-digit number with unique digits.");
    }
}
