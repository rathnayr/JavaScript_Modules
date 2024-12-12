function rollDice(maxNumber) {
    return Math.floor(Math.random() * maxNumber) + 1;
}

function startRolling() {
    let rollResults = [];

    let maxNumber = parseInt(prompt("Enter the maximum number on the dice:"));

    if (isNaN(maxNumber) || maxNumber < 1) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    while (true) {
        let result = rollDice(maxNumber);
        rollResults.push(result);
        console.log('Roll result: ' + result);

        if (result === maxNumber) {
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