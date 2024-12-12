function even(numbersArray) {
    let evenArray = [];
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 === 0) {
            evenArray.push(numbersArray[i]);
        }
    }
    return evenArray;
}

function processNumbers() {

    let userInput = document.getElementById("numbersInput").value;
    let numbersArray = userInput.split(',').map(num => parseInt(num.trim()));

    if (numbersArray.some(isNaN)) {
        alert("Please enter valid numbers separated by commas.");
        return;
    }

    let evenNumbersArray = even(numbersArray);

    document.getElementById("originalArray").innerText = "Original Array: " + numbersArray.join(', ');

    document.getElementById("evenNumbersArray").innerText = "New Array with Even Numbers: " + evenNumbersArray.join(', ');
}