function startNumberInput() {
    const givenNumbers = [];
    let input;

    while (true) {
        input = prompt("Enter a number:");

        if (input === null) {
            alert("Input canceled. Exiting the program.");
            break;
        }

        let number = parseFloat(input);

        if (isNaN(number)) {
            alert("Please enter a valid number.");
            continue;
        }

        if (givenNumbers.includes(number)) {
            alert("This number has already been given. Stopping the input process.");
            break;
        }

        givenNumbers.push(number);
    }

    if (givenNumbers.length > 0) {
        givenNumbers.sort((a, b) => a - b);
        console.log("Given Numbers in Ascending Order:", givenNumbers);
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = "Given Numbers in Ascending Order: " + givenNumbers.join(", ");
    } else {
        console.log("No numbers were entered.");
        alert("No numbers were entered.");
    }
}