function rollDice() {
    let numOfRolls = prompt("Enter the number of dice rolls:");

    if (numOfRolls === null || numOfRolls.trim() === '') {
        document.getElementById('result').textContent = 'No number was entered.';
        return;
    }

    numOfRolls = Number(numOfRolls);

    if (isNaN(numOfRolls) || numOfRolls <= 0) {
        document.getElementById('result').textContent = 'Please enter a valid positive number.';
        return;
    }

    let sum = 0;

    for (let i = 0; i < numOfRolls; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
    }

    document.getElementById('result').textContent = `The sum of ${numOfRolls} dice rolls is: ${sum}`;
}