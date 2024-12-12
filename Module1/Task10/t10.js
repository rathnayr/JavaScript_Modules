function calculateProbability() {
    let numDice = prompt("Enter the number of dice:");
    let sumOfInterest = prompt("Enter the sum of eye numbers of interest:");

    if (numDice === null || sumOfInterest === null || numDice.trim() === '' || sumOfInterest.trim() === '') {
        document.getElementById('result').textContent = 'Please enter valid inputs.';
        return;
    }

    numDice = Number(numDice);
    sumOfInterest = Number(sumOfInterest);

    if (isNaN(numDice) || isNaN(sumOfInterest) || numDice <= 0 || !Number.isInteger(numDice)) {
        document.getElementById('result').textContent = 'Please enter valid positive integers for the number of dice and the sum.';
        return;
    }

    const simulations = 10000;
    let matchingRolls = 0;

    for (let i = 0; i < simulations; i++) {
        let currentSum = 0;
        for (let j = 0; j < numDice; j++) {
            currentSum += Math.floor(Math.random() * 6) + 1;
        }

        if (currentSum === sumOfInterest) {
            matchingRolls++;
        }
    }

    let probability = (matchingRolls / simulations) * 100;

    document.getElementById('result').textContent = `Probability to get sum ${sumOfInterest} with ${numDice} dice is ${probability.toFixed(2)}%`;
}