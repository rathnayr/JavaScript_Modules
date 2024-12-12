function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function startRolling() {
    const rollResults = [];

    while (true) {
        let result = rollDice();
        rollResults.push(result);
        console.log('Roll result: ' + result);

        if (result === 6) {
            break;
        }
    }

    const resultList = document.getElementById("rollResultsList");
    resultList.innerHTML = ""; // Clear any previous results

    rollResults.forEach((result, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Roll ${index + 1}: ${result}`;
        resultList.appendChild(listItem);
    });
}